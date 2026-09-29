import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, HelpCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div style={{ minHeight: '60vh' }}>
      <div 
        className="page-banner"
        style={{
          background: `linear-gradient(rgba(18, 20, 24, 0.85), rgba(18, 20, 24, 0.95)), url('https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop') center/cover`,
          padding: '60px 20px',
          marginBottom: '80px',
          color: 'var(--text-light)',
          textAlign: 'center'
        }}
      >
        <div className="section-subtitle" style={{ color: 'var(--primary-color)', justifyContent: 'center' }}>GET IN TOUCH</div>
        <h1 className="section-title" style={{ color: '#fff', marginBottom: '15px' }}>Contact <span style={{ color: 'var(--primary-color)' }}>Us</span></h1>
        <p style={{ color: '#e0e0e0', maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>We're here to help you build the perfect fitness space.</p>
      </div>

      <div className="container" style={{ paddingBottom: '40px' }}>
        
        {/* Contact Details Section */}
        <div style={{ marginBottom: '100px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'flex-start', marginTop: '30px' }}>

            {/* Left Column */}
            <div style={{ flex: '1 1 340px' }}>
              <h3 style={{ marginBottom: '15px', fontSize: '32px', fontWeight: '900', lineHeight: '1.2' }}>We'd love to hear from you</h3>
              <p style={{ color: 'var(--text-muted-dark)', marginBottom: '12px', fontSize: '15px', lineHeight: '1.7' }}>
                Whether you have a question about our equipment, pricing, or need a custom gym solution, our team is ready to answer all your questions.
              </p>
              <p style={{ color: 'var(--text-muted-dark)', marginBottom: '40px', fontSize: '15px', lineHeight: '1.7' }}>
                At Indian Bodylines, we believe that great fitness spaces start with great conversations. Reach out to us — our specialists are available to guide you every step of the way, from equipment selection to full facility setup.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ padding: '14px', background: 'var(--bg-dark)', color: 'var(--primary-color)', borderRadius: '50%', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', flexShrink: 0 }}><Phone size={18}/></div>
                  <div>
                    <strong style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: '#888', display: 'block', marginBottom: '3px' }}>Call Us</strong>
                    <span style={{ fontSize: '17px', fontWeight: '800', color: 'var(--text-dark)' }}>+91 9258888252</span>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ padding: '14px', background: 'var(--bg-dark)', color: 'var(--primary-color)', borderRadius: '50%', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', flexShrink: 0 }}><Mail size={18}/></div>
                  <div>
                    <strong style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: '#888', display: 'block', marginBottom: '3px' }}>Email Us</strong>
                    <span style={{ fontSize: '17px', fontWeight: '800', color: 'var(--text-dark)' }}>indianbodylines@gmail.com</span>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ padding: '14px', background: 'var(--bg-dark)', color: 'var(--primary-color)', borderRadius: '50%', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', flexShrink: 0 }}><MapPin size={18}/></div>
                  <div>
                    <strong style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: '#888', display: 'block', marginBottom: '3px' }}>Location</strong>
                    <span style={{ fontSize: '17px', fontWeight: '800', color: 'var(--text-dark)' }}>Pan India — Delivering Everywhere</span>
                  </div>
                </li>
              </ul>

              {/* Business Hours */}
              <div style={{ background: '#f8f9fa', borderRadius: '16px', padding: '24px', border: '1px solid #eee' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '14px', color: 'var(--text-dark)' }}>🕐 Business Hours</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                  <span style={{ color: '#555' }}>Monday – Saturday</span>
                  <span style={{ fontWeight: '700', color: 'var(--text-dark)' }}>9:00 AM – 7:00 PM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <span style={{ color: '#555' }}>Sunday</span>
                  <span style={{ fontWeight: '700', color: '#e74c3c' }}>Closed</span>
                </div>
              </div>
            </div>

            {/* Right Column — Highlight Cards */}
            <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: 'var(--bg-dark)', color: '#fff', borderRadius: '20px', padding: '30px', boxShadow: '0 15px 40px rgba(0,0,0,0.12)' }}>
                <div style={{ fontSize: '36px', fontWeight: '900', color: 'var(--primary-color)', marginBottom: '6px' }}>500+</div>
                <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>Gyms Equipped Across India</div>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>From boutique studios to large commercial fitness centers — we've built them all.</p>
              </div>
              <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '20px', padding: '30px', boxShadow: '0 15px 40px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: '36px', fontWeight: '900', color: 'var(--primary-color)', marginBottom: '6px' }}>24 hrs</div>
                <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>Average Response Time</div>
                <p style={{ color: '#888', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>Our sales and support team typically responds within one business day, often sooner.</p>
              </div>
              <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '20px', padding: '30px', boxShadow: '0 15px 40px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: '36px', fontWeight: '900', color: 'var(--primary-color)', marginBottom: '6px' }}>5 Yrs</div>
                <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>Structural Warranty</div>
                <p style={{ color: '#888', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>Every piece of equipment comes backed by our industry-leading warranty coverage.</p>
              </div>
            </div>

          </div>
        </div>


        {/* Our Locations Section */}
        <div style={{ marginBottom: '100px' }}>
          <div className="section-subtitle" style={{ justifyContent: 'center' }}>GLOBAL PRESENCE</div>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>Our <span style={{ color: 'var(--primary-color)' }}>Locations</span></h2>
          
          <div className="faq-grid-3">
            {/* Headquarters */}
            <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.06)', maxWidth: '90%', margin: '0 auto' }}>
              <div style={{ height: '160px', background: `url('/gym-outdoor.jpg') center/cover` }}></div>
              <div style={{ padding: '25px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>Headquarters</h4>
                <p style={{ color: 'var(--text-muted-dark)', lineHeight: '1.5', marginBottom: '15px', fontSize: '14px' }}>
                  123 Fitness Avenue, Industrial Estate, Phase 1,<br/>
                  New Delhi, India 110020
                </p>
                <span style={{ color: 'var(--primary-color)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                  <MapPin size={16} /> Get Directions
                </span>
              </div>
            </div>

            {/* Manufacturing */}
            <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.06)', maxWidth: '90%', margin: '0 auto' }}>
              <div style={{ height: '160px', background: `url('/gym-strength.jpg') center/cover` }}></div>
              <div style={{ padding: '25px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>Manufacturing Unit</h4>
                <p style={{ color: 'var(--text-muted-dark)', lineHeight: '1.5', marginBottom: '15px', fontSize: '14px' }}>
                  Plot 45-50, Heavy Industrial Area, Sector 5,<br/>
                  Gurugram, Haryana 122016
                </p>
                <span style={{ color: 'var(--primary-color)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                  <MapPin size={16} /> Get Directions
                </span>
              </div>
            </div>

            {/* Showroom */}
            <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.06)', maxWidth: '90%', margin: '0 auto' }}>
              <div style={{ height: '160px', background: `url('/gym-cardio.jpg') center/cover` }}></div>
              <div style={{ padding: '25px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>Experience Center</h4>
                <p style={{ color: 'var(--text-muted-dark)', lineHeight: '1.5', marginBottom: '15px', fontSize: '14px' }}>
                  Level 2, The Premium Mall, Vasant Kunj,<br/>
                  New Delhi, India 110070
                </p>
                <span style={{ color: 'var(--primary-color)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                  <MapPin size={16} /> Get Directions
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div style={{ marginBottom: '100px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.08)', height: '450px' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.5400497554!2d77.0688975!3d28.5272181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1714578912345!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* FAQ Section */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-subtitle" style={{ justifyContent: 'center' }}>SUPPORT</div>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>Frequently Asked <span style={{ color: 'var(--primary-color)' }}>Questions</span></h2>
          
          <div className="faq-grid-2">
            <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <HelpCircle size={24} color="var(--primary-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '10px' }}>Do you offer installation services?</h4>
                  <p style={{ color: 'var(--text-muted-dark)', lineHeight: '1.6' }}>Yes! Our team of experts provides professional installation for all commercial and home gym setups across the country.</p>
                </div>
              </div>
            </div>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <HelpCircle size={24} color="var(--primary-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '10px' }}>What is the warranty on your equipment?</h4>
                  <p style={{ color: 'var(--text-muted-dark)', lineHeight: '1.6' }}>We offer an industry-leading 5-year warranty on all structural frames and a 1-year warranty on moving parts and upholstery.</p>
                </div>
              </div>
            </div>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <HelpCircle size={24} color="var(--primary-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '10px' }}>Do you fulfill bulk commercial orders?</h4>
                  <p style={{ color: 'var(--text-muted-dark)', lineHeight: '1.6' }}>Absolutely. We specialize in outfitting entire commercial gyms and fitness centers. Contact us directly for bulk pricing.</p>
                </div>
              </div>
            </div>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <HelpCircle size={24} color="var(--primary-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '10px' }}>Can I visit your showroom?</h4>
                  <p style={{ color: 'var(--text-muted-dark)', lineHeight: '1.6' }}>Yes, we'd love to host you! Please call or email us to schedule a personalized tour of our manufacturing facility and showroom.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
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
            <span style={{ color: 'var(--primary-color)', fontSize: '28px', fontWeight: '900', marginTop: '5px' }}>+91 9258888252</span>
          </div>
        </div>

      </div>
    </div>
  );
}
