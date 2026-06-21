import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, MessageSquare, Download } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "srivatsav.lolla04@gmail.com", href: "mailto:srivatsav.lolla04@gmail.com", color: "text-primary" },
    { icon: Phone, label: "Phone", value: "+1 (716) 463-9524", href: "tel:+17164639524", color: "text-accent" },
    { icon: MapPin, label: "Location", value: "Saint Louis, MO", href: "", color: "text-primary" }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Adityalolla04", color: "hover:text-primary" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aditya-srivatsav-lolla/", color: "hover:text-accent" }
  ];

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I am open to full-time opportunities, contract engagements, and collaborative projects. Feel free to reach out — I typically respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
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
                          <a href={info.href} className="font-semibold hover:text-primary transition-colors duration-200">{info.value}</a>
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
              <h3 className="text-2xl font-bold mb-6">Find Me Online</h3>
              <div className="flex gap-4 mb-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button key={index} variant="outline" size="lg" className={`group glass-card hover-glow ${social.color}`} asChild>
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <IconComponent className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                        {social.label}
                      </a>
                    </Button>
                  );
                })}
              </div>
              <Button variant="outline" size="lg" asChild className="w-full border-2 border-primary/40 hover:border-primary group">
                <a href="/portfolio/Aditya_Lolla_Resume.pdf" download="Aditya_Srivatsav_Lolla_Resume.pdf">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume (PDF)
                </a>
              </Button>
            </Card>
          </div>

          <Card className="glass-card hover-glow p-8 flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--gradient-primary)' }}>
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Open to Opportunities</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether you have a full-time role, a freelance project, or simply want to discuss technology and engineering — I would love to hear from you.
            </p>
            <p className="text-sm text-muted-foreground">
              Currently based in <span className="font-semibold text-primary">Saint Louis, MO</span> and available for remote or hybrid roles across the United States.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
