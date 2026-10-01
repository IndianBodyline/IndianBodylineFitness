import { ShieldCheck, Award, Users, TrendingUp, Target } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div style={{ minHeight: '60vh' }}>
      <div 
        className="page-banner"
        style={{
          background: `linear-gradient(rgba(18, 20, 24, 0.85), rgba(18, 20, 24, 0.95)), url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop') center/cover`,
          padding: '60px 20px',
          marginBottom: '60px',
          color: 'var(--text-light)',
          textAlign: 'center'
        }}
      >
        <div className="section-subtitle" style={{ color: 'var(--primary-color)', justifyContent: 'center' }}>OUR STORY</div>
        <h1 className="section-title" style={{ color: '#fff', marginBottom: '15px' }}>About <span style={{ color: 'var(--primary-color)' }}>Indian Bodylines</span></h1>
        <p style={{ color: '#e0e0e0', maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>Discover the passion and engineering behind India's premier fitness equipment.</p>
      </div>

      <div className="container" style={{ paddingBottom: '40px' }}>
        
        {/* Section 1: Who we are */}
        <div className="about-grid-2" style={{ marginBottom: '80px' }}>
          <div>
            <div className="section-subtitle">WHO WE ARE</div>
            <h2 className="section-title" style={{ fontSize: '32px', marginBottom: '20px' }}>Engineering <span style={{ color: 'var(--primary-color)' }}>Excellence</span></h2>
            <p style={{ color: 'var(--text-muted-dark)', lineHeight: '1.8', fontSize: '16px', marginBottom: '25px' }}>
              Indian Bodylines is a leading manufacturer and supplier of high-quality gym and fitness equipment. 
              We are dedicated to building robust, durable, and biomechanically accurate machines for commercial 
              gyms, home setups, and outdoor parks across the country.
            </p>
            <p style={{ color: 'var(--text-muted-dark)', lineHeight: '1.8', fontSize: '16px' }}>
              With years of expertise in the fitness industry, our mission is to empower individuals and communities 
              by providing reliable equipment that fosters stronger, healthier, and happier lifestyles.
            </p>
          </div>
          <div style={{ 
            background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop') center/cover`, 
            borderRadius: '20px', 
            minHeight: '400px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
          }}>
              <span style={{ color: '#fff', fontSize: '28px', fontWeight: '900', textAlign: 'center', padding: '20px', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
                STRONGER. HEALTHIER. <span style={{ color: 'var(--primary-color)' }}>HAPPIER.</span>
              </span>
          </div>
        </div>

        {/* Section 2: Stats */}
        <div className="about-stats-grid" style={{ background: 'var(--bg-dark)', borderRadius: '20px', padding: '30px', textAlign: 'center', color: '#fff', marginBottom: '60px', boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}>
          <div>
            <Award size={32} color="var(--primary-color)" style={{ margin: '0 auto 10px' }} />
            <h3 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '5px' }}>15+</h3>
            <p style={{ color: 'var(--text-muted-light)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Years Experience</p>
          </div>
          <div>
            <Target size={32} color="var(--primary-color)" style={{ margin: '0 auto 10px' }} />
            <h3 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '5px' }}>500+</h3>
            <p style={{ color: 'var(--text-muted-light)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Commercial Gyms</p>
          </div>
          <div>
            <Users size={32} color="var(--primary-color)" style={{ margin: '0 auto 10px' }} />
            <h3 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '5px' }}>10k+</h3>
            <p style={{ color: 'var(--text-muted-light)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Happy Clients</p>
          </div>
          <div>
            <TrendingUp size={32} color="var(--primary-color)" style={{ margin: '0 auto 10px' }} />
            <h3 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '5px' }}>100%</h3>
            <p style={{ color: 'var(--text-muted-light)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Quality Assured</p>
          </div>
        </div>

        {/* Section 3: Our Mission (Reversed) */}
        <div className="about-grid-2" style={{ marginBottom: '40px' }}>
          <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.1)', height: '400px' }}>
            <img 
              src="/gym-cardio.jpg" 
              alt="Our Mission" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            />
          </div>
          <div>
            <div className="section-subtitle">OUR MISSION</div>
            <h2 className="section-title" style={{ fontSize: '32px', marginBottom: '20px' }}>Elevating the <span style={{ color: 'var(--primary-color)' }}>Standard</span></h2>
            <p style={{ color: 'var(--text-muted-dark)', lineHeight: '1.8', fontSize: '16px', marginBottom: '25px' }}>
              We don't just sell equipment; we manufacture performance. Every weld, every pulley, and every cushion is rigorously tested to ensure it meets international ergonomic and durability standards.
            </p>
            <p style={{ color: 'var(--text-muted-dark)', lineHeight: '1.8', fontSize: '16px' }}>
              Whether you are an aspiring athlete building a garage gym or a commercial entity outfitting a 10,000 sq ft facility, we promise to deliver biomechanical perfection and uncompromising customer service.
            </p>
          </div>
        </div>

        {/* Section 4: CTA */}
        <div className="subscribe-container-inner" style={{ marginTop: '80px' }}>
          <div className="subscribe-left">
            <div className="subscribe-icon-wrapper">
              <ShieldCheck size={60} />
            </div>
            <div className="subscribe-text">
              <div className="subscribe-subtitle">PARTNER WITH US</div>
              <h2 className="subscribe-title">Ready to Build Your Gym?</h2>
              <p className="subscribe-desc">Reach out to our sales team to discuss bulk orders and commercial installations.</p>
            </div>
          </div>
          <div className="subscribe-right-text" style={{ textAlign: 'left', borderLeft: '3px solid var(--primary-color)', paddingLeft: '25px' }}>
            <span style={{ fontSize: '16px', color: '#fff', fontWeight: 'bold' }}>Contact Sales</span>
            <span style={{ color: 'var(--primary-color)', fontSize: '28px', fontWeight: '900', marginTop: '5px' }}>+91 98374 04124</span>
          </div>
        </div>
      </div>
    </div>
  );
}
