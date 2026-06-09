import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  const images = [
    'https://imagedelivery.net/g6o8Tx3eMKIxUyYFM9y8TA/luz-ferrero-001/public',
    'https://imagedelivery.net/g6o8Tx3eMKIxUyYFM9y8TA/luz-ferrero-003/public',
    'https://imagedelivery.net/g6o8Tx3eMKIxUyYFM9y8TA/luz-ferrero-005/gallery',
    'https://imagedelivery.net/g6o8Tx3eMKIxUyYFM9y8TA/luz-ferrero-004/public',
    'https://imagedelivery.net/g6o8Tx3eMKIxUyYFM9y8TA/luz-ferrero-007/gallery',
    'https://imagedelivery.net/g6o8Tx3eMKIxUyYFM9y8TA/luz-ferrero-008/gallery',
    'https://imagedelivery.net/g6o8Tx3eMKIxUyYFM9y8TA/luz-ferrero-006/thumbnail',
    'https://imagedelivery.net/g6o8Tx3eMKIxUyYFM9y8TA/luz-ferrero-009/thumbnail',
    'https://imagedelivery.net/g6o8Tx3eMKIxUyYFM9y8TA/luz-ferrero-002/thumbnail',
  ];

  const openLightbox = useCallback((index) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = '';
  }, []);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleImageLoad = useCallback((index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex, closeLightbox, goNext, goPrev]);

  return (
    <div>
      {/* ══ Gallery Header ══ */}
      <section className="relative pt-32 pb-16 md:pb-20 px-6 lg:px-8 overflow-hidden">
        {/* Background glow */}
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
            <ImageIcon size={12} />
            Gallery
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Photo{' '}
            <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-lg opacity-50 mt-4 font-light">
            A curated collection of exclusive photographs
          </p>
        </motion.div>
      </section>

      {/* ══ Gallery Grid ══ */}
      <section className="px-6 lg:px-8 pb-32">
        <div className="max-w-7xl mx-auto">
          {images.length === 0 ? (
            <div className="text-center py-32 opacity-40">
              <ImageIcon size={48} className="mx-auto mb-4" />
              <p className="text-lg font-light">No images available yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      loadedImages[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                    onLoad={() => handleImageLoad(index)}
                  />
                  {!loadedImages[index] && (
                    <div className="absolute inset-0 flex items-center justify-center glass-card">
                      <div className="w-6 h-6 rounded-full border-2 border-t-transparent animate-spin"
                           style={{ borderColor: '#D4AF37', borderTopColor: 'transparent' }} />
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md"
                           style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                        <Maximize2 size={18} className="text-white" />
                      </div>
                    </div>
                  </div>
                  {/* Image number */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-semibold backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                       style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ══ Lightbox ══ */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 backdrop-blur-2xl"
              style={{ backgroundColor: 'color-mix(in srgb, #0D0B0A 95%, black)' }}
              onClick={closeLightbox}
            />

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full flex items-center justify-center glass-card hover:bg-white/10 transition-all duration-300"
            >
              <X size={20} />
            </button>

            {/* Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goPrev}
                  className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full flex items-center justify-center glass-card hover:bg-white/10 transition-all duration-300"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full flex items-center justify-center glass-card hover:bg-white/10 transition-all duration-300"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Image */}
            <motion.div
              key={selectedIndex}
              className="relative z-10 max-w-5xl max-h-[88vh] mx-4"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={images[selectedIndex]}
                alt={`Gallery ${selectedIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
              {/* Counter */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                <span className="px-4 py-2 rounded-full text-sm glass-card backdrop-blur-md">
                  {selectedIndex + 1} / {images.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;