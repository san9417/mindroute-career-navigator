import { Button } from '@/components/ui/button';
import { ArrowRight, Upload, Sparkles, Target } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleUploadResume = () => {
    navigate('/upload');
  };

  const handleExploreFeatures = () => {
    // Scroll to features section
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Career Guidance Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-accent opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-button opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-card backdrop-blur-sm border-2 border-primary/20 rounded-full px-8 py-3 mb-8 shadow-elegant">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold">
              AI-Powered Career Intelligence
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Navigate Your
            <span className="block bg-gradient-primary bg-clip-text text-transparent drop-shadow-sm">
              Dream Career
            </span>
            <span className="text-4xl md:text-5xl lg:text-6xl text-muted-foreground font-light">with AI</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Upload your resume and let our advanced AI analyze your profile, predict optimal career paths, 
            and provide personalized recommendations to accelerate your professional journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="text-lg px-10 py-6 h-auto"
              onClick={handleUploadResume}
            >
              <Upload className="h-6 w-6 mr-3" />
              Upload Resume Now
              <ArrowRight className="h-6 w-6 ml-3" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-10 py-6 h-auto"
              onClick={handleExploreFeatures}
            >
              <Target className="h-6 w-6 mr-3" />
              Explore Features
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-card rounded-2xl shadow-card border border-border/50 hover:shadow-hover transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">10,000+</div>
              <div className="text-muted-foreground font-medium">Resumes Analyzed</div>
            </div>
            <div className="text-center p-6 bg-gradient-card rounded-2xl shadow-card border border-border/50 hover:shadow-hover transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-3">95%</div>
              <div className="text-muted-foreground font-medium">Accuracy Rate</div>
            </div>
            <div className="text-center p-6 bg-gradient-card rounded-2xl shadow-card border border-border/50 hover:shadow-hover transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-button bg-clip-text text-transparent mb-3">50+</div>
              <div className="text-muted-foreground font-medium">Career Domains</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;