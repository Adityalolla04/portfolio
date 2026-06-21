import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Subtle Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full animate-float opacity-10"
          style={{ background: 'radial-gradient(circle, hsl(221, 83%, 48%) 0%, transparent 70%)', filter: 'blur(60px)', animationDelay: '0s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full animate-float opacity-8"
          style={{ background: 'radial-gradient(circle, hsl(199, 89%, 42%) 0%, transparent 70%)', filter: 'blur(50px)', animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="text-left space-y-6">
            <div className="flex items-center gap-3 text-2xl sm:text-3xl">
              <span className="wave-emoji text-4xl">👋</span>
              <span className="text-foreground font-medium">Hello, I'm</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient-animate">Aditya Srivatsav Lolla</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground">
              A results-driven{' '}
              <span className="text-primary font-semibold">Senior Software Engineer</span>{' '}
              specializing in building secure, high-performance applications using{' '}
              <span className="text-accent font-medium">C#, Python, FastAPI, and TypeScript</span>.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com/Adityalolla04" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 text-foreground" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/aditya-srivatsav-lolla/" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 text-foreground" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:srivatsav.lolla04@gmail.com"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 text-foreground" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="btn-primary-glow text-base px-8 py-6 rounded-xl font-semibold"
                onClick={() => scrollToSection('contact')}>
                Contact Me
              </Button>
              <Button variant="outline" size="lg"
                className="text-base px-8 py-6 rounded-xl font-semibold border-2 border-primary/40 hover:bg-primary/8 hover:border-primary transition-all duration-300"
                onClick={() => scrollToSection('experience')}>
                View Experience
              </Button>
              <Button variant="outline" size="lg" asChild
                className="text-base px-8 py-6 rounded-xl font-semibold border-2 border-accent/40 hover:bg-accent/8 hover:border-accent transition-all duration-300 group">
                <a href="/portfolio/Aditya_Lolla_Resume.pdf" download="Aditya_Srivatsav_Lolla_Resume.pdf">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side - Profile Visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/12 to-accent/12 border-2 border-primary/15 flex items-center justify-center animate-pulse-glow shadow-xl">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary/8 to-accent/8 flex items-center justify-center">
                  <span className="text-8xl select-none">👨‍💻</span>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-2 -right-4 bg-white rounded-xl px-3 py-2 shadow-lg border border-primary/15 text-sm font-semibold text-primary">
                5+ Years
              </div>
              <div className="absolute -bottom-2 -left-4 bg-white rounded-xl px-3 py-2 shadow-lg border border-accent/15 text-sm font-semibold text-accent">
                Senior Engineer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
