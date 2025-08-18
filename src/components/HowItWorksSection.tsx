import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Brain, Target, Download, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How
            <span className="bg-gradient-primary bg-clip-text text-transparent"> MindRoute </span>
            Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0">
                  <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary" />
                </div>
              )}

              <Card className="relative z-10 text-center hover:shadow-elegant transition-all duration-300 group border-border/50">
                <CardHeader className="pb-4">
                  {/* Step Number */}
                  <div className="mx-auto mb-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="mx-auto mb-4 p-3 bg-secondary rounded-xl w-fit group-hover:bg-primary/10 transition-colors">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <CardTitle className="text-xl font-semibold mb-2">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
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
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-primary shadow-elegant text-lg px-8 py-4 h-auto"
          >
            <Upload className="h-5 w-5 mr-2" />
            Start Your Career Analysis
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;