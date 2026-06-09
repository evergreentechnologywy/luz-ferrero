import React, { useState, useEffect } from 'react';
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Phone, Mail, ExternalLink, Instagram,
  Twitter, Globe, ChevronRight, Heart, Sparkles,
  Star, MapPin, Clock, Shield, MessageCircle, Calendar,
  ArrowUpRight
} from 'lucide-react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0D0B0A', color: '#F5F0EB' }}>
      {/* Apple-inspired transparent nav */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: isScrolled
            ? 'color-mix(in srgb, #0D0B0A 85%, transparent)'
            : 'transparent',
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        {/* Top blur layer */}
        <div
          className="absolute inset-0 nav-blur transition-opacity duration-500"
          style={{ opacity: isScrolled ? 1 : 0 }}
        />

        <nav className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - minimal Apple-style */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs tracking-wider transition-transform duration-300 group-hover:scale-105"
                   style={{background: 'linear-gradient(135deg, #D4AF37, #B8960F)' }}>
                LF
              </div>
              <span className="text-lg font-semibold tracking-tight opacity-90 group-hover:opacity-100 transition-opacity"
                    style={{fontFamily: 'Playfair Display, serif' }}>
                Luz Ferrero
              </span>
            </Link>

            {/* Desktop Nav - centered links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className="relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full"
                  style={({ isActive }) => ({
                    color: isActive ? '#D4AF37' : 'rgba(255,255,255,0.65)',
                    backgroundColor: isActive ? 'color-mix(in srgb, #D4AF37 12%, transparent)' : 'transparent',
                  })}
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute inset-0 rounded-full"
                          style={{ backgroundColor: 'color-mix(in srgb, #D4AF37 12%, transparent)' }}
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="sms:+17862689486"
                className="glass-card w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                aria-label="Text me"
              >
                <MessageCircle size={16} className="opacity-70" />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-50 w-10 h-10 rounded-full flex items-center justify-center glass-card hover:bg-white/10 transition-all"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <motion.span
                  className="absolute left-0 top-2 w-5 h-0.5 rounded-full bg-current origin-center transition-all"
                  animate={isMenuOpen ? { rotate: 45, top: 2.5 } : { rotate: 0, top: 2 }}
                />
                <motion.span
                  className="absolute left-0 bottom-2 w-5 h-0.5 rounded-full bg-current origin-center transition-all"
                  animate={isMenuOpen ? { rotate: -45, bottom: 2.5 } : { rotate: 0, bottom: 2 }}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ backgroundColor: '#0D0B0A' }}
          >
            <div className="flex flex-col justify-center h-full px-8 pb-20">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-4 text-3xl font-bold transition-all duration-300"
                    style={({ isActive }) => ({
                      fontFamily: 'Playfair Display, serif',
                      color: isActive ? '#D4AF37' : 'rgba(255,255,255,0.7)',
                    })}
                  >
                    {link.label}
                  </NavLink>
                  <div className="h-px w-full" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-8 space-y-4"
              >
                <a
                  href="sms:+17862689486"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-semibold text-lg glass-card"
                >
                  <MessageCircle size={20} />
                  <span>Text Me</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Apple-style minimal footer */}
      <footer className="relative border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-2 space-y-4">
              <Link to="/" className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs"
                     style={{background: 'linear-gradient(135deg, #D4AF37, #B8960F)' }}>
                  LF
                </div>
                <span className="text-lg font-semibold" style={{fontFamily: 'Playfair Display, serif' }}>
                  Luz Ferrero
                </span>
              </Link>
              <p className="text-sm opacity-50 max-w-md leading-relaxed">
                VIP Companion — Exclusive, Elegant, Unforgettable
              </p>
              <div className="flex gap-3 pt-2">
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] mb-5 opacity-40">
                Navigate
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm opacity-60 hover:opacity-100 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-current transition-all duration-300" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] mb-5 opacity-40">
                Connect
              </h3>
              <div className="space-y-4">
                <a href="sms:+17862689486"
                   className="flex items-center gap-3 text-sm opacity-60 hover:opacity-100 transition-all duration-300 group">
                  <MessageCircle size={14} style={{ color: '#D4AF37' }} />
                  <span>+17862689486</span>
                </a>
                <a href="mailto:luzferreroprivate@gmail.com"
                   className="flex items-center gap-3 text-sm opacity-60 hover:opacity-100 transition-all duration-300 group">
                  <Mail size={14} style={{ color: '#D4AF37' }} />
                  <span>Email</span>
                </a>
              </div>

              {/* Review badges */}
              <div className="flex flex-wrap gap-2 mt-6">
              </div>
            </div>
          </div>

          {/* Copyright - minimal */}
          <div className="mt-12 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4"
               style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
            <p className="text-xs opacity-30">
              &copy; {new Date().getFullYear()} Luz Ferrero. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-[10px] opacity-20">
              <span>Discretion Assured</span>
              <span className="w-1 h-1 rounded-full bg-current" />
              <span>Premium Companion</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;