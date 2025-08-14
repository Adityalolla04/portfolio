import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Languages, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about turning complex data into meaningful insights that drive business decisions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Data Engineer with over <span className="text-primary font-semibold">3 years of experience</span> in 
              ETL pipeline development, cloud computing, and machine learning. I specialize in developing 
              data models, optimizing workflows, and deploying scalable solutions using 
              <span className="text-accent font-semibold"> AWS, GCP, and Azure</span> platforms.
            </p>
            
            <p className="text-lg leading-relaxed">
              My expertise lies in leveraging <span className="text-primary font-semibold">Python, SQL, and big data technologies</span> to 
              enhance data accuracy, improve business performance, and streamline data processes. 
              I'm enthusiastic about contributing to innovative projects that drive actionable insights and operational excellence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <Card className="glass-card hover-glow p-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Education</p>
                    <p className="text-sm text-muted-foreground">Master's in Data Science</p>
                    <p className="text-sm text-muted-foreground">University at Buffalo</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card hover-glow p-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm text-muted-foreground">United States</p>
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
                <Languages className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">English</Badge>
                <Badge variant="secondary">Telugu</Badge>
                <Badge variant="secondary">Hindi</Badge>
                <Badge variant="outline">German (Beginner)</Badge>
              </div>
            </Card>

            <Card className="glass-card hover-glow p-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-semibold">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Cricket</Badge>
                <Badge variant="secondary">Cooking</Badge>
                <Badge variant="secondary">Data Visualization</Badge>
                <Badge variant="secondary">Machine Learning</Badge>
              </div>
            </Card>

            <Card className="glass-card hover-glow p-6 bg-gradient-to-r from-primary/10 to-accent/10">
              <h3 className="text-xl font-semibold mb-3">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">3+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">10+</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;