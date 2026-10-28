import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import { ThemeToggle } from '../theme/ThemeToggle';
import { ColorPalettePicker } from '../theme/ColorPalettePicker';
import { Button } from '../ui/Button';
import { SITE_CONFIG } from '../../data/site';

export const SiteHeader: React.FC = () => {
  const { path, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleNavClick = (href: string) => {
    navigate(href);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-theme bg-surface/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('/')}
          className="text-lg font-bold tracking-tight text-canvas-text hover:text-primary-theme transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
        >
          {SITE_CONFIG.name}
        </button>

        {/* Zone 2: 4 clean single-line nav links */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-theme"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === '/' ? path === '/' : path.startsWith(link.href);
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 relative cursor-pointer ${
                  isActive
                    ? 'text-canvas-text font-semibold'
                    : 'hover:text-canvas-text'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-theme rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Palette Picker + Theme Toggle + Primary Action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <ColorPalettePicker />
          <ThemeToggle />

          <Button
            size="sm"
            variant="primary"
            onClick={() => handleNavClick('/contact')}
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            className="hidden sm:inline-flex"
          >
            Start a Project
          </Button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-theme md:hidden text-muted-theme hover:text-canvas-text hover:bg-surface-elevated transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-theme bg-surface px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('/')}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                path === '/' ? 'bg-subtle-accent text-primary-theme font-semibold' : 'text-canvas-text hover:bg-surface-elevated'
              }`}
            >
              Home
            </button>
            {navLinks.map((link) => {
              const isActive = path.startsWith(link.href);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-subtle-accent text-primary-theme font-semibold'
                      : 'text-canvas-text hover:bg-surface-elevated'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-theme">
            <Button
              size="md"
              variant="primary"
              onClick={() => handleNavClick('/contact')}
              className="w-full"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Start a Project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
