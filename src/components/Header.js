'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, User, X, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { siteConfig } from '../data/mockData';

export default function Header() {
  const { getCartCount } = useCart();
  const [mounted, setMounted] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="header">
        <div className="container header-container">
          <Link href="/" className="logo">
            <div className="logo-icon">{siteConfig.logo.icon}</div>
            <div className="logo-text">
              <span className="logo-title">{siteConfig.logo.titleMain} <span className="logo-highlight">{siteConfig.logo.titleHighlight}</span></span>
              <span className="logo-subtitle">{siteConfig.logo.subtitle}</span>
            </div>
          </Link>
          <nav className={`nav ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
            {siteConfig.navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path} 
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <button onClick={() => setIsSearchOpen(true)} className="action-btn" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <Search size={16} />
            </button>
            <Link href="/profile" className="action-btn"><User size={16} /></Link>
            <Link href="/cart" className="action-btn cart-btn">
              <ShoppingCart size={16} />
              {mounted && <span className="cart-badge">{getCartCount()}</span>}
            </Link>
            <button 
              className="action-btn mobile-menu-btn" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '10px' }}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Transparent Search Overlay */}
      {isSearchOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(3px)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-out'
          }}
          onClick={() => setIsSearchOpen(false)}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{ 
              width: '100%', 
              maxWidth: '400px', 
              padding: '24px 20px', 
              textAlign: 'center',
              background: '#121418',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.05)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              position: 'relative',
              animation: 'slideUp 0.3s ease-out'
            }}
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(255,255,255,0.05)',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                padding: '6px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            >
              <X size={16} />
            </button>

            <h2 style={{ color: '#fff', fontSize: '16px', fontWeight: '800', marginBottom: '16px' }}>What are you looking for?</h2>
            
            <form onSubmit={(e) => { e.preventDefault(); /* handle search logic */ }} style={{ position: 'relative' }}>
              <input 
                type="text" 
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  paddingRight: '40px',
                  fontSize: '14px',
                  borderRadius: '6px',
                  border: 'none',
                  outline: 'none',
                  background: '#fff',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                }}
              />
              <button 
                type="submit"
                style={{
                  position: 'absolute',
                  right: '6px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'var(--primary-color)',
                  border: 'none',
                  width: '28px',
                  height: '28px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 5px 15px rgba(252, 227, 0, 0.3)'
                }}
              >
                <Search size={14} />
              </button>
            </form>

            <div style={{ marginTop: '20px' }}>
              <p style={{ color: 'var(--text-muted-dark)', marginBottom: '8px', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '1px' }}>Popular Searches</p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {['Treadmill', 'Dumbbells', 'Smith Machine', 'CrossFit Rig'].map(term => (
                  <button 
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#fff',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      fontSize: '11px'
                    }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
