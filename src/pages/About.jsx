import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* ══ Split-Screen Hero ══ */}
      <section className="relative min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left - Image (full height) */}
          <motion.div
            className="relative h-[50vh] lg:h-screen overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <img
              src="https://imagedelivery.net/g6o8Tx3eMKIxUyYFM9y8TA/luz-ferrero-001/public"
              alt="Luz Ferrero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to right, transparent 50%, #ffffff 100%)',
            }} />
          </motion.div>

          {/* Right - Bio content */}
          <motion.div
            className="flex items-center px-6 lg:px-12 py-20 lg:py-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="max-w-xl space-y-8">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.15em] glass-card"
                style={{ color: '#D4AF37' }}
              >
                <Sparkles size={12} />
                About Me
              </motion.span>

              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Luz Ferrero
              </h1>

              <div className="space-y-5 text-base leading-relaxed opacity-70 font-light">
                <p>Welcome, I'm Luz — a sophisticated VIP companion offering an experience of luxury, warmth, and genuine connection.</p>
                <p>I believe every encounter should be extraordinary. Whether it's an intimate evening, a dinner date at the finest restaurants, or a weekend getaway, I bring elegance, passion, and discretion to every moment we share.</p>
                <p>Let me curate an experience you'll never forget.</p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 glass-card hover:bg-white/10"
                >
                  <Star size={18} />
                  <span>View Gallery</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ Features Section ══ */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}>
              What Sets Me{' '}
              <span className="text-gradient">Apart</span>
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

      {/* ══ Second Image (optional) ══ */}
      <section className="pb-24 md:pb-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="https://imagedelivery.net/g6o8Tx3eMKIxUyYFM9y8TA/luz-ferrero-010/thumbnail"
              alt="Luz Ferrero"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;