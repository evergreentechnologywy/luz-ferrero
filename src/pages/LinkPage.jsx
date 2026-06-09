import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe, Instagram, Twitter, MessageCircle, Calendar,
  ExternalLink, Music, Mail, Phone, Heart, Shield,
  Sparkles, ChevronRight
} from 'lucide-react';

const LinkPage = () => {
  const hasBooking = false;
  const hasSms = true;
  const hasEmail = true;
  const hasSocial = false;

  const linkGroups = [
    {
      title: 'Connect',
      links: [
        
        ,{ label: "Text Me", url: "sms:+17862689486", icon: "MessageCircle" }
        ,{ label: "Email", url: "mailto:luzferreroprivate@gmail.com", icon: "Mail" }
      ].filter(Boolean),
    },
  ];

  const socialLinks = [
  ];

  const primaryColor = '#D4AF37';
  const secondaryColor = '#B8960F';
  const bgColor = '#ffffff';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
         style={{ backgroundColor: bgColor }}>
      {/* Ambient glow */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.08] blur-[120px] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)` }}
      />

      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <div className="w-24 h-24 rounded-full p-[3px]"
               style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}>
            <div className="w-full h-full rounded-full overflow-hidden" style={{ backgroundColor: '#f0f0f0' }}>
              <img
                src="https://imagedelivery.net/g6o8Tx3eMKIxUyYFM9y8TA/luz-ferrero-001/public"
                alt="Luz Ferrero"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-2xl font-bold text-black text-center mb-1"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Luz Ferrero
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-sm opacity-50 text-center mb-8 font-light"
        >
          VIP Companion — Exclusive, Elegant, Unforgettable
        </motion.p>

        {/* Main Links */}
        <div className="w-full space-y-3">

          <motion.a
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            href="sms:+17862689486"
            className="flex items-center gap-4 w-full px-5 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] glass-card"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                 style={{ backgroundColor: `${primaryColor}22` }}>
              <MessageCircle size={18} style={{ color: primaryColor }} />
            </div>
            <span className="flex-1 text-left opacity-80">Text Me</span>
            <span className="text-xs opacity-40 font-mono truncate max-w-[120px]">+17862689486</span>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            href="mailto:luzferreroprivate@gmail.com"
            className="flex items-center gap-4 w-full px-5 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] glass-card"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                 style={{ backgroundColor: `${secondaryColor}22` }}>
              <Mail size={18} style={{ color: secondaryColor }} />
            </div>
            <span className="flex-1 text-left opacity-80">Email</span>
            <ExternalLink size={14} className="opacity-40" />
          </motion.a>
        </div>

        {/* Social Links */}

        {/* Profile badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mt-8"
        >
          <a href="/"
             className="px-4 py-2 rounded-full text-[10px] font-semibold uppercase tracking-wider glass-card hover:bg-white/10 transition-all flex items-center gap-1.5">
            <Globe size={10} />
            Website
          </a>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-10 text-[10px] uppercase tracking-[0.15em] opacity-20"
        >
          Luz Ferrero &middot; Links
        </motion.p>
      </div>
    </div>
  );
};

export default LinkPage;