import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Award, Briefcase } from 'lucide-react';

const About = () => {
  const certifications = [
    "AWS Certified Data Engineer – Associate",
    "Azure Certified Developer Associate",
    "Microsoft Azure Fundamentals"
  ];

  const highlights = [
    { emoji: "⚡", text: "Developing highly performant backend APIs and frontend applications" },
    { emoji: "🔧", text: "Building scalable microservices with Python FastAPI and ASP.NET Core" },
    { emoji: "🤖", text: "Integrating AI/ML solutions using LangChain, Azure OpenAI, and RAG" },
    { emoji: "📊", text: "Creating data-driven dashboards and analytics solutions" },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Know Who <span className="gradient-text">I Am</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-primary)' }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-5xl">🧑‍💻</span>
              <div>
                <h3 className="text-2xl font-bold mb-4">Hi Everyone!</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am <span className="text-primary font-semibold">Aditya Srivatsav Lolla</span> from{' '}
                  <span className="text-accent font-medium">Plano, Texas 🇺🇸</span>
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-primary font-semibold">Full-Stack Software Engineer</span> with 
              3+ years of experience designing and delivering secure, high-performance solutions for 
              legal tech and financial services.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my <span className="text-accent font-medium">Master's in Computer Science</span> at 
              SUNY University at Buffalo, I specialize in building end-to-end Web APIs, 
              TypeScript UIs, and AI-powered applications.
            </p>

            {/* Highlights */}
            <div className="space-y-3 pt-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="space-y-6">
            {/* Education Card */}
            <Card className="glass-card hover-glow p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="skill-icon-container">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Education</h4>
                  <p className="text-muted-foreground">Academic Background</p>
                </div>
              </div>
              <div className="space-y-3 pl-4 border-l-2 border-primary/30">
                <div>
                  <p className="font-semibold">Master of Science in Computer Science</p>
                  <p className="text-sm text-muted-foreground">SUNY University at Buffalo | Jan 2024 - May 2025</p>
                </div>
                <div>
                  <p className="font-semibold">Bachelor of Technology in Mechanical Engineering</p>
                  <p className="text-sm text-muted-foreground">SRM Institute of Technology | Jun 2017 - Jun 2021</p>
                </div>
              </div>
            </Card>

            {/* Location Card */}
            <Card className="glass-card hover-glow p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="skill-icon-container">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Location</h4>
                  <p className="text-muted-foreground">Where I'm Based</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <span className="text-lg">Plano, TX - Open to Remote Work</span>
              </div>
            </Card>

            {/* Certifications Card */}
            <Card className="glass-card hover-glow p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="skill-icon-container">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Certifications</h4>
                  <p className="text-muted-foreground">Professional Credentials</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <Badge 
                    key={cert} 
                    className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 transition-colors"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="glass-card hover-glow p-4 text-center">
                <p className="text-3xl font-bold gradient-text">3+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </Card>
              <Card className="glass-card hover-glow p-4 text-center">
                <p className="text-3xl font-bold gradient-text">40%</p>
                <p className="text-sm text-muted-foreground">Triage Reduction</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
