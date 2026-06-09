import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LogoDownload = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <motion.div
        className="text-center max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Logo <span className="text-gradient">Download</span>
        </h1>
        <p className="opacity-50 mb-10 font-light">
          Download official logos and branding assets for Luz Ferrero.
        </p>

        <div className="flex flex-col items-center gap-6">
          <motion.div
            className="w-36 h-36 rounded-3xl flex items-center justify-center shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #B8960F)' }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <span className="text-5xl font-bold text-white">LF</span>
          </motion.div>

          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #B8960F)',
              boxShadow: '0 8px 30px color-mix(in srgb, #D4AF37 30%, transparent)',
            }}
          >
            <Download size={18} />
            <span>Download Logo</span>
            <ArrowUpRight size={16} />
          </a>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm opacity-40 hover:opacity-100 transition-all duration-300"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default LogoDownload;