import { Button } from '@/components/ui/button';
import { ChevronDown, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent/10 rounded-full animate-float blur-3xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full animate-float blur-2xl" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          {/* Greeting */}
          <p className="text-lg sm:text-xl text-primary font-medium mb-4 tracking-wide">
            Hello, I'm
          </p>
          
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">Aditya Srivatsav Lolla</span>
          </h1>
          
          <div className="text-2xl sm:text-3xl lg:text-4xl text-foreground font-medium mb-8 animate-slide-up">
            <span className="text-muted-foreground">Full-Stack </span>
            <span className="text-primary">Software Engineer</span>
          </div>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            3+ years building secure, high-performance{' '}
            <span className="text-primary font-medium">Python</span>,{' '}
            <span className="text-primary font-medium">FastAPI</span>,{' '}
            <span className="text-primary font-medium">ASP.NET Core</span> solutions with{' '}
            <span className="text-accent font-medium">ML/AI integration</span> and{' '}
            <span className="text-accent font-medium">Data Analytics</span> expertise.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a 
              href="mailto:adilolla0405@gmail.com"
              className="p-3 rounded-full glass-card hover-glow transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-foreground" />
            </a>
            <a 
              href="https://github.com/Adityalolla04"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover-glow transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-foreground" />
            </a>
            <a 
              href="https://linkedin.com/in/adityalolla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover-glow transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-foreground" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="group relative overflow-hidden hover-glow px-8 py-6 text-lg"
              onClick={() => scrollToSection('experience')}
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Experience
                <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group glass-card hover-glow px-8 py-6 text-lg border-primary/30 hover:border-primary"
              onClick={() => scrollToSection('contact')}
            >
              <span className="flex items-center gap-2">
                Get In Touch
                <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full glass-card"
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
