const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
              <span className="text-white text-xs font-bold">AL</span>
            </div>
            <span className="font-semibold text-foreground">Aditya Srivatsav Lolla</span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Prepared by <span className="font-semibold text-primary">Aditya Srivatsav</span> &middot; &copy; {currentYear}. All rights reserved.
          </p>

          <p className="text-xs text-muted-foreground">
            Senior Software Engineer &middot; Saint Louis, MO
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
