import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xl font-bold gradient-text">
            &lt;Aditya /&gt;
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())}
                className="text-muted-foreground hover:text-primary transition-colors font-medium relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/Adityalolla04" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-primary/20 transition-colors"><Github className="w-5 h-5" /></a>
            <a href="https://linkedin.com/in/adityalolla" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-primary/20 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:adilolla0405@gmail.com" className="p-2 rounded-full hover:bg-primary/20 transition-colors"><Mail className="w-5 h-5" /></a>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-lg">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="py-3 px-4 text-left hover:bg-primary/10 rounded-lg font-medium">{item}</button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;