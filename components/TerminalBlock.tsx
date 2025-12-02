import React from 'react';

interface TerminalBlockProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const TerminalBlock: React.FC<TerminalBlockProps> = ({ title = "TERMINAL", children, className = "" }) => {
  return (
    <div className={`border border-border bg-surface/50 backdrop-blur-sm ${className}`}>
      <div className="flex items-center justify-between px-3 py-1 border-b border-border bg-panel">
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
           <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
           <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
        </div>
        <span className="text-[10px] font-mono text-muted uppercase tracking-wider">{title}</span>
      </div>
      <div className="p-4 font-mono text-sm overflow-hidden relative">
        {children}
      </div>
    </div>
  );
};

export default TerminalBlock;