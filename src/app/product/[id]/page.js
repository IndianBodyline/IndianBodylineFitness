'use client';
import React, { useState } from 'react';
import { ShoppingCart, Heart, Star, ShieldCheck, Truck, CheckCircle } from 'lucide-react';
import { products } from '../../../data/mockData';
import { useCart } from '../../../context/CartContext';
import Link from 'next/link';

export default function ProductDetailsPage({ params }) {
  const { id } = React.use(params);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (productId) => {
    setLikedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };
  
  const [reviews, setReviews] = useState([
    { id: 1, name: 'John Doe', initials: 'JD', rating: 5, text: 'Excellent piece of equipment. The build quality is commercial grade as promised. Highly recommend for any serious lifter.', bgColor: '#111', textColor: '#fff' },
    { id: 2, name: 'Sarah K.', initials: 'SK', rating: 5, text: 'Very smooth motion and sturdy frame. Took a bit of time to assemble, but the final result is exactly what I wanted for my home gym.', bgColor: 'var(--primary-color)', textColor: 'var(--text-dark)' }
  ]);
  const [newReview, setNewReview] = useState({ name: '', text: '', rating: 5 });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.text) return;
    const nameToUse = "Anonymous";
    const initials = "A";
    const added = {
      id: Date.now(),
      name: nameToUse,
      initials,
      rating: newReview.rating,
      text: newReview.text,
      bgColor: '#111',
      textColor: '#fff'
    };
    setReviews([added, ...reviews]);
    setNewReview({ name: '', text: '', rating: 5 });
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

  const handleAddToCart = () => {
    // We could pass quantity here if context supports it, but for now we just call addToCart
    addToCart(product);
  };

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
            <button 
              className="heart-btn" 
              onClick={() => setLiked(!liked)}
              style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(255,255,255,0.9)', border: 'none', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
            >
              <Heart size={18} fill={liked ? "#FCE300" : "none"} color={liked ? "#FCE300" : "#333"} />
            </button>
          </div>
          
          {/* Details Section */}
          <div className="product-details-right" style={{ padding: '10px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            
            <h1 className="product-page-title" style={{ fontWeight: '900', color: 'var(--text-dark)', marginBottom: '8px', lineHeight: '1.2' }}>{product.name}</h1>
            <p style={{ color: '#888', fontSize: '12px', marginBottom: '15px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Product ID: {product.id}</p>
            
            <div className="product-price-section">
              ₹{product.price.toLocaleString('en-IN')}
              <span className="product-stock-badge">IN STOCK</span>
            </div>
            
            <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.6', marginBottom: '25px' }}>
              Experience premium fitness with our {product.name}. Designed for intense workouts, it provides outstanding durability, perfect biomechanics, and ultimate comfort for commercial and home gyms alike.
            </p>
            
            {/* Features */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '35px', padding: '15px 20px', background: '#f8f9fa', borderRadius: '10px', border: '1px solid #eee' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', fontWeight: '700', color: '#333' }}>
                <ShieldCheck size={18} color="var(--primary-color)" /> Commercial Grade
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', fontWeight: '700', color: '#333' }}>
                <CheckCircle size={18} color="var(--primary-color)" /> 1 Year Warranty
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', fontWeight: '700', color: '#333' }}>
                <Truck size={18} color="var(--primary-color)" /> Pan India Delivery
              </div>
            </div>
            
            {/* Add to Cart Area */}
            <div className="product-action-row">
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="quantity-btn">-</button>
                <div className="quantity-value">{quantity}</div>
                <button onClick={() => setQuantity(quantity + 1)} className="quantity-btn">+</button>
              </div>
              
              <button 
                className="btn product-cart-btn" 
                onClick={handleAddToCart}
              >
                <ShoppingCart size={18} /> ADD TO CART
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
        {/* Customer Reviews Section */}
        <div className="responsive-padding" style={{ borderTop: '1px solid #f0f0f0', paddingTop: '50px' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
            
            {/* Reviews List (Left Column) */}
            <div className="product-reviews-half">
              <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '30px', color: 'var(--text-dark)' }}>Customer Reviews</h3>
              {reviews.map((rev) => (
                <div key={rev.id} style={{ marginBottom: '25px', paddingBottom: '25px', borderBottom: '1px solid #eee' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <div style={{ width: '45px', height: '45px', backgroundColor: rev.bgColor, color: rev.textColor, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '18px' }}>{rev.initials}</div>
                    <div>
                      <div style={{ fontWeight: '800', color: 'var(--text-dark)', fontSize: '15px' }}>{rev.name}</div>
                      <div style={{ display: 'flex', gap: '2px', marginTop: '4px' }}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} size={12} fill={star <= rev.rating ? "#FCE300" : "none"} color={star <= rev.rating ? "#FCE300" : "#ccc"} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p style={{ color: '#555', lineHeight: '1.6', fontSize: '15px' }}>{rev.text}</p>
                </div>
              ))}
            </div>

            {/* Write a Review Form (Right Column) */}
            <div className="product-reviews-half">
              <div style={{ padding: '25px', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #eee' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '15px' }}>Write a Review</h4>
                <form onSubmit={handleReviewSubmit}>
                  <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '8px' }}>Rating</label>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          size={20} 
                          fill={star <= newReview.rating ? "#FCE300" : "none"} 
                          color={star <= newReview.rating ? "#FCE300" : "#ccc"} 
                          style={{ cursor: 'pointer' }}
                          onClick={() => setNewReview({...newReview, rating: star})}
                        />
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '8px' }}>Review</label>
                    <textarea 
                      value={newReview.text}
                      onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                      placeholder="Write your review here..."
                      style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', minHeight: '100px', resize: 'vertical', boxSizing: 'border-box' }}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px', borderRadius: '8px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer' }}>Submit Review</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="responsive-padding" style={{ borderTop: '1px solid #f0f0f0', paddingTop: '50px' }}>
          <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '30px', color: 'var(--text-dark)' }}>Related Products</h3>
          <div className="product-grid">
            {relatedProducts.map(relProduct => (
              <div key={relProduct.id} className="product-card">
                <div className="product-badge">{relProduct.id}</div>
                <button className="heart-btn" onClick={() => toggleLike(relProduct.id)}>
                  <Heart size={18} fill={likedProducts[relProduct.id] ? "#FCE300" : "none"} color={likedProducts[relProduct.id] ? "#FCE300" : "currentColor"} />
                </button>
                <Link href={`/product/${relProduct.id}`} style={{ display: 'block', overflow: 'hidden' }}>
                  <img src={relProduct.image} alt={relProduct.name} className="product-img-placeholder" style={{ objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block' }} />
                </Link>
                <div className="product-info">
                  <Link href={`/product/${relProduct.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3 className="product-name">{relProduct.name}</h3>
                  </Link>
                  <p className="product-category" style={{ fontSize: '13px', color: 'var(--text-muted-dark)', marginBottom: '15px' }}>{relProduct.category}</p>
                  <div className="product-card-price-row">
                    <p className="product-card-price">₹{relProduct.price.toLocaleString('en-IN')}</p>
                    <div className="product-card-rating">
                      <Star size={10} fill="#FCE300" color="#FCE300" />
                      <span className="rating-score">4.8</span>
                      <span>(124)</span>
                      <span className="rating-pro">PRO</span>
                    </div>
                  </div>
                  <button className="btn-add-cart" onClick={() => addToCart(relProduct)}>
                    <ShoppingCart size={16} /> Add to Cart
                  </button>
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
