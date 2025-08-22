import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Brain, Target, Download, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HowItWorksSection = () => {
  const navigate = useNavigate();

  const handleStartAnalysis = () => {
    navigate('/upload');
  };
  const steps = [
    {
      number: 1,
      icon: Upload,
      title: 'Upload Your Resume',
      description: 'Simply drag and drop your resume in PDF or DOCX format. Our system supports all major file types.',
      action: 'Upload Now'
    },
    {
      number: 2,
      icon: Brain,
      title: 'AI Analysis',
      description: 'Our advanced NLP algorithms extract skills, experience, education, and key achievements from your resume.',
      action: 'Learn More'
    },
    {
      number: 3,
      icon: Target,
      title: 'Career Prediction',
      description: 'Machine learning models analyze your profile and predict the most suitable career paths with confidence scores.',
      action: 'See Example'
    },
    {
      number: 4,
      icon: Download,
      title: 'Get Recommendations',
      description: 'Receive personalized suggestions, enhanced resume templates, and actionable career guidance.',
      action: 'View Results'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            How
            <span className="bg-gradient-primary bg-clip-text text-transparent"> MindRoute </span>
            Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our simple 4-step process transforms your resume into actionable career insights 
            using state-of-the-art artificial intelligence.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0">
                  <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary" />
                </div>
              )}

              <Card className="relative z-10 text-center hover:shadow-hover transition-all duration-500 group border-border/50 bg-gradient-card backdrop-blur-sm transform hover:scale-105">
                <CardHeader className="pb-6">
                  {/* Step Number */}
                  <div className="mx-auto mb-6 w-16 h-16 bg-gradient-button rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl shadow-button">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="mx-auto mb-6 p-4 bg-secondary/50 rounded-2xl w-fit group-hover:bg-primary/10 transition-all duration-300 shadow-card">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold mb-4">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-8 leading-relaxed text-base">
                    {step.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    {step.action}
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Button 
            size="lg" 
            className="text-lg px-12 py-6 h-auto"
            onClick={handleStartAnalysis}
          >
            <Upload className="h-6 w-6 mr-3" />
            Start Your Career Analysis
            <ArrowRight className="h-6 w-6 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;