import React from 'react';
import { Mode } from '../types';

interface ModeSwitcherProps {
  currentMode: Mode;
  onChange: (mode: Mode) => void;
}

const ModeSwitcher: React.FC<ModeSwitcherProps> = ({ currentMode, onChange }) => {
  const modes: { id: Mode; label: string }[] = [
    { id: 'all', label: 'FULL_SYS' },
    { id: 'frontend', label: 'UI_VIEW' },
    { id: 'backend', label: 'KERNEL' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-12 md:top-8 md:bottom-auto z-50 flex items-center gap-2 p-1 bg-surface/80 backdrop-blur-md border border-border rounded-none">
      {modes.map((mode) => (
        <button
          key={mode.id}
          onClick={() => onChange(mode.id)}
          className={`
            px-4 py-2 text-xs font-mono font-bold tracking-wider transition-all duration-300 relative overflow-hidden group
            ${currentMode === mode.id 
              ? 'bg-acid text-black' 
              : 'bg-transparent text-muted hover:text-silver'
            }
          `}
        >
          <span className="relative z-10">
            {currentMode === mode.id ? `[ ${mode.label} ]` : mode.label}
          </span>
          
          {/* Hover Glitch Effect Background */}
          {currentMode !== mode.id && (
            <div className="absolute inset-0 bg-acid/10 translate-y-full group-hover:translate-y-0 transition-transform duration-200"></div>
          )}
        </button>
      ))}
      
      {/* Indicator Light */}
      <div className={`w-1.5 h-1.5 rounded-full ml-2 animate-pulse ${
        currentMode === 'all' ? 'bg-acid' : 
        currentMode === 'frontend' ? 'bg-cyan-400' : 
        'bg-purple-500'
      }`}></div>
    </div>
  );
};

export default ModeSwitcher;