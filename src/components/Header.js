'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import { siteConfig } from '../data/mockData';
import { useRouter, usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';

const outgoingVariants = {
  rest: { transform: "translateY(0%)" },
  active: { transform: "translateY(100%)" },
};

const incomingVariants = {
  rest: { transform: "translateY(-100%)" },
  active: { transform: "translateY(0%)" },
};

const transition = {
  duration: 0.3,
  ease: [0.338, 0.015, 0.395, 0.959],
};

function RollingNavLink({ href, children, isActive, onClick }) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);
  const activeRef = useRef(false);
  const animating = useRef(false);
  const pendingRequest = useRef(null);
  const hovered = useRef(false);
  const focused = useRef(false);

  const updateActive = (next) => {
    activeRef.current = next;
    setActive(next);
  };

  const requestActive = (next) => {
    if (reduceMotion) return;
    if (next === activeRef.current) {
      pendingRequest.current = null;
      return;
    }
    if (animating.current) {
      pendingRequest.current = next;
      return;
    }
    animating.current = true;
    updateActive(next);
  };

  const completeAnimation = () => {
    if (!animating.current) return;
    animating.current = false;

    if (pendingRequest.current !== null && pendingRequest.current !== activeRef.current) {
      const next = pendingRequest.current;
      pendingRequest.current = null;
      animating.current = true;
      updateActive(next);
    } else {
      pendingRequest.current = null;
    }
  };

  return (
    <Link
      href={href}
      className={`nav-link ${isActive ? 'active' : ''}`}
      onClick={onClick}
      onMouseEnter={() => {
        hovered.current = true;
        requestActive(true);
      }}
      onMouseLeave={() => {
        hovered.current = false;
        requestActive(focused.current);
      }}
      onFocus={() => {
        focused.current = true;
        requestActive(true);
      }}
      onBlur={() => {
        focused.current = false;
        requestActive(hovered.current);
      }}
      style={{ display: 'block', overflow: 'hidden', position: 'relative' }}
    >
      <motion.span
        style={{ display: 'block', whiteSpace: 'nowrap' }}
        variants={outgoingVariants}
        initial="rest"
        animate={active ? "active" : "rest"}
        onAnimationComplete={completeAnimation}
        transition={transition}
      >
        {children}
      </motion.span>
      <motion.span
        style={{ position: 'absolute', inset: 0, display: 'block', whiteSpace: 'nowrap' }}
        variants={incomingVariants}
        initial="rest"
        animate={active ? "active" : "rest"}
        transition={transition}
      >
        {children}
      </motion.span>
    </Link>
  );
}

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push(`/products`);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className={`container header-container ${isSearchFocused ? 'search-active' : ''}`}>
        <Link href="/" className="logo">
          <img src="/logo.jpeg" alt="Indian Bodylines Logo" style={{ width: '120px', height: '80px', objectFit: 'contain' }} />
        </Link>
        <nav className={`nav ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          {siteConfig.navLinks.map((link) => (
            <RollingNavLink
              key={link.name}
              href={link.path}
              isActive={mounted && pathname === link.path}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </RollingNavLink>
          ))}
        </nav>
        <div className="header-actions">
          {/* Inline Search Bar */}
            <form
              className="header-search-form"
              onSubmit={handleSearch}
            >
              <Search size={15} color="rgba(255,255,255,0.4)" />
              <input
                type="text"
                className="header-search-input"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch(e);
                  }
                }}
              />
            </form>

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
  );
}
