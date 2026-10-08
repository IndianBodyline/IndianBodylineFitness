'use client';
import React, { useState, Suspense } from 'react';
import { ShoppingCart, CheckCircle, ShieldCheck, Truck, MessageCircle } from 'lucide-react';
import { products } from '../../data/mockData';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const PAGE_SIZE = 12;

function ProductsContent() {
  const { addToCart } = useCart();
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const searchFilter = searchParams.get('search');
  const requestedPage = parseInt(searchParams.get('page'), 10) || 1;

  const whatsappEnquiry = (product) => {
    const msg = `Hello! I'm interested in *${product.name}* (${product.id}) priced at ₹${product.price.toLocaleString('en-IN')}. Please share more details.`;
    const url = `https://wa.me/919837404124?text=${encodeURIComponent(msg)}`;
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

  // Pagination
  const totalPages = Math.max(1, Math.ceil(displayedProducts.length / PAGE_SIZE));
  const currentPage = Math.min(Math.max(requestedPage, 1), totalPages);
  const pagedProducts = displayedProducts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const pageHref = (n) => {
    const params = new URLSearchParams(searchParams.toString());
    if (n > 1) params.set('page', n); else params.delete('page');
    const qs = params.toString();
    return qs ? `/products?${qs}` : '/products';
  };

  const pageNumbers = [];
  for (let n = 1; n <= totalPages; n++) {
    if (n === 1 || n === totalPages || Math.abs(n - currentPage) <= 1) pageNumbers.push(n);
    else if (pageNumbers[pageNumbers.length - 1] !== '...') pageNumbers.push('...');
  }

  // Determine Title
  let title = 'All Products';
  if (searchFilter) title = `Search: "${searchFilter}"`;
  else if (categoryFilter) title = `${categoryFilter} Products`;

  return (
    <div style={{ minHeight: '60vh' }}>
      <div className="container" style={{ paddingBottom: '40px', paddingTop: '40px' }}>
        <h1 className="section-title" style={{ color: 'var(--text-dark)', marginBottom: '30px', textAlign: 'center' }}>{title}</h1>
        <div className="product-grid">
          {pagedProducts.length > 0 ? pagedProducts.map((product, index) => (
            <div key={product.id} className="product-card">


              <Link href={`/product/${product.id}`} className="product-img-wrap" style={{ display: 'block', overflow: 'hidden' }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 992px) 25vw, 50vw"
                  priority={index < 4}
                  className="product-img-placeholder"
                  style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
              </Link>
              <div className="product-info" style={{ padding: '25px' }}>
                <Link href={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h3 className="product-name">{product.name}</h3>
                </Link>
                <p className="product-category" style={{ fontSize: '13px', color: 'var(--text-muted-dark)', marginBottom: '15px' }}>{product.category}</p>
                <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginBottom: '4px' }}>
                  <span style={{ background: '#e8f5e9', color: '#2e7d32', fontSize: '10px', fontWeight: '700', padding: '3px 8px', borderRadius: '20px', letterSpacing: '0.3px', display: 'flex', alignItems: 'center', gap: '3px' }}><CheckCircle size={10} /> In Stock</span>

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

        {totalPages > 1 && (
          <nav className="pagination" aria-label="Product pages">
            {currentPage > 1 ? (
              <Link href={pageHref(currentPage - 1)} className="pagination-btn">Prev</Link>
            ) : (
              <span className="pagination-btn disabled">Prev</span>
            )}
            {pageNumbers.map((n, i) => n === '...' ? (
              <span key={`gap-${i}`} className="pagination-gap">…</span>
            ) : (
              <Link key={n} href={pageHref(n)} className={`pagination-btn${n === currentPage ? ' active' : ''}`} aria-current={n === currentPage ? 'page' : undefined}>{n}</Link>
            ))}
            {currentPage < totalPages ? (
              <Link href={pageHref(currentPage + 1)} className="pagination-btn">Next</Link>
            ) : (
              <span className="pagination-btn disabled">Next</span>
            )}
          </nav>
        )}
        
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
            <span style={{ color: 'var(--primary-color)', fontSize: '28px', fontWeight: '900', marginTop: '5px' }}>+91 98374 04124</span>
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
