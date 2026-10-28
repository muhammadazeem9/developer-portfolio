import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeMode, PalettePresetId, PalettePreset } from '../types';
import { PALETTE_PRESETS, DEFAULT_PALETTE_ID } from '../data/palettes';

interface ThemeContextType {
  mode: ThemeMode;
  resolvedMode: 'dark' | 'light';
  palette: PalettePreset;
  paletteId: PalettePresetId;
  customColor: string | null;
  setMode: (mode: ThemeMode) => void;
  setPaletteId: (id: PalettePresetId) => void;
  setCustomColor: (color: string | null) => void;
  resetTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEYS = {
  MODE: 'm_azeem_theme_mode',
  PALETTE: 'm_azeem_palette_id',
  CUSTOM_COLOR: 'm_azeem_custom_color',
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEYS.MODE) as ThemeMode;
      if (saved && ['dark', 'light', 'system'].includes(saved)) {
        return saved;
      }
    }
    return 'dark'; // Futuristic portfolio default is dark
  });

  const [paletteId, setPaletteIdState] = useState<PalettePresetId>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEYS.PALETTE) as PalettePresetId;
      if (saved && PALETTE_PRESETS.some((p) => p.id === saved)) {
        return saved;
      }
    }
    return DEFAULT_PALETTE_ID;
  });

  const [customColor, setCustomColorState] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEYS.CUSTOM_COLOR);
    }
    return null;
  });

  const [systemDark, setSystemDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  // Track system preference change
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  const resolvedMode: 'dark' | 'light' = mode === 'system' ? (systemDark ? 'dark' : 'light') : mode;

  const currentPreset = PALETTE_PRESETS.find((p) => p.id === paletteId) || PALETTE_PRESETS[0];

  // Apply theme class and CSS variables to documentElement
  useEffect(() => {
    const root = document.documentElement;

    // Apply dark/light class
    root.classList.remove('dark', 'light');
    root.classList.add(resolvedMode);

    // Apply color palette variables
    if (customColor) {
      // Calculate custom accent variables
      root.style.setProperty('--primary', customColor);
      root.style.setProperty('--primary-hover', customColor);
      root.style.setProperty('--ring', `${customColor}66`);
      root.style.setProperty(
        '--subtle-accent',
        resolvedMode === 'dark' ? `${customColor}14` : `${customColor}10`
      );
      root.style.setProperty('--gradient-start', customColor);
      root.style.setProperty('--gradient-end', currentPreset.secondaryDark);
    } else {
      const primary = resolvedMode === 'dark' ? currentPreset.primaryDark : currentPreset.primaryLight;
      const hover = resolvedMode === 'dark' ? currentPreset.hoverDark : currentPreset.hoverLight;
      const secondary = resolvedMode === 'dark' ? currentPreset.secondaryDark : currentPreset.secondaryLight;
      const subtle = resolvedMode === 'dark' ? currentPreset.subtleAccentDark : currentPreset.subtleAccentLight;

      root.style.setProperty('--primary', primary);
      root.style.setProperty('--primary-hover', hover);
      root.style.setProperty('--accent', secondary);
      root.style.setProperty('--ring', currentPreset.ring);
      root.style.setProperty('--subtle-accent', subtle);
      root.style.setProperty('--gradient-start', currentPreset.gradientStart);
      root.style.setProperty('--gradient-end', currentPreset.gradientEnd);
    }
  }, [resolvedMode, paletteId, customColor, currentPreset]);

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    localStorage.setItem(STORAGE_KEYS.MODE, newMode);
  };

  const setPaletteId = (id: PalettePresetId) => {
    setPaletteIdState(id);
    setCustomColorState(null);
    localStorage.setItem(STORAGE_KEYS.PALETTE, id);
    localStorage.removeItem(STORAGE_KEYS.CUSTOM_COLOR);
  };

  const setCustomColor = (color: string | null) => {
    setCustomColorState(color);
    if (color) {
      localStorage.setItem(STORAGE_KEYS.CUSTOM_COLOR, color);
    } else {
      localStorage.removeItem(STORAGE_KEYS.CUSTOM_COLOR);
    }
  };

  const resetTheme = () => {
    setMode('dark');
    setPaletteId(DEFAULT_PALETTE_ID);
    setCustomColor(null);
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        resolvedMode,
        palette: currentPreset,
        paletteId,
        customColor,
        setMode,
        setPaletteId,
        setCustomColor,
        resetTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
