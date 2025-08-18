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
      color: 'text-blue-500'
    },
    {
      icon: Target,
      title: 'Career Prediction',
      description: 'Machine learning models predict optimal career paths based on your skills and experience.',
      color: 'text-purple-500'
    },
    {
      icon: FileText,
      title: 'Resume Enhancement',
      description: 'Get personalized suggestions to improve your resume and increase your job prospects.',
      color: 'text-green-500'
    },
    {
      icon: Download,
      title: 'Template Library',
      description: 'Access professional resume templates tailored to your predicted career domain.',
      color: 'text-orange-500'
    },
    {
      icon: MessageSquare,
      title: 'AI Career Chat',
      description: 'Interactive chatbot provides instant answers to your career-related questions.',
      color: 'text-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Detailed Analytics',
      description: 'Comprehensive reports with confidence scores and improvement recommendations.',
      color: 'text-indigo-500'
    },
    {
      icon: Sparkles,
      title: 'Smart Recommendations',
      description: 'Personalized career guidance based on industry trends and market demands.',
      color: 'text-yellow-500'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data is secure and private. We never share your information with third parties.',
      color: 'text-red-500'
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Powerful Features for
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Career Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            MindRoute combines cutting-edge AI technology with career expertise to provide 
            comprehensive guidance for your professional journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-secondary rounded-xl w-fit">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
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