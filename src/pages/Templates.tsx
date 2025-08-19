import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FileText, Download, Eye, Briefcase, Code, Palette, Users, Heart, GraduationCap } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  careerField: string;
  previewUrl: string;
  downloadUrl: string;
  icon: React.ComponentType<{ className?: string }>;
}

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [predictedCareer, setPredictedCareer] = useState<string | null>(null);

  const allTemplates: Template[] = [
    {
      id: "modern-professional",
      name: "Modern Professional",
      description: "Clean and modern design perfect for business and management roles",
      category: "Professional",
      careerField: "business",
      previewUrl: "/api/templates/modern-professional/preview",
      downloadUrl: "/api/templates/modern-professional/download",
      icon: Briefcase
    },
    {
      id: "tech-expert",
      name: "Technical Expert",
      description: "Specialized template for developers and technical professionals",
      category: "Technical",
      careerField: "technology",
      previewUrl: "/api/templates/tech-expert/preview",
      downloadUrl: "/api/templates/tech-expert/download",
      icon: Code
    },
    {
      id: "creative-designer",
      name: "Creative Designer",
      description: "Eye-catching template for creative professionals and designers",
      category: "Creative",
      careerField: "design",
      previewUrl: "/api/templates/creative-designer/preview",
      downloadUrl: "/api/templates/creative-designer/download",
      icon: Palette
    },
    {
      id: "healthcare-professional",
      name: "Healthcare Professional",
      description: "Tailored for medical and healthcare industry professionals",
      category: "Healthcare",
      careerField: "healthcare",
      previewUrl: "/api/templates/healthcare-professional/preview",
      downloadUrl: "/api/templates/healthcare-professional/download",
      icon: Heart
    },
    {
      id: "fresh-graduate",
      name: "Fresh Graduate",
      description: "Perfect starter template for new graduates and entry-level positions",
      category: "Entry Level",
      careerField: "general",
      previewUrl: "/api/templates/fresh-graduate/preview",
      downloadUrl: "/api/templates/fresh-graduate/download",
      icon: GraduationCap
    },
    {
      id: "leadership-executive",
      name: "Leadership Executive",
      description: "Sophisticated template for senior management and executive positions",
      category: "Executive",
      careerField: "management",
      previewUrl: "/api/templates/leadership-executive/preview",
      downloadUrl: "/api/templates/leadership-executive/download",
      icon: Users
    }
  ];

  useEffect(() => {
    // Get predicted career from localStorage or previous analysis
    const storedPrediction = localStorage.getItem('careerPrediction');
    if (storedPrediction) {
      setPredictedCareer(storedPrediction);
    }
  }, []);

  const getRecommendedTemplates = () => {
    if (!predictedCareer) return allTemplates;
    
    // Filter templates based on predicted career field
    const recommended = allTemplates.filter(template => 
      template.careerField === predictedCareer || template.careerField === 'general'
    );
    
    // If no specific matches, return all templates
    return recommended.length > 0 ? recommended : allTemplates;
  };

  const handlePreview = (template: Template) => {
    setSelectedTemplate(template);
  };

  const handleDownload = (template: Template) => {
    // In a real app, this would trigger the actual download
    console.log(`Downloading template: ${template.name}`);
    // For now, we'll just show an alert
    alert(`Downloading ${template.name} template...`);
  };

  const templates = getRecommendedTemplates();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              {predictedCareer ? 'Recommended Resume Templates' : 'Professional Resume Templates'}
            </h1>
            <p className="text-xl text-muted-foreground">
              {predictedCareer 
                ? `Templates optimized for your predicted career in ${predictedCareer}` 
                : 'Choose from our collection of ATS-friendly, professionally designed templates'
              }
            </p>
            {predictedCareer && (
              <Badge variant="secondary" className="mt-2">
                Personalized for {predictedCareer} careers
              </Badge>
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <Card key={template.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <template.icon className="h-8 w-8 text-primary" />
                    <Badge variant="secondary">{template.category}</Badge>
                  </div>
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handlePreview(template)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          Preview
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh]">
                        <DialogHeader>
                          <DialogTitle>{template.name} Preview</DialogTitle>
                        </DialogHeader>
                        <div className="flex items-center justify-center h-96 bg-muted rounded-lg">
                          <div className="text-center">
                            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                            <p className="text-muted-foreground">
                              Template preview for {template.name}
                            </p>
                            <p className="text-sm text-muted-foreground mt-2">
                              In a real application, this would show the actual template preview
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleDownload(template)}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {templates.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No templates found</h3>
              <p className="text-muted-foreground">
                Upload your resume first to get personalized template recommendations.
              </p>
              <Button className="mt-4" onClick={() => window.location.href = '/upload'}>
                Upload Resume
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Templates;