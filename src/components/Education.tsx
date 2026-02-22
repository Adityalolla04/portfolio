import { Card } from '@/components/ui/card';
import { GraduationCap, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const certifications = [
    "Azure Certified Developer Associate",
    "AWS Data Engineer Associate",
    "AI Powered Applications in .NET",
    "Oracle Cloud Certified LLM Professional"
  ];

  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground">My academic background and professional credentials.</p>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Card */}
          <Card className="glass-card hover-glow p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="skill-icon-container">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Education</h3>
                <p className="text-muted-foreground">Academic Background</p>
              </div>
            </div>
            <div className="space-y-3 pl-4 border-l-2 border-primary/30">
              <div>
                <p className="font-semibold">Master of Science in Data Science</p>
                <p className="text-sm text-muted-foreground">SUNY University at Buffalo | Jan 2024 - May 2025</p>
              </div>
            </div>
          </Card>

          {/* Certifications Card */}
          <Card className="glass-card hover-glow p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="skill-icon-container">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Certifications</h3>
                <p className="text-muted-foreground">Professional Credentials</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <Badge 
                  key={cert}
                  variant="secondary"
                >
                  <span>{cert}</span>
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
