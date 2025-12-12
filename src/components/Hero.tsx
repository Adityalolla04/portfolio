import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full animate-float opacity-30"
          style={{ 
            background: 'radial-gradient(circle, hsl(263, 70%, 58%) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full animate-float opacity-20"
          style={{ 
            background: 'radial-gradient(circle, hsl(199, 89%, 48%) 0%, transparent 70%)',
            filter: 'blur(50px)',
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full animate-float opacity-25"
          style={{ 
            background: 'radial-gradient(circle, hsl(280, 70%, 50%) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animationDelay: '4s'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left space-y-6">
            {/* Greeting with Wave */}
            <div className="flex items-center gap-3 text-2xl sm:text-3xl">
              <span className="wave-emoji text-4xl">👋</span>
              <span className="text-foreground font-medium">Hello!</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              I'm{' '}
              <span className="text-gradient-animate">Aditya Srivatsav Lolla</span>
            </h1>

            {/* Title */}
            <p className="text-xl sm:text-2xl text-muted-foreground">
              A passionate{' '}
              <span className="text-primary font-semibold">Full Stack Software Developer</span>{' '}
              🚀 with experience in building Web applications with{' '}
              <span className="text-accent font-medium">Python / FastAPI / C# / ASP.NET Core / React</span>{' '}
              and some other cool libraries and frameworks.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/Adityalolla04"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/adityalolla"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:adilolla0405@gmail.com"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg"
                className="btn-primary-glow text-lg px-8 py-6 rounded-xl font-semibold"
                onClick={() => scrollToSection('contact')}
              >
                <span className="relative z-10">Contact Me</span>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 rounded-xl font-semibold border-2 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                onClick={() => scrollToSection('experience')}
              >
                See My Resume
              </Button>
            </div>
          </div>

          {/* Right Side - Illustration/Avatar */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Developer Illustration - Using an emoji-based representation */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center animate-pulse-glow">
                <div className="text-9xl">👨‍💻</div>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-card flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0s' }}>
                <span className="text-3xl">⚛️</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full bg-card flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">🐍</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 rounded-full bg-card flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-xl">💾</span>
              </div>
              <div className="absolute -top-8 left-1/4 w-12 h-12 rounded-full bg-card flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '3s' }}>
                <span className="text-xl">☁️</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-primary/50 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
