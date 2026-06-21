import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.4 }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'];

  const activeCls = (id: string) => activeSection === id ? 'text-primary' : 'text-muted-foreground hover:text-primary';
  const activeUnderline = (id: string) => activeSection === id ? 'w-full' : 'w-0 group-hover:w-full';
  const activeMobile = (id: string) => activeSection === id ? 'bg-primary/10 text-primary' : 'hover:bg-secondary';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-border' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-bold gradient-text font-mono hover:opacity-80 transition-opacity">
            &lt;Aditya Lolla /&gt;
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors relative group ${activeCls(item.toLowerCase())}`}>
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${activeUnderline(item.toLowerCase())}`} />
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a href="https://github.com/Adityalolla04" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-primary/10 transition-colors text-muted-foreground hover:text-primary" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/aditya-srivatsav-lolla/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-primary/10 transition-colors text-muted-foreground hover:text-primary" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:srivatsav.lolla04@gmail.com" className="p-2 rounded-full hover:bg-primary/10 transition-colors text-muted-foreground hover:text-primary" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
            <a href="/portfolio/Aditya_Lolla_Resume.pdf" download className="ml-1">
              <Button size="sm" className="btn-primary-glow rounded-lg text-xs px-3 h-8">
                <FileText className="w-3.5 h-3.5 mr-1" /> Resume
              </Button>
            </a>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-border bg-white/98 backdrop-blur-lg">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())}
                  className={`py-2.5 px-4 text-left rounded-lg font-medium text-sm transition-colors ${activeMobile(item.toLowerCase())}`}>
                  {item}
                </button>
              ))}
              <a href="/portfolio/Aditya_Lolla_Resume.pdf" download
                className="py-2.5 px-4 text-left rounded-lg font-medium text-sm text-primary hover:bg-secondary flex items-center gap-2">
                <FileText className="w-4 h-4" /> Download Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
