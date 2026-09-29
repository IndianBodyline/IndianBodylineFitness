'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(true); // Set to true initially so it renders on server

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem('hasLoadedBefore');
    
    if (!hasLoadedBefore) {
      // Normal loading sequence
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasLoadedBefore', 'true');
      }, 2200);
      return () => clearTimeout(timer);
    } else {
      // If already loaded, hide immediately to prevent flashing on subsequent navigations
      setIsLoading(false);
      setShow(false);
    }
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, pointerEvents: 'none' }}>
          {/* Top Curtain */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50vh', backgroundColor: '#080909' }}
          />
          {/* Bottom Curtain */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50vh', backgroundColor: '#080909' }}
          />
          
          {/* Center Content */}
          <motion.div
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
          >
            <div style={{ overflow: 'hidden' }}>
              <motion.h1 
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                style={{ color: '#fff', fontSize: '32px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '8px', margin: 0, textAlign: 'center' }}
              >
                INDIAN BODYLINES
              </motion.h1>
            </div>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ delay: 0.5, duration: 1.2, ease: 'easeInOut' }}
              style={{ height: '3px', backgroundColor: 'var(--primary-color)', marginTop: '24px' }}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
