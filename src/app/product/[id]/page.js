'use client';
import React from 'react';
import { CheckCircle, ShieldCheck, Truck, MessageCircle, Award } from 'lucide-react';
import { products } from '../../../data/mockData';
import Link from 'next/link';

export default function ProductDetailsPage({ params }) {
  const { id } = React.use(params);

  const whatsappEnquiry = (product) => {
    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
    const msg = `Hello! I'm interested in *${product.name}* (${product.id}).\n\nProduct Link: ${pageUrl}\n\nPlease share more details and pricing.`;
    const url = `https://wa.me/919258888252?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };
  
  // Find the product
  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => p.id !== product?.id).slice(0, 6);
  
  if (!product) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2>Product Not Found</h2>
        <Link href="/products" className="btn btn-primary mt-4">Back to Products</Link>
      </div>
    );
  }


  return (
    <div className="product-details-page product-details-wrapper">
      <div className="container product-details-box">
        
        <div className="product-details-inner">
          {/* Image Section */}
          <div className="product-details-left" style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}>
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} 
            />
            <div className="product-badge" style={{ position: 'absolute', top: '20px', left: '20px', fontSize: '14px', padding: '8px 16px', borderRadius: '8px' }}>{product.category}</div>

          </div>
          
          {/* Details Section */}
          <div className="product-details-right" style={{ padding: '10px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            
            <h1 className="product-page-title" style={{ fontWeight: '900', color: 'var(--text-dark)', marginBottom: '8px', lineHeight: '1.2' }}>{product.name}</h1>
            <p style={{ color: '#888', fontSize: '12px', marginBottom: '15px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Product ID: {product.id}</p>
            
            <div style={{ marginBottom: '20px' }}>
              <span className="product-stock-badge" style={{ display: 'inline-flex' }}>IN STOCK</span>
            </div>
            
            <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.6', marginBottom: '25px' }}>
              Experience premium fitness with our {product.name}. Designed for intense workouts, it provides outstanding durability, perfect biomechanics, and ultimate comfort for commercial and home gyms alike.
            </p>
            
            {/* Spec Bullets from image style */}
            {product.specs && (
              <div style={{ marginBottom: '25px', padding: '18px 20px', background: '#f8f9fa', borderRadius: '10px', border: '1px solid #eee' }}>
                <h4 style={{ fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', color: '#333', marginBottom: '12px' }}>Specifications</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {product.specs.map((spec, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600', color: '#333' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-color)', flexShrink: 0 }}></span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Feature badges */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', fontWeight: '700', color: '#333' }}>
                <ShieldCheck size={18} color="var(--primary-color)" /> Commercial Grade
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', fontWeight: '700', color: '#333' }}>
                <CheckCircle size={18} color="var(--primary-color)" /> 1 Year Warranty
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', fontWeight: '700', color: '#333' }}>
                <Truck size={18} color="var(--primary-color)" /> Pan India Delivery
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', fontWeight: '700', color: '#333' }}>
                <Award size={18} color="var(--primary-color)" /> Premium Quality
              </div>
            </div>

            {/* CTA Button */}
            <div style={{ maxWidth: '250px' }}>
              <button 
                onClick={() => whatsappEnquiry(product)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: '#25D366',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(37, 211, 102, 0.3)',
                  transition: 'all 0.3s ease',
                  width: '100%'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Enquire Now
              </button>
            </div>
            

            
          </div>
        </div>

        {/* Extended Description & Specifications */}
        <div className="responsive-padding" style={{ marginTop: '20px', borderTop: '1px solid #f0f0f0', paddingTop: '50px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
            <div className="product-desc-left">
              <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px', color: 'var(--text-dark)' }}>Product Overview</h3>
              <p style={{ color: 'var(--text-muted-dark)', lineHeight: '1.8', marginBottom: '15px' }}>
                The {product.name} is engineered to withstand the rigorous demands of commercial gym environments while providing an exceptional user experience. Built with heavy-duty steel and premium upholstery, this equipment guarantees longevity and consistent performance. 
              </p>
              <p style={{ color: 'var(--text-muted-dark)', lineHeight: '1.8' }}>
                Its biomechanically correct design ensures optimal muscle engagement and reduces the risk of injury, making it suitable for users of all fitness levels. Whether you are outfitting a professional facility or upgrading your home gym, this piece of equipment delivers unmatched value.
              </p>
            </div>
            
            <div className="product-desc-right">
              <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px', color: 'var(--text-dark)' }}>Specifications</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                  <span style={{ color: 'var(--text-muted-dark)' }}>Dimensions</span>
                  <span style={{ fontWeight: 'bold', color: 'var(--text-dark)' }}>120 x 80 x 150 cm</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                  <span style={{ color: 'var(--text-muted-dark)' }}>Weight Capacity</span>
                  <span style={{ fontWeight: 'bold', color: 'var(--text-dark)' }}>200 kg</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                  <span style={{ color: 'var(--text-muted-dark)' }}>Frame Material</span>
                  <span style={{ fontWeight: 'bold', color: 'var(--text-dark)' }}>Heavy-duty Steel</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                  <span style={{ color: 'var(--text-muted-dark)' }}>Warranty</span>
                  <span style={{ fontWeight: 'bold', color: 'var(--text-dark)' }}>1 Year Commercial</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="responsive-padding" style={{ borderTop: '1px solid #f0f0f0', paddingTop: '50px' }}>
          <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '30px', color: 'var(--text-dark)' }}>Related Products</h3>
          <div className="product-grid">
            {relatedProducts.map(relProduct => (
              <div key={relProduct.id} className="product-card">


                <Link href={`/product/${relProduct.id}`} style={{ display: 'block', overflow: 'hidden' }}>
                  <img src={relProduct.image} alt={relProduct.name} className="product-img-placeholder" style={{ objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block' }} />
                </Link>
                <div className="product-info">
                  <Link href={`/product/${relProduct.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3 className="product-name">{relProduct.name}</h3>
                  </Link>
                  <p className="product-category" style={{ fontSize: '13px', color: 'var(--text-muted-dark)', marginBottom: '15px' }}>{relProduct.category}</p>
                  <div className="product-card-price-row">
                    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                      <span style={{ background: '#e8f5e9', color: '#2e7d32', fontSize: '10px', fontWeight: '700', padding: '3px 8px', borderRadius: '20px', letterSpacing: '0.3px', display: 'flex', alignItems: 'center', gap: '3px' }}><CheckCircle size={10} /> In Stock</span>

                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      
      {/* Bottom Text Area */}
      <div style={{ textAlign: 'center', marginTop: '50px', padding: '0 20px 40px' }}>
        <h4 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '10px' }}>Elevate Your Training Experience</h4>
        <p style={{ color: '#666', fontSize: '14px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
          Our equipment is engineered with precision biomechanics to ensure maximum muscle engagement and safety. Experience the difference of commercial-grade quality in your own facility.
        </p>
      </div>

    </div>
  );
}
