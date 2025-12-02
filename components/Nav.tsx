import React from 'react';

const Nav: React.FC = () => {
  const links = ['EXPERIENCE', 'PROJECTS', 'SKILLS', 'CONTACT'];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 h-screen w-16 border-r border-border hidden md:flex flex-col justify-between py-8 bg-void/90 backdrop-blur-md z-50">
      <div className="flex flex-col items-center gap-8">
        <div className="w-8 h-8 border border-acid flex items-center justify-center text-acid font-display font-bold text-xl">
          M
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-12" style={{ writingMode: 'vertical-rl' }}>
        {links.map(link => (
          <button 
            key={link}
            onClick={() => scrollTo(link)}
            className="text-muted hover:text-acid text-xs font-mono tracking-[0.2em] transition-colors uppercase rotate-180"
          >
            {link}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="w-[1px] h-12 bg-border"></div>
        <span className="text-[10px] text-muted font-mono">v1.0</span>
      </div>
    </nav>
  );
};

export default Nav;