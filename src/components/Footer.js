'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { siteConfig } from '../data/mockData';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Footer() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const footerY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  
  const textOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [1, 1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);

  return (
    <section ref={containerRef} style={{ position: 'relative', height: '200vh', backgroundColor: '#080909' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        
        {/* Dark background */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: '#080909' }}>
          
          {/* Diagonal texture */}
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.3,
            backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 6px)"
          }} />

          {/* Center text */}
          <motion.div
            style={{
              opacity: textOpacity,
              scale: textScale,
              position: 'absolute',
              inset: 0,
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              padding: '0 5%'
            }}
          >
            <div style={{ display: 'flex', width: '100%', maxWidth: '1200px', alignItems: 'center', gap: '50px', flexWrap: 'wrap' }}>
              {/* Left Side Text */}
              <div style={{ flex: 1, minWidth: '300px' }}>
                <h2 style={{ fontSize: 'clamp(48px, 12vw, 84px)', color: '#fff', fontWeight: 900, margin: '0', lineHeight: 1.1, letterSpacing: '-2px', textTransform: 'uppercase' }}>
                  Defy <br/><span style={{ color: 'transparent', WebkitTextStroke: '2px var(--primary-color)' }}>Limits.</span>
                </h2>
                <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary-color)', margin: '35px 0' }}></div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: 1.8, maxWidth: '400px', letterSpacing: '1px' }}>
                  Step into the future of fitness. Precision engineering meets unmatched durability for those who demand the absolute best.
                </p>
              </div>
              
              {/* Right Side Image */}
              <div style={{ flex: 1, minWidth: '300px', height: '450px', position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.6)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Fitness Training" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Subtle gradient overlay to blend the image into the dark background */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #080909 0%, rgba(8,9,9,0) 30%)' }}></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer that reveals from bottom */}
        <motion.footer
          className="footer"
          style={{
            y: footerY,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 20,
            minHeight: '55vh',
            margin: 0 // overriding global footer margin if any
          }}
        >
          <div className="container footer-container">
            <div className="footer-col">
              <Link href="/" className="footer-logo">
                <img src="/logo.jpeg" alt="Indian Bodylines Logo" style={{ width: '120px', height: '80px', objectFit: 'contain', marginBottom: '15px' }} />
              </Link>
              <p className="footer-slogan">Stronger Bodies. Healthier Tomorrow.</p>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                {siteConfig.navLinks.map((link) => (
                  <li key={link.name}><Link href={link.path}>{link.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Get In Touch</h4>
              <ul className="footer-contact">
                {siteConfig.footer.contact.map(c => (
                  <li key={c.type} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{ marginTop: '3px', color: 'var(--primary-color)' }}>
                      {c.type === 'Phone' && <Phone size={16}/>}
                      {c.type === 'Mail' && <Mail size={16}/>}
                      {c.type === 'Globe' && <Globe size={16}/>}
                      {c.type === 'MapPin' && <MapPin size={16}/>}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      {c.value.split(', ').map((line, i) => (
                        <span key={i}>{line}</span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Follow Us</h4>
              <div className="social-links">
                {siteConfig.footer.social.map(s => (
                  <a key={s.name} href={s.link} className="social-icon">{s.name}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="container footer-bottom">
            <p>© {new Date().getFullYear()} Indian Bodylines. All rights reserved.</p>
            <div className="footer-bottom-links">
              {siteConfig.footer.bottomLinks.map(link => (
                <a key={link} href="#">{link}</a>
              ))}
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
