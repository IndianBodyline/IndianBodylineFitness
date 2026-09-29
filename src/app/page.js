'use client';
import React from 'react';
import { ShoppingCart, Search, User, CheckCircle, Package, Truck, Headphones, ChevronRight, Star, ArrowRight, ShieldCheck, Dumbbell, Mail, Phone, MapPin, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { products, categories, testimonials, blogs, siteConfig } from '../data/mockData';
import { useCart } from '../context/CartContext';

export default function Home() {
  const { addToCart } = useCart();
  const [galleryIndex, setGalleryIndex] = React.useState(0);

  const [itemsPerView, setItemsPerView] = React.useState(4);
  const [testisPerView, setTestisPerView] = React.useState(3);

  const [galleryTouchStart, setGalleryTouchStart] = React.useState(null);
  const [testisTouchStart, setTestisTouchStart] = React.useState(null);


  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(2);
        setTestisPerView(1);
      } else if (window.innerWidth < 992) {
        setItemsPerView(2);
        setTestisPerView(2);
      } else {
        setItemsPerView(4);
        setTestisPerView(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  
  const galleryItems = siteConfig.exploreGallery.categories;
  const galleryMaxIndex = Math.max(0, galleryItems.length - itemsPerView);
  
  const nextGallery = () => {
    setGalleryIndex(prev => (prev >= galleryMaxIndex ? 0 : prev + 1));
  };

  const [testimonialIndex, setTestimonialIndex] = React.useState(0);
  const testimonialMaxIndex = Math.max(0, testimonials.length - testisPerView);

  React.useEffect(() => {
    const galleryInterval = setInterval(() => {
      setGalleryIndex(prev => (prev >= galleryMaxIndex ? 0 : prev + 1));
    }, 3000);
    const testimonialInterval = setInterval(() => {
      setTestimonialIndex(prev => (prev >= testimonialMaxIndex ? 0 : prev + 1));
    }, 4000);
    return () => {
      clearInterval(galleryInterval);
      clearInterval(testimonialInterval);
    };
  }, [galleryMaxIndex, testimonialMaxIndex]);
  
  const prevGallery = () => {
    setGalleryIndex(prev => (prev <= 0 ? galleryMaxIndex : prev - 1));
  };

  const nextTestimonial = () => {
    setTestimonialIndex(prev => (prev >= testimonialMaxIndex ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setTestimonialIndex(prev => (prev <= 0 ? testimonialMaxIndex : prev - 1));
  };
  
  
  const handleGalleryTouchStart = (e) => setGalleryTouchStart(e.touches[0].clientX);
  const handleGalleryTouchEnd = (e) => {
    if (galleryTouchStart === null) return;
    const currentTouch = e.changedTouches[0].clientX;
    const diff = galleryTouchStart - currentTouch;
    if (diff > 50) nextGallery();
    else if (diff < -50) prevGallery();
    setGalleryTouchStart(null);
  };

  const handleTestisTouchStart = (e) => setTestisTouchStart(e.touches[0].clientX);
  const handleTestisTouchEnd = (e) => {
    if (testisTouchStart === null) return;
    const currentTouch = e.changedTouches[0].clientX;
    const diff = testisTouchStart - currentTouch;
    if (diff > 50) nextTestimonial();
    else if (diff < -50) prevTestimonial();
    setTestisTouchStart(null);
  };

  const getIcon = (iconName) => {
    const icons = { ShieldCheck, CheckCircle, User, Truck, Headphones, Package, MapPin };
    const Icon = icons[iconName];
    return Icon ? <Icon className="feature-icon-wrapper" size={28} /> : null;
  };
  
  const getWhyIcon = (iconName) => {
    const icons = { ShieldCheck, Package, MapPin, User };
    const Icon = icons[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  return (
    <>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="section-subtitle hero-subtitle">{siteConfig.hero.subtitle}</div>
            <h1 className="hero-title">{siteConfig.hero.titleLine1}<br/><span className="text-primary">{siteConfig.hero.titleHighlight}</span><br/>{siteConfig.hero.titleLine2}</h1>
            <p className="hero-description">{siteConfig.hero.description}</p>
            <div className="hero-buttons">
              {siteConfig.hero.buttons.map(btn => (
                <Link key={btn.text} href={btn.link} className={`btn ${btn.primary ? 'btn-primary' : 'btn-outline'}`}>
                  {btn.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
        
      {/* FEATURE BAR */}
      <div className="feature-bar">
        <div className="feature-bar-marquee">
          <div className="feature-bar-container">
            {[...siteConfig.featureBar, ...siteConfig.featureBar].map((feature, index) => (
              <div key={`${feature.id}-${index}`} className="feature-item">
                {getIcon(feature.icon)}
                <div className="feature-text">
                  <div className="feature-title">{feature.title}</div>
                  <div className="feature-subtitle">{feature.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CATEGORIES SECTION (LIGHT) */}
      <section className="section categories-section">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-subtitle">EXPLORE OUR RANGE</div>
              <h2 className="section-title">Shop by <span>Category</span></h2>
            </div>
            <Link href="/categories" className="view-all">View All Categories</Link>
          </div>
          
          <div className="category-grid">
            {categories.map(cat => (
              <Link href={`/products?category=${encodeURIComponent(cat.name)}`} key={cat.id} className="category-card">
                <img src={cat.image} alt={cat.name} className="category-img-placeholder" style={{ objectFit: 'cover' }} />
                <div className="category-info">
                  <div className="category-icon"><Dumbbell size={20} /></div>
                  <h3 className="category-name">{cat.name}</h3>
                  <p className="category-desc">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR EQUIPMENT SECTION (DARK) */}
      <section className="section popular-section">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-subtitle">FEATURED PRODUCTS</div>
              <h2 className="section-title">Popular <span>Equipment</span></h2>
            </div>
            <Link href="/products" className="view-all">View All Products</Link>
          </div>
          
          <div className="product-grid">
            {products.slice(0, 4).map(product => (
              <div key={product.id} className="product-card">
                <div className="product-badge">{product.id}</div>

                <Link href={`/product/${product.id}`} style={{ display: 'block', overflow: 'hidden' }}>
                  <img src={product.image} alt={product.name} className="product-img-placeholder" style={{ objectFit: 'cover' }} />
                </Link>
                <div className="product-info">
                  <Link href={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3 className="product-name">{product.name}</h3>
                  </Link>
                  <p className="product-category">{product.category}</p>
                  <div className="product-card-price-row">
                    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                      <span style={{ background: '#e8f5e9', color: '#2e7d32', fontSize: '10px', fontWeight: '700', padding: '3px 8px', borderRadius: '20px', letterSpacing: '0.3px', display: 'flex', alignItems: 'center', gap: '3px' }}><CheckCircle size={10} /> In Stock</span>
                      <span style={{ background: '#e3f2fd', color: '#1565c0', fontSize: '10px', fontWeight: '700', padding: '3px 8px', borderRadius: '20px', letterSpacing: '0.3px', display: 'flex', alignItems: 'center', gap: '3px' }}><Truck size={10} /> Free Delivery</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION (LIGHT) */}
      <section className="section why-choose-section">
        <div className="why-choose-background-right"></div>
        <div className="container why-choose-container">
          <div className="why-choose-left">
            <div className="section-subtitle">{siteConfig.whyChooseUs.subtitle}</div>
            <h2 className="section-title">{siteConfig.whyChooseUs.titleMain} <span>{siteConfig.whyChooseUs.titleHighlight}</span></h2>
            <h3 className="why-choose-subtitle">{siteConfig.whyChooseUs.subHeading}</h3>
            <p className="why-choose-desc">{siteConfig.whyChooseUs.description}</p>
            <Link href="/about-us" className="btn btn-primary" style={{ display: 'inline-flex', marginTop: '25px' }}>Learn More</Link>
          </div>
          <div className="why-choose-right">
            {siteConfig.whyChooseUs.features.map(feature => (
              <div key={feature.id} className="why-feature">
                <div className="why-icon">{getWhyIcon(feature.icon)}</div>
                <div>
                  <h4 className="why-feature-title">{feature.title}</h4>
                  <p className="why-feature-desc">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="stronger-badge">
          <div className="stronger-text">
            {siteConfig.whyChooseUs.badgeText.map((text, idx) => (
              <React.Fragment key={idx}>
                {text}
                {idx < siteConfig.whyChooseUs.badgeText.length - 1 && <br/>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE RANGE GALLERY (DARK) */}
      <section className="section gallery-section">
        <div className="container gallery-container">
          <div className="gallery-info">
            <div className="section-subtitle">{siteConfig.exploreGallery.subtitle}</div>
            <h2 className="section-title">{siteConfig.exploreGallery.titleMain} <span>{siteConfig.exploreGallery.titleHighlight}</span></h2>
            <p className="gallery-desc">{siteConfig.exploreGallery.description}</p>
            <Link href="/categories" className="btn btn-primary" style={{ display: 'inline-flex' }}>View Full Catalog</Link>
          </div>
          <div className="gallery-carousel">
            <button className="gallery-nav-btn" onClick={prevGallery}><ChevronLeft size={30}/></button>
            <div style={{ overflow: 'hidden', flex: 1, touchAction: 'pan-y' }} onTouchStart={handleGalleryTouchStart} onTouchEnd={handleGalleryTouchEnd}>
              <div style={{ 
                display: 'flex', 
                gap: '15px', 
                transition: 'transform 0.5s ease-in-out',
                transform: `translateX(calc(-${galleryIndex} * ((100% + 15px) / ${itemsPerView})))`
              }}>
                {galleryItems.map((cat, idx) => (
                  <div key={idx} className="gallery-item" style={{ 
                    flex: `0 0 calc(100% / ${itemsPerView} - 15px * (${itemsPerView} - 1) / ${itemsPerView})`, 
                    backgroundImage: `url(${cat.image})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                  }}>
                    <div className="gallery-caption">{cat.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <button className="gallery-nav-btn" onClick={nextGallery}><ChevronRight size={30}/></button>
          </div>
        </div>
        <div className="carousel-dots">
          {Array.from({ length: galleryMaxIndex + 1 }).map((_, idx) => (
            <div key={idx} className={`dot ${idx === galleryIndex ? 'active' : ''}`} onClick={() => setGalleryIndex(idx)} style={{ cursor: 'pointer' }}></div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS (LIGHT) */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-subtitle">TESTIMONIALS</div>
              <h2 className="section-title">What Our <span>Customers Say</span></h2>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button className="gallery-nav-btn" style={{ color: 'var(--text-dark)' }} onClick={prevTestimonial}><ChevronLeft size={30}/></button>
            <div style={{ overflow: 'hidden', paddingBottom: '20px', flex: 1, touchAction: 'pan-y' }} onTouchStart={handleTestisTouchStart} onTouchEnd={handleTestisTouchEnd}>
              <div style={{
                display: 'flex',
                gap: '30px',
                transition: 'transform 0.5s ease-in-out',
                transform: `translateX(calc(-${testimonialIndex} * ((100% + 30px) / ${testisPerView})))`
              }}>
                {testimonials.map(testimonial => (
                  <div key={testimonial.id} className="testimonial-card" style={{ flex: `0 0 calc(100% / ${testisPerView} - 30px * (${testisPerView} - 1) / ${testisPerView})` }}>
                    <div className="testimonial-content">
                      <p>"{testimonial.quote}"</p>
                    </div>
                    <div className="testimonial-author">
                      <img src={testimonial.avatar} alt={testimonial.name} className="author-img" style={{ objectFit: 'cover' }} />
                      <div>
                        <div className="author-name">{testimonial.name}</div>
                        <div className="author-role">{testimonial.role}</div>
                        <div className="stars">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} size={14} fill="var(--primary-color)" color="var(--primary-color)" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="gallery-nav-btn" style={{ color: 'var(--text-dark)' }} onClick={nextTestimonial}><ChevronRight size={30}/></button>
          </div>
        </div>
      </section>

      {/* NEWS & BLOGS (LIGHT) */}
      <section className="section blogs-section">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-subtitle">LATEST UPDATES</div>
              <h2 className="section-title">News & <span>Blogs</span></h2>
            </div>
            <Link href="/blogs" className="view-all">View All Blogs</Link>
          </div>
          
          <div className="blogs-grid">
            {blogs.slice(0, 4).map(blog => (
              <div key={blog.id} className="blog-card">
                <div className="blog-img-wrapper">
                  <img src={blog.image} alt={blog.title} className="blog-img" />
                </div>
                <div className="blog-info">
                  <div className="blog-date">{blog.date}</div>
                  <h3 className="blog-title">{blog.title}</h3>
                  <Link href={`/blogs/${blog.id}`} className="blog-link">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSCRIBE SECTION */}
      <section className="subscribe-section">
        <div className="container">
          <div className="subscribe-container-inner">
            <div className="subscribe-left">
              <div className="subscribe-icon-wrapper">
                <ShieldCheck size={60} />
              </div>
              <div className="subscribe-text">
                <div className="subscribe-subtitle">STAY UPDATED</div>
                <h2 className="subscribe-title">Subscribe to Our Newsletter</h2>
                <p className="subscribe-desc">Get the latest product updates, offers and fitness tips straight to your inbox!</p>
              </div>
            </div>
            <div className="subscribe-right">
              <div className="subscribe-right-text" style={{ textAlign: 'right', maxWidth: '400px', marginLeft: 'auto' }}>
                Join over 10,000+ members building stronger bodies today.
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
