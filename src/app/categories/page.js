import React from 'react';
import { categories } from '../../data/mockData';
import { Dumbbell, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function CategoriesPage() {
  return (
    <div style={{ minHeight: '60vh' }}>
      <div 
        className="page-banner"
        style={{
          background: `linear-gradient(rgba(18, 20, 24, 0.8), rgba(18, 20, 24, 0.95)), url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop') center/cover`,
          padding: '60px 20px',
          marginBottom: '60px',
          color: 'var(--text-light)',
          textAlign: 'center'
        }}
      >
        <div className="section-subtitle" style={{ color: 'var(--primary-color)', justifyContent: 'center' }}>EXPLORE</div>
        <h1 className="section-title" style={{ color: '#fff', marginBottom: '15px' }}>Browse by <span style={{ color: 'var(--primary-color)' }}>Categories</span></h1>
        <p style={{ color: '#e0e0e0', maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>Find the perfect equipment tailored to your fitness space.</p>
      </div>
      
      <div className="container" style={{ paddingBottom: '40px' }}>
        <div className="category-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="category-card" style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', paddingBottom: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: 'none', borderRadius: '12px', height: '100%' }}>
              <div style={{ overflow: 'hidden' }}>
                <img src={cat.image} alt={cat.name} className="category-img-placeholder" style={{ objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block', width: '100%', height: '160px' }} />
              </div>
              <div className="category-icon" style={{ position: 'relative', top: '0', left: '0', margin: '-16px auto 10px', border: '3px solid #fff', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FCE300', borderRadius: '50%' }}>
                <Dumbbell size={16} color="var(--text-dark)" />
              </div>
              <h3 className="category-name" style={{ padding: '0 10px', fontSize: '16px', fontWeight: '800' }}>{cat.name}</h3>
              <p className="category-desc" style={{ marginBottom: '15px', padding: '0 10px', flexGrow: 1, fontSize: '12px', color: '#777', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>{cat.desc}</p>
              <div style={{ padding: '0 15px', marginTop: 'auto' }}>
                <Link href={`/products?category=${encodeURIComponent(cat.name)}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <button className="btn btn-primary" style={{ border: 'none', borderRadius: '50px', padding: '8px 16px', fontSize: '12px', fontWeight: 'bold', width: '100%', cursor: 'pointer' }}>Browse Category</button>

                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="subscribe-container-inner" style={{ marginTop: '50px' }}>
          <div className="subscribe-left">
            <div className="subscribe-icon-wrapper">
              <ShieldCheck size={60} />
            </div>
            <div className="subscribe-text">
              <div className="subscribe-subtitle">EXPERT CONSULTATION</div>
              <h2 className="subscribe-title">Not Sure Where to Start?</h2>
              <p className="subscribe-desc">Our fitness experts can help you select the perfect equipment category for your space and goals.</p>
            </div>
          </div>
          <div className="subscribe-right-text" style={{ textAlign: 'left', borderLeft: '3px solid var(--primary-color)', paddingLeft: '25px' }}>
            <span style={{ fontSize: '16px', color: '#fff', fontWeight: 'bold', display: 'block' }}>Call us directly</span>
            <span style={{ color: 'var(--primary-color)', fontSize: '28px', fontWeight: '900', marginTop: '5px', display: 'block', whiteSpace: 'nowrap' }}>+91 98374 04124</span>
          </div>
        </div>
      </div>
    </div>
  );
}
