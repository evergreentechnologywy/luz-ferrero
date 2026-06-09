import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <motion.div
        className="text-center max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="text-[10rem] md:text-[12rem] font-bold leading-none mb-4 text-gradient"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          404
        </div>
        <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Page Not Found
        </h1>
        <p className="opacity-50 mb-10 font-light max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #B8960F)',
              boxShadow: '0 8px 30px color-mix(in srgb, #D4AF37 30%, transparent)',
            }}
          >
            <Home size={18} />
            <span>Return Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl font-medium transition-all duration-300 glass-card"
          >
            <ArrowLeft size={16} />
            <span>Go Back</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default PageNotFound;