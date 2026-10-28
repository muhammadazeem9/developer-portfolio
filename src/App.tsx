/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const { path, slug } = useRouter();

  const renderCurrentPage = () => {
    if (path === '/') {
      return <HomePage />;
    }
    if (path === '/work') {
      return <WorkPage />;
    }
    if (path.startsWith('/work/')) {
      return <ProjectDetailsPage slug={slug} />;
    }
    if (path === '/services' || path.startsWith('/services?')) {
      return <ServicesPage />;
    }
    if (path === '/about' || path.startsWith('/about?')) {
      return <AboutPage />;
    }
    if (path === '/contact' || path.startsWith('/contact?')) {
      return <ContactPage />;
    }
    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-canvas-text transition-colors duration-200">
      <SiteHeader />
      <main className="flex-1 w-full" id="main-content">
        {renderCurrentPage()}
      </main>
      <SiteFooter />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </ThemeProvider>
  );
}
