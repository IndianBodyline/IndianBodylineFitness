import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '../data/mockData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <Link href="/" className="footer-logo">
            <div className="logo-icon">{siteConfig.logo.icon}</div>
            <div className="logo-text">
              <span className="logo-title">{siteConfig.logo.titleMain} <span className="logo-highlight">{siteConfig.logo.titleHighlight}</span></span>
              <span className="logo-subtitle">{siteConfig.logo.subtitle}</span>
            </div>
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
              <li key={c.type}>
                {c.type === 'Phone' && <Phone size={16}/>}
                {c.type === 'Mail' && <Mail size={16}/>}
                {c.type === 'MapPin' && <MapPin size={16}/>}
                {' '}{c.value}
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
    </footer>
  );
}
