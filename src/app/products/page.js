'use client';
import React, { useState } from 'react';
import { ShoppingCart, Heart, ShieldCheck, Star } from 'lucide-react';
import { products } from '../../data/mockData';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';

export default function ProductsPage() {
  const { addToCart } = useCart();
  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (productId) => {
    setLikedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

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
        <h1 className="section-title" style={{ color: '#fff', marginBottom: '15px' }}>All <span style={{ color: 'var(--primary-color)' }}>Products</span></h1>
        <p style={{ color: '#e0e0e0', maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>Browse our complete collection of commercial and home fitness equipment.</p>
      </div>
      
      <div className="container" style={{ paddingBottom: '40px' }}>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-badge">{product.id}</div>
              <button className="heart-btn" onClick={() => toggleLike(product.id)}>
                <Heart size={18} fill={likedProducts[product.id] ? "#FCE300" : "none"} color={likedProducts[product.id] ? "#FCE300" : "currentColor"} />
              </button>
              <Link href={`/product/${product.id}`} style={{ display: 'block', overflow: 'hidden' }}>
                <img src={product.image} alt={product.name} className="product-img-placeholder" style={{ objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block' }} />
              </Link>
              <div className="product-info" style={{ padding: '25px' }}>
                <Link href={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h3 className="product-name">{product.name}</h3>
                </Link>
                <p className="product-category" style={{ fontSize: '13px', color: 'var(--text-muted-dark)', marginBottom: '15px' }}>{product.category}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '5px 0 12px' }}>
                  <p style={{ fontWeight: 'bold', fontSize: '14px', color: 'var(--text-dark)', margin: 0 }}>₹{product.price.toLocaleString('en-IN')}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '10px', color: 'var(--text-muted-dark)' }}>
                    <Star size={10} fill="#FCE300" color="#FCE300" />
                    <span style={{ fontWeight: 'bold', color: 'var(--text-dark)' }}>4.8</span>
                    <span>(124)</span>
                    <span style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-light)', padding: '2px 5px', borderRadius: '4px', fontSize: '8px', fontWeight: 'bold', marginLeft: '2px' }}>PRO</span>
                  </div>
                </div>
                <button className="btn-add-cart" onClick={() => addToCart(product)} style={{ width: '100%' }}>
                  <ShoppingCart size={16} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
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
