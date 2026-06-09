import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Heart, Star, ChevronDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const stagger = {
  animate: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const Home = () => {
  return (
    <div>
      {/* ══ Full-Bleed Hero (Apple-style) ══ */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://imagedelivery.net/g6o8Tx3eMKIxUyYFM9y8TA/luz-ferrero-001/public"
            alt="Luz Ferrero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Subtle gradient accent at top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
        />

        {/* Hero content - bottom-aligned like Apple */}
        <div className="relative z-10 w-full px-6 lg:px-8 pb-20 md:pb-32">
          <motion.div
            className="max-w-5xl mx-auto"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.15em] backdrop-blur-xl"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#D4AF37',
                }}
              >
                <Sparkles size={12} />
                Premium Companion
              </span>
            </motion.div>

            {/* Name - large, elegant */}
            <motion.h1
              variants={fadeUp}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight text-balance"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Luz Ferrero
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg sm:text-xl md:text-2xl opacity-60 max-w-2xl leading-relaxed font-light"
            >
              VIP Companion — Exclusive, Elegant, Unforgettable
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base backdrop-blur-xl transition-all duration-300 hover:bg-white/5"
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Star size={18} />
                <span>Discover More</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
               style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
            <div className="w-1 h-2 rounded-full bg-white/60" />
          </div>
        </motion.div>
      </section>

      {/* ══ Features Section ══ */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Why Choose{' '}
              <span className="text-gradient">Me</span>
            </h2>
            <div
              className="mx-auto mt-6 w-16 h-0.5 rounded-full opacity-40"
              style={{ background: 'linear-gradient(90deg, #D4AF37, #B8960F)' }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <motion.div
              key="Exclusive"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 md:p-10 rounded-3xl glass-card cursor-default"
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, color-mix(in srgb, #D4AF37 8%, transparent), transparent)',
                }}
              />
              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'color-mix(in srgb, #D4AF37 15%, transparent)' }}
                >
                  <Sparkles size={22} style={{ color: '#D4AF37' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Exclusive
                </h3>
                <p className="text-sm leading-relaxed opacity-60">
                  Premium VIP experiences tailored to your desires.
                </p>
              </div>
            </motion.div>
            <motion.div
              key="Discreet"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 md:p-10 rounded-3xl glass-card cursor-default"
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, color-mix(in srgb, #D4AF37 8%, transparent), transparent)',
                }}
              />
              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'color-mix(in srgb, #D4AF37 15%, transparent)' }}
                >
                  <Sparkles size={22} style={{ color: '#D4AF37' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Discreet
                </h3>
                <p className="text-sm leading-relaxed opacity-60">
                  Complete privacy and confidentiality guaranteed.
                </p>
              </div>
            </motion.div>
            <motion.div
              key="Elegant"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 md:p-10 rounded-3xl glass-card cursor-default"
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, color-mix(in srgb, #D4AF37 8%, transparent), transparent)',
                }}
              />
              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'color-mix(in srgb, #D4AF37 15%, transparent)' }}
                >
                  <Sparkles size={22} style={{ color: '#D4AF37' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Elegant
                </h3>
                <p className="text-sm leading-relaxed opacity-60">
                  Sophisticated companionship for any occasion.
                </p>
              </div>
            </motion.div>
            <motion.div
              key="Passionate"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 md:p-10 rounded-3xl glass-card cursor-default"
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, color-mix(in srgb, #D4AF37 8%, transparent), transparent)',
                }}
              />
              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'color-mix(in srgb, #D4AF37 15%, transparent)' }}
                >
                  <Sparkles size={22} style={{ color: '#D4AF37' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Passionate
                </h3>
                <p className="text-sm leading-relaxed opacity-60">
                  Genuine connection and unforgettable chemistry.
                </p>
              </div>
            </motion.div>
            <motion.div
              key="Refined"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 md:p-10 rounded-3xl glass-card cursor-default"
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, color-mix(in srgb, #D4AF37 8%, transparent), transparent)',
                }}
              />
              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'color-mix(in srgb, #D4AF37 15%, transparent)' }}
                >
                  <Sparkles size={22} style={{ color: '#D4AF37' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Refined
                </h3>
                <p className="text-sm leading-relaxed opacity-60">
                  Luxury experiences from fine dining to exclusive travel.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ Gallery Preview Section ══ */}
      <section className="py-24 md:py-32 px-6 lg:px-8"
               style={{ backgroundColor: 'color-mix(in srgb, #D4AF37 3%, transparent)' }}>
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Gallery
            </h2>
            <p className="text-lg opacity-50 mb-10 max-w-md mx-auto font-light">
              A curated collection of exclusive photographs
            </p>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 glass-card hover:bg-white/10 group"
            >
              <span>View Full Gallery</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;