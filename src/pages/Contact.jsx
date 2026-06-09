import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MessageCircle, MapPin, Clock, Shield,
  CheckCircle, ExternalLink, Calendar, Heart, ArrowUpRight
} from 'lucide-react';

const stagger = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const Contact = () => {
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
            <Heart size={12} />
            Get In Touch
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Contact{' '}
            <span className="text-gradient">Me</span>
          </h1>
          <p className="text-lg opacity-50 mt-4 font-light max-w-xl mx-auto">
            I look forward to connecting with you. Please review my booking guidelines before reaching out.
          </p>
        </motion.div>
      </section>

      {/* ══ Contact Grid ══ */}
      <section className="px-6 lg:px-8 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left - Contact Cards */}
            <motion.div
              className="space-y-4"
              variants={stagger}
              initial="initial"
              animate="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Reach Out
              </h2>

              <motion.a
                variants={fadeUp}
                href="sms:+17862689486"
                className="flex items-center gap-5 p-5 rounded-2xl glass-card group hover:scale-[1.02] transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'color-mix(in srgb, #D4AF37 15%, transparent)' }}
                >
                  <MessageCircle size={24} style={{ color: '#D4AF37' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest opacity-40 mb-1">Text Message</p>
                  <p className="font-semibold truncate">+17862689486</p>
                </div>
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-40 transition-opacity flex-shrink-0" />
              </motion.a>

              <motion.a
                variants={fadeUp}
                href="mailto:luzferreroprivate@gmail.com"
                className="flex items-center gap-5 p-5 rounded-2xl glass-card group hover:scale-[1.02] transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'color-mix(in srgb, #B8960F 15%, transparent)' }}
                >
                  <Mail size={24} style={{ color: '#B8960F' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest opacity-40 mb-1">Email</p>
                  <p className="font-semibold truncate">luzferreroprivate@gmail.com</p>
                </div>
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-40 transition-opacity flex-shrink-0" />
              </motion.a>


            </motion.div>

            {/* Right - Image & Guidelines */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://imagedelivery.net/g6o8Tx3eMKIxUyYFM9y8TA/luz-ferrero-001/public"
                  alt="Luz Ferrero"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Booking Guidelines */}
              <div className="p-8 rounded-3xl glass-card">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3"
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                  <Shield size={20} style={{ color: '#D4AF37' }} />
                  <span>Booking Guidelines</span>
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#D4AF37' }} />
                    <span className="text-sm leading-relaxed opacity-70">
                      Please introduce yourself when reaching out. Include your name, age, and preferred date/time.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#D4AF37' }} />
                    <span className="text-sm leading-relaxed opacity-70">
                      Screening is required for all new clients. References or provider verification accepted.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#D4AF37' }} />
                    <span className="text-sm leading-relaxed opacity-70">
                      A deposit may be required to confirm bookings. This will be discussed during scheduling.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#D4AF37' }} />
                    <span className="text-sm leading-relaxed opacity-70">
                      Discretion is paramount. All personal information is kept strictly confidential.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#D4AF37' }} />
                    <span className="text-sm leading-relaxed opacity-70">
                      24-hour cancellation policy applies. Late cancellations may forfeit deposit.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;