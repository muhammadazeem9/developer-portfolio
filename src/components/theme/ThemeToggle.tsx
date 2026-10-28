import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { ThemeMode } from '../../types';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { mode, resolvedMode, setMode } = useTheme();

  const cycleMode = () => {
    const nextModes: Record<ThemeMode, ThemeMode> = {
      dark: 'light',
      light: 'system',
      system: 'dark',
    };
    setMode(nextModes[mode]);
  };

  const getIcon = () => {
    if (mode === 'system') {
      return <Monitor className="w-4 h-4 text-muted-theme" />;
    }
    return resolvedMode === 'dark' ? (
      <Moon className="w-4 h-4 text-muted-theme" />
    ) : (
      <Sun className="w-4 h-4 text-muted-theme" />
    );
  };

  const getLabel = () => {
    if (mode === 'system') return 'Theme: System (click to switch to Dark)';
    if (mode === 'dark') return 'Theme: Dark (click to switch to Light)';
    return 'Theme: Light (click to switch to System)';
  };

  return (
    <button
      onClick={cycleMode}
      title={getLabel()}
      aria-label={getLabel()}
      className={`p-2 rounded-lg border border-theme hover:bg-surface-elevated text-muted-theme hover:text-canvas-text transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
    >
      {getIcon()}
    </button>
  );
};
