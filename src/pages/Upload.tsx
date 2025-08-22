import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload as UploadIcon, FileText, CheckCircle, Brain, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Upload = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [predictedCareer, setPredictedCareer] = useState<string>('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  // AI Resume Analysis Demo Function
  const analyzeResumeDemo = async (file: File) => {
    // Simulate AI analysis with realistic results
    const careerPredictions = [
      { field: 'Software Development', confidence: 0.92, skills: ['JavaScript', 'React', 'Node.js', 'Python', 'Git'] },
      { field: 'Data Science', confidence: 0.89, skills: ['Python', 'Machine Learning', 'SQL', 'Statistics', 'TensorFlow'] },
      { field: 'Product Management', confidence: 0.85, skills: ['Strategic Planning', 'Agile', 'Analytics', 'Leadership', 'Communication'] },
      { field: 'Digital Marketing', confidence: 0.88, skills: ['SEO', 'Google Analytics', 'Content Strategy', 'Social Media', 'PPC'] },
      { field: 'UI/UX Design', confidence: 0.91, skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research', 'Design Systems'] },
    ];
    
    const randomPrediction = careerPredictions[Math.floor(Math.random() * careerPredictions.length)];
    
    return {
      prediction: randomPrediction.field.toLowerCase().replace(' ', '_'),
      confidence: randomPrediction.confidence,
      skills: randomPrediction.skills,
      recommendations: [
        `Consider highlighting your ${randomPrediction.skills[0]} expertise more prominently`,
        `Add quantifiable achievements to demonstrate ${randomPrediction.skills[1]} impact`,
        `Include relevant certifications in ${randomPrediction.field}`,
      ],
      fileName: file.name,
      fileSize: (file.size / 1024).toFixed(1) + ' KB'
    };
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF, DOC, or DOCX file.",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 10MB.",
        variant: "destructive",
      });
      return;
    }

    setUploadedFile(file);
    setIsAnalyzing(true);
    
    try {
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const results = await analyzeResumeDemo(file);
      
      setPredictedCareer(results.prediction);
      setAnalysisResults(results);
      
      // Store in localStorage for templates page
      localStorage.setItem('careerPrediction', results.prediction);
      localStorage.setItem('careerConfidence', results.confidence.toString());
      localStorage.setItem('extractedSkills', JSON.stringify(results.skills));
      localStorage.setItem('analysisResults', JSON.stringify(results));
      
      setIsAnalyzing(false);
      setAnalysisComplete(true);
      
      toast({
        title: "Analysis Complete!",
        description: `Your resume has been analyzed for ${results.prediction.replace('_', ' ')} roles.`,
      });
      
    } catch (error) {
      console.error('Analysis failed:', error);
      setIsAnalyzing(false);
      toast({
        title: "Analysis Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files[0]) {
      const event = { target: { files } } as any;
      handleFileUpload(event);
    }
  };

  const resetUpload = () => {
    setUploadedFile(null);
    setIsAnalyzing(false);
    setAnalysisComplete(false);
    setPredictedCareer('');
    setAnalysisResults(null);
  };

  const handleViewTemplates = () => {
    navigate('/templates');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Upload Your Resume</h1>
            <p className="text-xl text-muted-foreground">
              Get AI-powered insights and career predictions by uploading your resume
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UploadIcon className="h-5 w-5" />
                  Upload Resume
                </CardTitle>
                <CardDescription>
                  Upload your resume in PDF, DOC, or DOCX format
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!analysisComplete ? (
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center"
                       onDragOver={handleDragOver}
                       onDrop={handleDrop}>
                    {isAnalyzing ? (
                      <div>
                        <Brain className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse" />
                        {uploadedFile && (
                          <p className="text-sm font-medium mb-2">{uploadedFile.name}</p>
                        )}
                        <p className="text-sm text-muted-foreground mb-4">
                          AI is analyzing your resume...
                        </p>
                        <div className="w-full bg-muted rounded-full h-2 mb-4">
                          <div className="bg-primary h-2 rounded-full animate-pulse w-3/4"></div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-sm text-muted-foreground mb-4">
                          Drag and drop your resume here, or click to browse
                        </p>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="resume-upload"
                        />
                        <label htmlFor="resume-upload">
                          <Button variant="outline" asChild>
                            <span className="cursor-pointer">Browse Files</span>
                          </Button>
                        </label>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center p-8">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Analysis Complete!</h3>
                    {analysisResults && (
                      <div className="space-y-4">
                        <div className="bg-muted/50 rounded-lg p-4 text-left">
                          <p className="text-sm font-medium mb-2">File: {analysisResults.fileName}</p>
                          <p className="text-sm text-muted-foreground mb-3">Size: {analysisResults.fileSize}</p>
                          <div className="mb-3">
                            <p className="text-sm font-medium mb-1">Predicted Career:</p>
                            <p className="text-lg font-semibold text-primary capitalize">
                              {analysisResults.prediction.replace('_', ' ')}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Confidence: {(analysisResults.confidence * 100).toFixed(0)}%
                            </p>
                          </div>
                          <div className="mb-3">
                            <p className="text-sm font-medium mb-2">Key Skills Found:</p>
                            <div className="flex flex-wrap gap-1">
                              {analysisResults.skills?.slice(0, 3).map((skill: string, index: number) => (
                                <span key={index} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Button onClick={handleViewTemplates} className="w-full">
                            View Recommended Templates
                          </Button>
                          <Button onClick={resetUpload} variant="outline" className="w-full">
                            Upload Another Resume
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  What You'll Get
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-sm">AI-powered career predictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-sm">Resume enhancement suggestions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-sm">Skill gap analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-sm">Career pathway recommendations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Upload;