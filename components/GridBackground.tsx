import React from 'react';

const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      {/* Base Grid */}
      <div className="absolute inset-0 bg-void bg-grid-pattern bg-[size:40px_40px] opacity-[0.15]"></div>
      
      {/* Radial Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/50 to-void"></div>

      {/* Scanning Line */}
      <div className="absolute inset-0 animate-scan">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-acid/5 to-transparent translate-y-[-100%] animate-[scan_8s_linear_infinite]"></div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
};

export default GridBackground;