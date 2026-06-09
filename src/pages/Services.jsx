import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, MapPin, Shield, Star, CheckCircle, ArrowUpRight } from 'lucide-react';

const stagger = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const Services = () => {
  const servicesList = [
    {
      title: 'GFE Experience',
      description: `Intimate girlfriend experience with genuine connection, conversation, and affection.`,
    },
    {
      title: 'Dinner Date',
      description: `Fine dining and stimulating conversation at the city's best restaurants.`,
    },
    {
      title: 'Overnight',
      description: `An extended evening of intimacy, dinner, and a full night of companionship.`,
    },
    {
      title: 'Travel Companion',
      description: `Available for multi-day engagements and luxury travel experiences.`,
    },
  ];

  const incallRates = [
    { duration: '30 Minutes', price: 300 },
    { duration: '1 Hour', price: 500 },
    { duration: '90 Minutes', price: 600 },
    { duration: '2 Hours', price: 800 },
  ];

  const outcallRates = [
    { duration: '1 Hour', price: 700 },
  ];

  const hasOutcall = outcallRates.length > 0;

  return (
    <div>
      {/* ══ Header ══ */}
      <section className="relative pt-32 pb-16 md:pb-20 px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-[100px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
        />

        <motion.div
          className="relative z-10 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.15em] glass-card mb-6"
            style={{ color: '#D4AF37' }}
          >
            <Sparkles size={12} />
            Services &amp; Rates
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Services &amp;{' '}
            <span className="text-gradient">Rates</span>
          </h1>
          <p className="text-lg opacity-50 mt-4 font-light max-w-xl mx-auto">
            Premium companionship tailored to your desires. Discretion and satisfaction guaranteed.
          </p>
        </motion.div>
      </section>

      {/* ══ Services Grid ══ */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: 'Playfair Display, serif' }}
            {...fadeUp}
          >
            Experiences
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {servicesList.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group relative p-8 rounded-3xl glass-card cursor-default"
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
                    <Star size={22} style={{ color: '#D4AF37' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-60">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ Rates Section ══ */}
      <section className="py-24 md:py-32 px-6 lg:px-8"
               style={{ backgroundColor: 'color-mix(in srgb, #D4AF37 3%, transparent)' }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            style={{ fontFamily: 'Playfair Display, serif' }}
            {...fadeUp}
          >
            Rates
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Incall */}
            <motion.div
              className="rounded-3xl overflow-hidden glass-card"
              {...fadeUp}
            >
              <div className="p-8 text-center"
                   style={{
                     background: 'linear-gradient(135deg, color-mix(in srgb, #D4AF37 15%, transparent), color-mix(in srgb, #B8960F 10%, transparent))',
                   }}>
                <MapPin size={24} className="mx-auto mb-3" style={{ color: '#D4AF37' }} />
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Incall
                </h3>
                <p className="text-sm opacity-50 mt-1">At my private residence</p>
              </div>
              <div className="p-6 space-y-2">
                {incallRates.map((rate) => (
                  <div key={rate.duration}
                       className="flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-300 hover:bg-white/5">
                    <span className="text-sm font-medium opacity-70">{rate.duration}</span>
                    <span className="text-lg font-bold" style={{ color: '#D4AF37' }}>
                      <span className="text-sm font-normal opacity-50 mr-1">$</span>
                      {rate.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Outcall */}
            <motion.div
              className="rounded-3xl overflow-hidden glass-card"
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="p-8 text-center"
                   style={{
                     background: 'linear-gradient(135deg, color-mix(in srgb, #B8960F 15%, transparent), color-mix(in srgb, #D4AF37 10%, transparent))',
                   }}>
                <Clock size={24} className="mx-auto mb-3" style={{ color: '#B8960F' }} />
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Outcall
                </h3>
                <p className="text-sm opacity-50 mt-1">I come to you</p>
              </div>
              <div className="p-6 space-y-2">
                {hasOutcall ? (
                  outcallRates.map((rate) => (
                    <div key={rate.duration}
                         className="flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-300 hover:bg-white/5">
                      <span className="text-sm font-medium opacity-70">{rate.duration}</span>
                      <span className="text-lg font-bold" style={{ color: '#B8960F' }}>
                        <span className="text-sm font-normal opacity-50 mr-1">$</span>
                        {rate.price}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-6">
                    <p className="text-lg font-medium opacity-70">{'Ask me about it'}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;