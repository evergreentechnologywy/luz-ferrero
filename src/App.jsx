import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const LogoDownload = lazy(() => import('./pages/LogoDownload'));
const LinkPage = lazy(() => import('./pages/LinkPage'));
const PageNotFound = lazy(() => import('./components/PageNotFound'));

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#ffffff' }}>
    <div className="flex flex-col items-center gap-4">
      <div
        className="w-12 h-12 rounded-full border-2 border-t-transparent animate-spin"
        style={{ borderColor: '#D4AF37', borderTopColor: 'transparent' }}
      />
      <div className="h-3 w-24 rounded-full" style={{ backgroundColor: 'rgba(0,0,0,0.05)' }} />
    </div>
  </div>
);

const AnimatedPage = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingFallback />}>
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
            <Route path="/gallery" element={<AnimatedPage><Gallery /></AnimatedPage>} />
            <Route path="/services" element={<AnimatedPage><Services /></AnimatedPage>} />
            <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
            <Route path="/logo-download" element={<AnimatedPage><LogoDownload /></AnimatedPage>} />
            <Route path="/link" element={<LinkPage />} />
            <Route path="*" element={<AnimatedPage><PageNotFound /></AnimatedPage>} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default App;