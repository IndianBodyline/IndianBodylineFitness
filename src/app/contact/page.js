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
        
        {/* Contact Form Section */}
        <div className="contact-grid" style={{ marginBottom: '100px' }}>
          
          {/* Left Side - Details */}
          <div style={{marginTop:"30px"}}>
            <h3 style={{ marginBottom: '15px', fontSize: '24px', fontWeight: '800' }}>We'd love to hear from you</h3>
            <p style={{ color: 'var(--text-muted-dark)', marginBottom: '50px', fontSize: '14px', lineHeight: '1.6' }}>
              Whether you have a question about our equipment, pricing, or need a custom gym solution, our team is ready to answer all your questions.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                <div style={{ padding: '12px', background: 'var(--bg-dark)', color: 'var(--primary-color)', borderRadius: '50%', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}><Phone size={16}/></div>
                <div>
                  <strong style={{ fontSize: '15px', display: 'block', marginBottom: '2px' }}>Phone</strong>
                  <span style={{ color: 'var(--text-muted-dark)', fontSize: '13px' }}>+91 9258888252</span>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                <div style={{ padding: '12px', background: 'var(--bg-dark)', color: 'var(--primary-color)', borderRadius: '50%', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}><Mail size={16}/></div>
                <div>
                  <strong style={{ fontSize: '15px', display: 'block', marginBottom: '2px' }}>Email</strong>
                  <span style={{ color: 'var(--text-muted-dark)', fontSize: '13px' }}>indianbodylines@gmail.com</span>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                <div style={{ padding: '12px', background: 'var(--bg-dark)', color: 'var(--primary-color)', borderRadius: '50%', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}><MapPin size={16}/></div>
                <div>
                  <strong style={{ fontSize: '15px', display: 'block', marginBottom: '2px' }}>Location</strong>
                  <span style={{ color: 'var(--text-muted-dark)', fontSize: '13px' }}>India</span>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Right Side - Form */}
          <div style={{ background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}>
            <h3 style={{ marginBottom: '25px', fontSize: '24px', fontWeight: '800' }}>Send us a message</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-muted-dark)', fontSize: '14px' }}>Full Name</label>
                <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', background: '#f8f9fa', fontSize: '15px', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-muted-dark)', fontSize: '14px' }}>Email Address</label>
                <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', background: '#f8f9fa', fontSize: '15px', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-muted-dark)', fontSize: '14px' }}>Your Message</label>
                <textarea placeholder="How can we help you?" rows={3} style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', background: '#f8f9fa', fontSize: '15px', outline: 'none', resize: 'vertical' }}></textarea>
              </div>
              <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '14px', borderRadius: '50px', fontSize: '15px', fontWeight: '800', marginTop: '5px', boxShadow: '0 10px 20px rgba(252, 227, 0, 0.3)' }}>Send Message</button>
            </form>
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
