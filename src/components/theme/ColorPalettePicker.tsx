import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, RotateCcw, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { PALETTE_PRESETS } from '../../data/palettes';
import { PalettePresetId } from '../../types';

export const ColorPalettePicker: React.FC<{ className?: string }> = ({ className = '' }) => {
  const {
    paletteId,
    setPaletteId,
    customColor,
    setCustomColor,
    resetTheme,
    resolvedMode,
  } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className={`relative ${className}`}>
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Customize accent color palette"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        title="Accent Color Customizer"
        className="p-2 rounded-lg border border-theme hover:bg-surface-elevated text-muted-theme hover:text-canvas-text transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <Palette className="w-4 h-4 text-primary-theme" />
      </button>

      {isOpen && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Color Palette Customizer"
          className="fixed inset-x-4 top-20 z-50 sm:absolute sm:inset-x-auto sm:right-0 sm:top-full sm:mt-2 w-auto sm:w-84 p-4 rounded-xl bg-surface border border-theme shadow-2xl backdrop-blur-md transition-all duration-150"
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-theme">
            <div>
              <h3 className="text-sm font-semibold text-canvas-text">Accent Palette</h3>
              <p className="text-xs text-muted-theme">Choose your visual aesthetic</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-muted-theme hover:text-canvas-text hover:bg-surface-elevated cursor-pointer"
              aria-label="Close palette panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* 6 Presets */}
          <div className="space-y-1.5 mb-4">
            {PALETTE_PRESETS.map((preset) => {
              const isSelected = paletteId === preset.id && !customColor;
              const primary = resolvedMode === 'dark' ? preset.primaryDark : preset.primaryLight;
              const secondary = resolvedMode === 'dark' ? preset.secondaryDark : preset.secondaryLight;

              return (
                <button
                  key={preset.id}
                  onClick={() => {
                    setPaletteId(preset.id as PalettePresetId);
                  }}
                  className={`w-full flex items-center justify-between p-2 rounded-lg text-left transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-subtle-accent border border-primary-theme'
                      : 'hover:bg-surface-elevated border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center -space-x-1">
                      <span
                        className="w-4 h-4 rounded-full border border-black/20"
                        style={{ backgroundColor: primary }}
                      />
                      <span
                        className="w-4 h-4 rounded-full border border-black/20"
                        style={{ backgroundColor: secondary }}
                      />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-canvas-text">{preset.name}</div>
                      <div className="text-[10px] text-muted-theme truncate max-w-[160px]">
                        {preset.description}
                      </div>
                    </div>
                  </div>

                  {isSelected && <Check className="w-4 h-4 text-primary-theme shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Custom Hex Color Picker */}
          <div className="pt-3 border-t border-theme mb-3">
            <div className="text-xs font-medium text-canvas-text mb-2 flex items-center justify-between">
              <span>Custom Accent</span>
              {customColor && (
                <span className="font-mono text-[10px] text-primary-theme">{customColor}</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={customColor || (resolvedMode === 'dark' ? '#60A5FA' : '#2563EB')}
                onChange={(e) => setCustomColor(e.target.value)}
                className="w-8 h-8 rounded border border-theme cursor-pointer bg-transparent p-0"
                aria-label="Pick custom primary color"
              />
              <input
                type="text"
                placeholder="#60A5FA"
                value={customColor || ''}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === '' || /^#[0-9A-Fa-f]{0,6}$/.test(val)) {
                    if (val.length === 7) {
                      setCustomColor(val);
                    } else if (val === '') {
                      setCustomColor(null);
                    }
                  }
                }}
                className="flex-1 px-2.5 py-1 text-xs font-mono bg-surface-elevated border border-theme rounded-md text-canvas-text focus:outline-none focus:border-primary-theme"
              />
            </div>
          </div>

          {/* Reset button */}
          <button
            onClick={() => {
              resetTheme();
              setIsOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 py-1.5 px-3 text-xs font-medium text-muted-theme hover:text-canvas-text hover:bg-surface-elevated rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Default Preset</span>
          </button>
        </div>
      )}
    </div>
  );
};
