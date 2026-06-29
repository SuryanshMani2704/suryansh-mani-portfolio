import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Copy, Check } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#050505]/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-black/80' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group focus:outline-none">
          <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-display font-bold text-lg tracking-tighter text-white group-hover:border-[#00FF66]/50 transition-colors">
            SM<span className="text-[#00FF66]">.</span>
          </div>
          <span className="font-display font-semibold text-sm sm:text-base tracking-tight text-white/90 group-hover:text-white transition-colors hidden sm:inline-block">
            Suryansh Mani
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs lg:text-sm font-medium text-white/70 hover:text-[#00FF66] px-3 py-1.5 rounded-full transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-[#00FF66] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Quick Copy Email Shortcut */}
          <button
            onClick={handleCopyEmail}
            title="Copy Email Address"
            className="flex items-center gap-1.5 text-xs font-mono text-white/70 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00FF66]/40 px-3 py-2 rounded-lg transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#00FF66]" />
                <span className="text-[#00FF66]">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Email</span>
              </>
            )}
          </button>

          {/* Resume Shortcut */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 text-xs font-medium text-black bg-[#00FF66] hover:bg-[#00e65c] px-3.5 py-2 rounded-lg font-display transition-all shadow-[0_0_15px_rgba(0,255,102,0.25)] hover:shadow-[0_0_25px_rgba(0,255,102,0.45)] active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 fill-black" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="text-xs font-medium text-black bg-[#00FF66] px-3 py-1.5 rounded-lg font-display"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/80 hover:text-white bg-white/5 rounded-lg border border-white/10 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pt-4 pb-6 bg-[#0a0a0a]/95 border-b border-white/10 backdrop-blur-2xl animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white/80 hover:text-[#00FF66] hover:bg-white/5 px-4 py-2.5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => { handleCopyEmail(); setMobileMenuOpen(false); }}
                className="flex items-center gap-2 text-xs font-mono text-white/80 bg-white/5 px-4 py-2.5 rounded-lg border border-white/10 flex-1 justify-center"
              >
                {copied ? <Check className="w-4 h-4 text-[#00FF66]" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied Email" : CONTACT_INFO.email}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
