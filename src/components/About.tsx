import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Languages, Award, Briefcase, Code2 } from 'lucide-react';

const About = () => {
  const certifications = [
    "AWS Certified Data Engineer – Associate",
    "Azure Certified Developer Associate",
    "Microsoft Azure Fundamentals"
  ];

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building secure, scalable full-stack solutions that drive business value
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              A results-driven <span className="text-primary font-semibold">Full-Stack Engineer</span> with 3+ years designing and delivering 
              secure, high-performance <span className="text-accent font-semibold">Python, FastAPI, ASP.NET Core</span> solutions—end-to-end Web APIs, 
              TypeScript UIs backed by SQL Server, PostgreSQL, and NoSQL for legal tech and financial services.
            </p>
            
            <p className="text-lg leading-relaxed">
              Skilled in <span className="text-primary font-semibold">Data Analysis, Machine Learning, LangChain, Azure OpenAI</span>, 
              JWT/OIDC, Swagger, and CI/CD with Git and Jenkins. I build clean, versioned APIs and intuitive UI flows that 
              integrate seamlessly with enterprise systems.
            </p>
            
            <p className="text-lg leading-relaxed">
              Notable impact includes <span className="text-accent font-semibold">converting metadata searches from hours to seconds</span>, 
              shipping the Termination Filings Filter as a full Database, API, and UI feature, and reducing manual triage by 40% through 
              pagination, advanced filtering, and UX improvements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <Card className="glass-card hover-glow p-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Education</p>
                    <p className="text-sm text-muted-foreground">M.S. in Computer Science</p>
                    <p className="text-sm text-muted-foreground">SUNY University at Buffalo</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card hover-glow p-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm text-muted-foreground">Plano, TX</p>
                    <p className="text-sm text-muted-foreground">Open to Remote Work</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Skills and Info Cards */}
          <div className="space-y-6">
            <Card className="glass-card hover-glow p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <Badge key={cert} variant="secondary" className="text-sm">
                    {cert}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="glass-card hover-glow p-6">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-semibold">Core Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">FastAPI</Badge>
                <Badge variant="outline">C#</Badge>
                <Badge variant="outline">ASP.NET Core</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Angular</Badge>
                <Badge variant="outline">SQL Server</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
              </div>
            </Card>

            <Card className="glass-card hover-glow p-6">
              <div className="flex items-center gap-3 mb-4">
                <Languages className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">English</Badge>
                <Badge variant="secondary">Telugu</Badge>
                <Badge variant="secondary">Hindi</Badge>
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="glass-card hover-glow p-4 text-center">
                <p className="text-3xl font-bold gradient-text">3+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </Card>
              <Card className="glass-card hover-glow p-4 text-center">
                <p className="text-3xl font-bold gradient-text">40+</p>
                <p className="text-sm text-muted-foreground">Defects Resolved</p>
              </Card>
              <Card className="glass-card hover-glow p-4 text-center">
                <p className="text-3xl font-bold gradient-text">40%</p>
                <p className="text-sm text-muted-foreground">Triage Time Reduced</p>
              </Card>
              <Card className="glass-card hover-glow p-4 text-center">
                <p className="text-3xl font-bold gradient-text">25%</p>
                <p className="text-sm text-muted-foreground">Relevance Improvement</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
