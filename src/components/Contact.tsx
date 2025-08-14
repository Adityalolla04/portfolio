import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  MessageSquare,
  Send,
  Download
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "laditya0405@gmail.com",
      href: "mailto:laditya0405@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 716-463-9524",
      href: "tel:+17164639524",
      color: "text-accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Buffalo, NY",
      href: "",
      color: "text-primary"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Adityalolla04",
      color: "hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aditya-srivatsav-lolla/",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next data project? Let's discuss how we can turn your data into actionable insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-card hover-glow p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-primary" />
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-secondary/50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <IconComponent className={`h-6 w-6 ${info.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className="font-semibold hover:text-primary transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-semibold">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="glass-card hover-glow p-8">
              <h3 className="text-2xl font-bold mb-6">Connect on Social</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className={`group glass-card hover-glow ${social.color}`}
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <IconComponent className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                        {social.label}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-8">
            <Card className="glass-card hover-glow p-8 bg-gradient-to-br from-primary/10 to-accent/10">
              <h3 className="text-2xl font-bold mb-6">Ready to Collaborate?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always excited to work on challenging data projects. Whether you need help with:
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <Badge variant="secondary" className="justify-center py-2">ETL Pipelines</Badge>
                <Badge variant="secondary" className="justify-center py-2">ML Models</Badge>
                <Badge variant="secondary" className="justify-center py-2">Cloud Migration</Badge>
                <Badge variant="secondary" className="justify-center py-2">Data Analytics</Badge>
              </div>

              <div className="space-y-4">
                <Button size="lg" className="w-full hover-glow group" asChild>
                  <a href="mailto:laditya0405@gmail.com?subject=Data Project Collaboration">
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send me an Email
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" className="w-full glass-card hover-glow group" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="h-5 w-5 mr-2 group-hover:translate-y-1 transition-transform" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="glass-card hover-glow p-8">
              <h3 className="text-xl font-bold mb-4">Current Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Availability</span>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    Open to Opportunities
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <Badge variant="outline">Remote / Buffalo, NY</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Response Time</span>
                  <Badge variant="outline">Within 24 hours</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 Aditya Srivatsav Lolla. Built with passion for data and modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;