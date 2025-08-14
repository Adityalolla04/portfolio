import { Button } from '@/components/ui/button';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Aditya Srivatsav</span>
          </h1>
          
          <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-slide-up">
            <span className="text-primary font-semibold">Data Engineer</span> | 
            <span className="text-accent font-semibold"> Data Scientist</span>
          </div>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up">
            Transforming raw data into actionable insights with{' '}
            <span className="text-primary font-semibold">3+ years</span> of experience in 
            ETL pipeline development, machine learning, and cloud computing. 
            Currently pursuing <span className="text-accent font-semibold">Master's in Data Science</span> at 
            University at Buffalo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              size="lg" 
              className="group relative overflow-hidden hover-glow"
              onClick={() => scrollToSection('projects')}
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group glass-card hover-glow"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4 mr-2 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </a>
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

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-primary/20 rounded-full animate-float blur-sm"></div>
      <div className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 left-1/3 w-12 h-12 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default Hero;