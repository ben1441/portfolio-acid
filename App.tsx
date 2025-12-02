import React, { useEffect, useState, useMemo } from 'react';
import { EXPERIENCES, PROJECTS, SKILLS } from './constants';
import { Mode } from './types';
import GridBackground from './components/GridBackground';
import GlitchText from './components/GlitchText';
import TerminalBlock from './components/TerminalBlock';
import Nav from './components/Nav';
import ModeSwitcher from './components/ModeSwitcher';
import { Github, Linkedin, Mail, ArrowUpRight, Terminal, Cpu, Database, Layout, Layers } from 'lucide-react';

function App() {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<Mode>('all');

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter logic
  const filteredProjects = useMemo(() => 
    PROJECTS.filter(p => p.modes.includes(mode)), 
  [mode]);

  const filteredExperiences = useMemo(() => 
    EXPERIENCES.filter(e => e.modes.includes(mode)), 
  [mode]);

  const filteredSkills = useMemo(() => 
    SKILLS.filter(s => s.modes.includes(mode)), 
  [mode]);

  // Dynamic Text based on Mode
  const getHeroTitle = () => {
    switch (mode) {
      case 'frontend': return 'Frontend';
      case 'backend': return 'Backend';
      default: return 'Fullstack';
    }
  };

  const getHeroSubtitle = () => {
    switch (mode) {
      case 'frontend': 
        return <span className="text-acid">Creative Developer</span>;
      case 'backend': 
        return <span className="text-acid">Systems Architect</span>;
      default: 
        return <span className="text-acid">Backend & AI Engineer</span>;
    }
  };

  const getHeroDescription = () => {
    switch (mode) {
      case 'frontend':
        return "Crafting immersive user interfaces and reactive web systems with modern frameworks.";
      case 'backend':
        return "Architecting high-performance node systems, scalable microservices, and AI integrations.";
      default:
        return "Specializing in high-performance node systems, real-time automation, and AI agent architecture.";
    }
  };

  return (
    <div className="min-h-screen bg-void text-silver font-mono selection:bg-acid selection:text-black transition-colors duration-500">
      <GridBackground />
      <Nav />
      <ModeSwitcher currentMode={mode} onChange={setMode} />
      
      <main className="md:pl-16 relative">
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 py-20 relative border-b border-border/50">
           <div className="max-w-6xl w-full">
              <div className="flex items-center gap-4 mb-6 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
                <span className={`inline-block px-2 py-1 bg-acid/10 border border-acid/20 text-acid text-xs tracking-wider transition-all duration-500 ${mode === 'frontend' ? 'border-cyan-500/50 text-cyan-400 bg-cyan-900/10' : mode === 'backend' ? 'border-purple-500/50 text-purple-400 bg-purple-900/10' : ''}`}>
                  SYSTEM ONLINE :: MODE_{mode.toUpperCase()}
                </span>
                <span className="text-muted text-xs">BANGALORE, IN</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold uppercase leading-[0.9] tracking-tighter mb-8 opacity-0 animate-[slideUp_0.8s_ease-out_0.2s_forwards]">
                Manovah<br/>
                <span className={`text-transparent stroke-text transition-colors duration-300 ${
                  mode === 'frontend' ? 'hover:text-cyan-400' : 
                  mode === 'backend' ? 'hover:text-purple-400' : 
                  'hover:text-acid'
                }`}>Benny</span>
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
                <div className="space-y-6 opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
                   <h2 className="text-3xl md:text-4xl font-display font-bold uppercase text-white">
                      {getHeroTitle()} <br className="hidden md:block" /> Engineer
                   </h2>
                  <p className="text-lg md:text-xl text-muted font-light max-w-lg leading-relaxed">
                    {getHeroSubtitle()} {getHeroDescription()}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a href="mailto:manovah04@gmail.com" className="group flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-acid transition-colors font-bold tracking-tight">
                      <Mail size={18} />
                      <span>CONTACT_ME</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 px-6 py-3 border border-border hover:border-acid text-muted hover:text-acid transition-colors">
                      <Github size={18} />
                      <span>GITHUB</span>
                    </a>
                  </div>
                </div>

                <TerminalBlock title={`INIT_LOG :: ${mode}`} className="opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards] hidden md:block">
                   <div className="space-y-1 text-xs text-muted">
                     <p>&gt; Initializing core systems...</p>
                     <p>&gt; Mode selected: <span className="text-acid uppercase">{mode}</span></p>
                     <p>&gt; Loading modules:
                        {mode === 'frontend' && <span className="text-cyan-400"> React, Next.js, Tailwind</span>}
                        {mode === 'backend' && <span className="text-purple-400"> Node.js, Docker, MongoDB</span>}
                        {mode === 'all' && <span className="text-acid"> Node.js, React, Web3</span>}
                     </p>
                     <p>&gt; Connected to {mode === 'frontend' ? 'CDN Edge' : 'Mainnet RPC'}</p>
                     <p>&gt; Status: <span className="animate-pulse text-acid">Ready for deployment</span></p>
                   </div>
                </TerminalBlock>
              </div>
           </div>
           
           {/* Decorative scroll indicator */}
           <div className="absolute bottom-12 right-12 md:right-24 text-[10px] text-muted flex flex-col items-center gap-4 animate-bounce">
              <span style={{ writingMode: 'vertical-rl' }}>SCROLL</span>
              <div className="w-[1px] h-12 bg-border"></div>
           </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="px-6 md:px-24 py-32 border-b border-border/50">
          <div className="max-w-6xl w-full mx-auto">
             <div className="flex items-end justify-between mb-20 border-b border-border pb-4">
                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">
                  <span className="text-acid">01.</span> Experience
                </h2>
                <span className="text-xs text-muted font-mono hidden md:block">CAREER_HISTORY_LOG</span>
             </div>

             <div className="space-y-16">
               {filteredExperiences.map((exp, index) => (
                 <div key={exp.id} className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 relative animate-[fadeIn_0.5s_ease-out]">
                    {/* Timeline Line */}
                    <div className="hidden md:block absolute left-[30%] top-0 bottom-[-64px] w-[1px] bg-border group-last:bottom-0"></div>
                    <div className="hidden md:block absolute left-[30%] top-2 w-2 h-2 -ml-[3px] bg-void border border-acid"></div>

                    <div className="md:col-span-3 text-right md:pr-12">
                       <h3 className="text-xl font-bold text-white group-hover:text-acid transition-colors">{exp.company}</h3>
                       <span className="text-xs text-muted block mt-1">{exp.period}</span>
                    </div>
                    
                    <div className="md:col-span-9 md:pl-12">
                       <h4 className="text-lg font-mono text-acid mb-4">{exp.role}</h4>
                       <ul className="space-y-2 mb-6 text-muted text-sm leading-relaxed">
                         {exp.description.map((item, i) => (
                           <li key={i} className="flex items-start gap-3">
                             <span className="text-acid/50 mt-1">&gt;&gt;</span>
                             {item}
                           </li>
                         ))}
                       </ul>
                       <div className="flex flex-wrap gap-2">
                         {exp.tech.map(t => (
                           <span key={t} className="text-[10px] uppercase border border-border px-2 py-1 text-muted group-hover:border-acid/30 group-hover:text-acid transition-colors">
                             {t}
                           </span>
                         ))}
                       </div>
                    </div>
                 </div>
               ))}
               {filteredExperiences.length === 0 && (
                 <div className="text-muted font-mono text-center py-12 border border-dashed border-border">
                    NO EXPERIENCE LOGGED FOR THIS FILTER
                 </div>
               )}
             </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="px-6 md:px-24 py-32 border-b border-border/50 bg-surface/30">
          <div className="max-w-6xl w-full mx-auto">
             <div className="flex items-end justify-between mb-20 border-b border-border pb-4">
                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">
                  <span className="text-acid">02.</span> Selected Works
                </h2>
                <span className="text-xs text-muted font-mono hidden md:block">DEPLOYED_SYSTEMS</span>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((project, index) => (
                  <div key={project.id} className="group border border-border bg-panel p-8 hover:border-acid transition-colors duration-300 relative overflow-hidden animate-[fadeIn_0.5s_ease-out]">
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-acid/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-void border border-border group-hover:border-acid/50 transition-colors">
                           {project.type === 'bot' ? <Terminal size={24} className="text-white"/> : 
                            project.type === 'system' ? <Layers size={24} className="text-white"/> :
                            <Layout size={24} className="text-white"/>}
                        </div>
                        <ArrowUpRight className="text-muted group-hover:text-acid transition-colors" />
                      </div>

                      <h3 className="text-2xl font-bold font-display uppercase mb-3 group-hover:text-acid transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted text-sm leading-relaxed mb-8 flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs font-mono text-muted/80 bg-void px-2 py-1">
                             #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
             </div>
             {filteredProjects.length === 0 && (
               <div className="text-muted font-mono text-center py-12 border border-dashed border-border">
                  NO PROJECTS FOUND IN THIS SECTOR
               </div>
             )}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="px-6 md:px-24 py-32 border-b border-border/50">
          <div className="max-w-6xl w-full mx-auto">
             <div className="flex items-end justify-between mb-20 border-b border-border pb-4">
                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">
                  <span className="text-acid">03.</span> Tech Stack
                </h2>
                <span className="text-xs text-muted font-mono hidden md:block">SYSTEM_CAPABILITIES</span>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {filteredSkills.map((group) => (
                 <div key={group.category} className="border-l border-border pl-6 hover:border-acid transition-colors duration-300 animate-[fadeIn_0.5s_ease-out]">
                    <h3 className="text-lg font-bold font-display uppercase text-white mb-6 flex items-center gap-2">
                       <span className={`w-1 h-1 ${mode === 'frontend' ? 'bg-cyan-400' : mode === 'backend' ? 'bg-purple-500' : 'bg-acid'}`}></span>
                       {group.category}
                    </h3>
                    <ul className="space-y-3">
                      {group.skills.map(skill => (
                        <li key={skill} className="text-sm text-muted font-mono flex items-center justify-between group cursor-default">
                          <span className="group-hover:text-silver transition-colors">{skill}</span>
                          <span className="opacity-0 group-hover:opacity-100 text-acid text-xs transition-opacity">100%</span>
                        </li>
                      ))}
                    </ul>
                 </div>
               ))}
               
               {/* Aesthetic Chart Placeholder - Adapted for modes */}
               <div className="border border-border bg-panel p-4 flex flex-col justify-between min-h-[200px] relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                   <div className="relative z-10">
                     <div className="text-xs text-muted mb-2">
                        {mode === 'frontend' ? 'RENDER_PERFORMANCE' : mode === 'backend' ? 'API_LATENCY_METRICS' : 'SYSTEM_PERFORMANCE'}
                     </div>
                     <div className="flex items-end gap-1 h-32 w-full">
                        {[40, 70, 45, 90, 60, 80, 50, 95, 30, 60].map((h, i) => (
                          <div 
                            key={i} 
                            style={{ height: `${h}%` }} 
                            className={`flex-1 bg-border transition-colors duration-300 ${mode === 'frontend' ? 'hover:bg-cyan-400' : mode === 'backend' ? 'hover:bg-purple-500' : 'hover:bg-acid'}`}
                          ></div>
                        ))}
                     </div>
                   </div>
               </div>
             </div>
          </div>
        </section>

        {/* CONTACT / FOOTER */}
        <section id="contact" className="px-6 md:px-24 py-32 bg-panel relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-acid to-transparent opacity-20"></div>
          
          <div className="max-w-4xl w-full mx-auto text-center relative z-10">
             <h2 className="text-5xl md:text-7xl font-display font-bold uppercase mb-8 leading-none">
               Ready to <span className="text-acid">Initiate?</span>
             </h2>
             <p className="text-muted text-lg md:text-xl max-w-xl mx-auto mb-12">
               Currently open for freelance projects and full-time opportunities. Let's build something scalable.
             </p>
             
             <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a href="mailto:manovah04@gmail.com" className="w-full md:w-auto px-8 py-4 bg-acid text-black font-bold text-lg uppercase tracking-wider hover:bg-white transition-colors">
                   Send Transmission
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-full md:w-auto px-8 py-4 border border-border text-silver font-bold text-lg uppercase tracking-wider hover:border-acid hover:text-acid transition-colors">
                   LinkedIn
                </a>
             </div>

             <footer className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-muted font-mono">
                <p>&copy; 2024 MANOVAH BENNY. ALL RIGHTS RESERVED.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                   <span>SYS_STATUS: ONLINE</span>
                   <span>LATENCY: 12ms</span>
                </div>
             </footer>
          </div>
          
          {/* Large background text */}
          <div className="absolute -bottom-10 left-0 w-full text-center pointer-events-none select-none overflow-hidden">
             <span className="text-[20vw] font-display font-bold text-void opacity-80 leading-none tracking-tighter">
                {mode === 'frontend' ? 'CREATOR' : mode === 'backend' ? 'SYSTEMS' : 'BUILDER'}
             </span>
          </div>
        </section>
      </main>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
          color: transparent;
        }
        .stroke-text:hover {
          -webkit-text-stroke: 0px;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default App;