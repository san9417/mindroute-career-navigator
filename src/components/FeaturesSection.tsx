import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Brain, 
  FileText, 
  Target, 
  Sparkles, 
  Download, 
  MessageSquare, 
  BarChart3, 
  Shield 
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced NLP algorithms extract and analyze key information from your resume with 95% accuracy.',
      gradient: 'from-primary to-primary/80'
    },
    {
      icon: Target,
      title: 'Career Prediction',
      description: 'Machine learning models predict optimal career paths based on your skills and experience.',
      gradient: 'from-accent to-accent/80'
    },
    {
      icon: FileText,
      title: 'Resume Enhancement',
      description: 'Get personalized suggestions to improve your resume and increase your job prospects.',
      gradient: 'from-primary to-accent'
    },
    {
      icon: Download,
      title: 'Template Library',
      description: 'Access professional resume templates tailored to your predicted career domain.',
      gradient: 'from-accent to-primary'
    },
    {
      icon: MessageSquare,
      title: 'AI Career Chat',
      description: 'Interactive chatbot provides instant answers to your career-related questions.',
      gradient: 'from-primary/80 to-accent/80'
    },
    {
      icon: BarChart3,
      title: 'Detailed Analytics',
      description: 'Comprehensive reports with confidence scores and improvement recommendations.',
      gradient: 'from-accent/80 to-primary'
    },
    {
      icon: Sparkles,
      title: 'Smart Recommendations',
      description: 'Personalized career guidance based on industry trends and market demands.',
      gradient: 'from-primary to-accent/70'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data is secure and private. We never share your information with third parties.',
      gradient: 'from-accent to-primary/70'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Powerful Features for
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Career Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            MindRoute combines cutting-edge AI technology with career expertise to provide 
            comprehensive guidance for your professional journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border-border/30 bg-gradient-card backdrop-blur-sm transform hover:scale-105"
            >
              <CardHeader className="text-center pb-6">
                <div className={`mx-auto mb-6 p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl w-fit shadow-button`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;