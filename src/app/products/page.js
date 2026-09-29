'use client';
import React, { useState, Suspense } from 'react';
import { ShoppingCart, CheckCircle, ShieldCheck, Truck, MessageCircle } from 'lucide-react';
import { products } from '../../data/mockData';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function ProductsContent() {
  const { addToCart } = useCart();
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const searchFilter = searchParams.get('search');
  

  const whatsappEnquiry = (product) => {
    const msg = `Hello! I'm interested in *${product.name}* (${product.id}) priced at ₹${product.price.toLocaleString('en-IN')}. Please share more details.`;
    const url = `https://wa.me/919258888252?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  // Filter logic
  let displayedProducts = products;
  if (categoryFilter) {
    displayedProducts = displayedProducts.filter(p => p.category === categoryFilter);
  }
  if (searchFilter) {
    const searchWords = searchFilter.toLowerCase().split(' ').filter(w => w.trim() !== '');
    displayedProducts = displayedProducts.filter(p => {
      const name = p.name.toLowerCase();
      const id = p.id.toLowerCase();
      const cat = p.category.toLowerCase();
      
      return searchWords.some(word => 
        name.includes(word) || id.includes(word) || cat.includes(word)
      );
    });
  }

  // Determine Title
  let title = 'All Products';
  if (searchFilter) title = `Search: "${searchFilter}"`;
  else if (categoryFilter) title = `${categoryFilter} Products`;

  return (
    <div style={{ minHeight: '60vh' }}>
      <div 
        className="page-banner"
        style={{
          background: `linear-gradient(rgba(18, 20, 24, 0.85), rgba(18, 20, 24, 0.95)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop') center/cover`,
          padding: '60px 20px',
          marginBottom: '60px',
          color: 'var(--text-light)',
          textAlign: 'center'
        }}
      >
        <div className="section-subtitle" style={{ color: 'var(--primary-color)', justifyContent: 'center' }}>OUR RANGE</div>
        <h1 className="section-title" style={{ color: '#fff', marginBottom: '15px' }}>{title}</h1>
        <p style={{ color: '#e0e0e0', maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>Browse our complete collection of commercial and home fitness equipment.</p>
      </div>
      
      <div className="container" style={{ paddingBottom: '40px' }}>
        <div className="product-grid">
          {displayedProducts.length > 0 ? displayedProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-badge">{product.id}</div>

              <Link href={`/product/${product.id}`} style={{ display: 'block', overflow: 'hidden' }}>
                <img src={product.image} alt={product.name} className="product-img-placeholder" style={{ objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block' }} />
              </Link>
              <div className="product-info" style={{ padding: '25px' }}>
                <Link href={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h3 className="product-name">{product.name}</h3>
                </Link>
                <p className="product-category" style={{ fontSize: '13px', color: 'var(--text-muted-dark)', marginBottom: '15px' }}>{product.category}</p>
                <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginBottom: '4px' }}>
                  <span style={{ background: '#e8f5e9', color: '#2e7d32', fontSize: '10px', fontWeight: '700', padding: '3px 8px', borderRadius: '20px', letterSpacing: '0.3px', display: 'flex', alignItems: 'center', gap: '3px' }}><CheckCircle size={10} /> In Stock</span>
                  <span style={{ background: '#e3f2fd', color: '#1565c0', fontSize: '10px', fontWeight: '700', padding: '3px 8px', borderRadius: '20px', letterSpacing: '0.3px', display: 'flex', alignItems: 'center', gap: '3px' }}><Truck size={10} /> Free Delivery</span>
                </div>
              </div>
            </div>
          )) : (
            <div style={{ padding: '40px', textAlign: 'center', gridColumn: '1 / -1' }}>
              <h3>No products found</h3>
              <p>Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
        
        <div className="subscribe-container-inner" style={{ marginTop: '40px' }}>
          <div className="subscribe-left">
            <div className="subscribe-icon-wrapper">
              <ShieldCheck size={60} />
            </div>
            <div className="subscribe-text">
              <div className="subscribe-subtitle">EXPERT CONSULTATION</div>
              <h2 className="subscribe-title">Need Help Choosing?</h2>
              <p className="subscribe-desc">Our fitness experts can help you select the perfect equipment for your space and budget.</p>
            </div>
          </div>
          <div className="subscribe-right-text" style={{ textAlign: 'left', borderLeft: '3px solid var(--primary-color)', paddingLeft: '25px' }}>
            <span style={{ fontSize: '16px', color: '#fff', fontWeight: 'bold' }}>Call us directly</span>
            <span style={{ color: 'var(--primary-color)', fontSize: '28px', fontWeight: '900', marginTop: '5px' }}>+91 9258888252</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div style={{ padding: '100px', textAlign: 'center' }}>Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
