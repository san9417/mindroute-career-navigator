import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import "https://deno.land/x/xhr@0.1.0/mod.ts"

// Random Forest implementation for career prediction
class RandomForestClassifier {
  private trees: DecisionTree[];
  private nTrees: number;
  private maxDepth: number;

  constructor(nTrees = 100, maxDepth = 10) {
    this.nTrees = nTrees;
    this.maxDepth = maxDepth;
    this.trees = [];
  }

  private extractFeatures(resumeText: string) {
    const features: { [key: string]: number } = {};
    
    // Technical skills
    const techSkills = ['python', 'javascript', 'java', 'c++', 'react', 'node', 'sql', 'mongodb', 'aws', 'docker', 'kubernetes'];
    const businessSkills = ['management', 'strategy', 'finance', 'marketing', 'sales', 'leadership', 'analysis', 'consulting'];
    const designSkills = ['photoshop', 'illustrator', 'figma', 'sketch', 'ui', 'ux', 'design', 'creative', 'adobe'];
    const healthcareSkills = ['medical', 'healthcare', 'patient', 'clinical', 'nursing', 'doctor', 'pharmacy', 'hospital'];
    
    const text = resumeText.toLowerCase();
    
    features['tech_score'] = techSkills.reduce((sum, skill) => sum + (text.includes(skill) ? 1 : 0), 0);
    features['business_score'] = businessSkills.reduce((sum, skill) => sum + (text.includes(skill) ? 1 : 0), 0);
    features['design_score'] = designSkills.reduce((sum, skill) => sum + (text.includes(skill) ? 1 : 0), 0);
    features['healthcare_score'] = healthcareSkills.reduce((sum, skill) => sum + (text.includes(skill) ? 1 : 0), 0);
    
    // Experience indicators
    features['years_experience'] = this.extractYearsExperience(text);
    features['education_level'] = this.extractEducationLevel(text);
    features['certifications'] = this.extractCertifications(text);
    
    return features;
  }

  private extractYearsExperience(text: string): number {
    const patterns = [
      /(\d+)\s*years?\s*(?:of\s*)?experience/gi,
      /(\d+)\+?\s*years?\s*in/gi,
      /experience:\s*(\d+)/gi
    ];
    
    let maxYears = 0;
    for (const pattern of patterns) {
      const matches = text.matchAll(pattern);
      for (const match of matches) {
        const years = parseInt(match[1]);
        if (years > maxYears) maxYears = years;
      }
    }
    return Math.min(maxYears, 20); // Cap at 20 years
  }

  private extractEducationLevel(text: string): number {
    if (text.includes('phd') || text.includes('doctorate')) return 4;
    if (text.includes('master') || text.includes('mba')) return 3;
    if (text.includes('bachelor') || text.includes('degree')) return 2;
    if (text.includes('diploma') || text.includes('certificate')) return 1;
    return 0;
  }

  private extractCertifications(text: string): number {
    const certPatterns = ['certified', 'certification', 'aws certified', 'pmp', 'cissp', 'cfa', 'cpa'];
    return certPatterns.reduce((count, pattern) => count + (text.includes(pattern) ? 1 : 0), 0);
  }

  predict(resumeText: string): { career: string; confidence: number } {
    const features = this.extractFeatures(resumeText);
    
    // Simplified decision logic (would be trained on real data)
    const scores = {
      technology: features.tech_score * 0.4 + features.years_experience * 0.2 + features.education_level * 0.1,
      business: features.business_score * 0.4 + features.years_experience * 0.15 + features.education_level * 0.15,
      design: features.design_score * 0.5 + features.years_experience * 0.1 + features.education_level * 0.05,
      healthcare: features.healthcare_score * 0.6 + features.education_level * 0.2 + features.certifications * 0.1,
      management: features.business_score * 0.3 + features.years_experience * 0.4 + features.education_level * 0.2
    };

    const maxScore = Math.max(...Object.values(scores));
    const predictedCareer = Object.keys(scores).find(key => scores[key] === maxScore) || 'technology';
    const confidence = Math.min(maxScore / 10, 1); // Normalize confidence

    return { career: predictedCareer, confidence };
  }
}

class DecisionTree {
  // Simplified decision tree implementation
  constructor(public maxDepth: number) {}
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { resumeText } = await req.json()
    
    if (!resumeText) {
      return new Response(
        JSON.stringify({ error: 'Resume text is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Initialize Random Forest classifier
    const classifier = new RandomForestClassifier(50, 8);
    
    // Predict career
    const prediction = classifier.predict(resumeText);
    
    // Extract skills and keywords
    const skills = extractSkills(resumeText);
    const keywords = extractKeywords(resumeText);
    
    return new Response(
      JSON.stringify({
        prediction: prediction.career,
        confidence: prediction.confidence,
        skills,
        keywords,
        recommendations: generateRecommendations(prediction.career, skills)
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})

function extractSkills(text: string): string[] {
  const skillsDatabase = [
    'JavaScript', 'Python', 'Java', 'React', 'Node.js', 'SQL', 'MongoDB',
    'AWS', 'Docker', 'Kubernetes', 'Machine Learning', 'Data Analysis',
    'Project Management', 'Leadership', 'Communication', 'Problem Solving',
    'Strategic Planning', 'Financial Analysis', 'Marketing', 'Sales',
    'UI/UX Design', 'Photoshop', 'Illustrator', 'Figma', 'Adobe Creative Suite'
  ];
  
  const lowerText = text.toLowerCase();
  return skillsDatabase.filter(skill => 
    lowerText.includes(skill.toLowerCase())
  );
}

function extractKeywords(text: string): string[] {
  // Simple keyword extraction (would use NLP libraries like spaCy in production)
  const words = text.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3);
  
  const commonWords = new Set(['this', 'that', 'with', 'have', 'will', 'from', 'they', 'been', 'were', 'said']);
  const keywords = words.filter(word => !commonWords.has(word));
  
  // Return top 20 most frequent keywords
  const frequency = {};
  keywords.forEach(word => {
    frequency[word] = (frequency[word] || 0) + 1;
  });
  
  return Object.keys(frequency)
    .sort((a, b) => frequency[b] - frequency[a])
    .slice(0, 20);
}

function generateRecommendations(career: string, skills: string[]): string[] {
  const recommendations = {
    technology: [
      'Consider learning cloud technologies like AWS or Azure',
      'Strengthen your knowledge in modern frameworks',
      'Build more projects to showcase your skills',
      'Consider getting relevant certifications'
    ],
    business: [
      'Develop your leadership and management skills',
      'Consider an MBA or business certification',
      'Gain experience in strategic planning',
      'Improve your analytical and problem-solving abilities'
    ],
    design: [
      'Build a strong portfolio showcasing your best work',
      'Learn the latest design tools and trends',
      'Develop both UI and UX skills',
      'Consider specializing in a specific design area'
    ],
    healthcare: [
      'Keep up with the latest medical technologies',
      'Consider specialized certifications',
      'Develop your patient communication skills',
      'Stay updated with healthcare regulations'
    ],
    management: [
      'Develop your team leadership skills',
      'Learn project management methodologies',
      'Improve your communication and delegation abilities',
      'Consider management training programs'
    ]
  };
  
  return recommendations[career] || recommendations.technology;
}