import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Eye } from 'lucide-react';

const Templates = () => {
  const templates = [
    {
      name: "Modern Professional",
      description: "Clean and modern design perfect for tech and business roles",
      category: "Professional",
      downloads: "12.5k"
    },
    {
      name: "Creative Designer",
      description: "Eye-catching template for creative professionals and designers",
      category: "Creative",
      downloads: "8.2k"
    },
    {
      name: "Executive Leader",
      description: "Sophisticated template for senior management positions",
      category: "Executive",
      downloads: "6.7k"
    },
    {
      name: "Fresh Graduate",
      description: "Perfect starter template for new graduates and entry-level positions",
      category: "Entry Level",
      downloads: "15.3k"
    },
    {
      name: "Technical Expert",
      description: "Specialized template for developers and technical professionals",
      category: "Technical",
      downloads: "9.1k"
    },
    {
      name: "Healthcare Professional",
      description: "Tailored for medical and healthcare industry professionals",
      category: "Healthcare",
      downloads: "4.8k"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Professional Resume Templates</h1>
            <p className="text-xl text-muted-foreground">
              Choose from our collection of ATS-friendly, professionally designed templates
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((template, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <FileText className="h-8 w-8 text-primary" />
                    <Badge variant="secondary">{template.category}</Badge>
                  </div>
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">
                      {template.downloads} downloads
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                    <Button size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Templates;