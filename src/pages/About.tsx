import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Target, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Users Helped', value: '50,000+', icon: Users },
    { label: 'Career Predictions', value: '95%', icon: Target },
    { label: 'Success Rate', value: '89%', icon: Award },
    { label: 'AI Accuracy', value: '97%', icon: Brain },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description: 'Former Google recruiter with 15+ years in talent acquisition'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Chief AI Officer',
      description: 'PhD in Machine Learning, expert in career prediction algorithms'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      description: 'Former career counselor, passionate about professional development'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About MindRoute</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're revolutionizing career guidance with AI-powered insights, helping professionals 
              navigate their career paths with confidence and precision.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <stat.icon className="h-8 w-8 text-primary mx-auto" />
                  <CardTitle className="text-2xl">{stat.value}</CardTitle>
                  <CardDescription>{stat.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Mission Section */}
          <div className="grid gap-8 md:grid-cols-2 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To democratize career guidance by providing AI-powered insights that help 
                  professionals make informed decisions about their career paths. We believe 
                  everyone deserves access to personalized career advice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A world where career uncertainty is eliminated through intelligent predictions 
                  and guidance, enabling every professional to reach their full potential and 
                  find fulfillment in their work.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {team.map((member, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-full mx-auto mb-4"></div>
                    <CardTitle className="text-center">{member.name}</CardTitle>
                    <CardDescription className="text-center">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Continuously advancing AI technology to provide better career insights
                  </p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-2">Accessibility</h3>
                  <p className="text-sm text-muted-foreground">
                    Making professional career guidance available to everyone
                  </p>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-2">Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    Delivering the highest quality insights and user experience
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;