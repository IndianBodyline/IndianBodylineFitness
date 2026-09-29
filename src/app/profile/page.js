'use client';
import React, { useState } from 'react';
import { User, Package, MapPin, LogOut, CheckCircle, Plus, Edit2, Trash2 } from 'lucide-react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div style={{ minHeight: '80vh' }}>
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
        <div className="section-subtitle" style={{ color: 'var(--primary-color)', justifyContent: 'center' }}>ACCOUNT</div>
        <h1 className="section-title" style={{ color: '#fff', marginBottom: '15px' }}>Your <span style={{ color: 'var(--primary-color)' }}>Profile</span></h1>
        <p style={{ color: '#e0e0e0', maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>Manage your personal information and orders.</p>
      </div>

      <div className="container" style={{ paddingBottom: '50px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.5fr', gap: '50px', alignItems: 'start' }}>
          
          {/* Sidebar */}
          <div style={{ background: '#fff', padding: '25px 15px', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '25px', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: '900', color: 'var(--bg-dark)', marginBottom: '12px', boxShadow: '0 10px 20px rgba(252, 227, 0, 0.3)' }}>J</div>
              <h3 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: '800' }}>John Doe</h3>
              <p style={{ color: 'var(--text-muted-dark)', fontSize: '12px', margin: 0 }}>john.doe@example.com</p>
            </div>
            
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li onClick={() => setActiveTab('profile')} style={{ padding: '12px 16px', background: activeTab === 'profile' ? 'rgba(252, 227, 0, 0.1)' : 'transparent', borderRadius: '10px', fontWeight: '700', color: activeTab === 'profile' ? 'var(--primary-color)' : 'var(--text-muted-dark)', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', fontSize: '14px', transition: 'background 0.2s' }} onMouseOver={e => { if(activeTab !== 'profile') e.currentTarget.style.background = '#f8f9fa' }} onMouseOut={e => { if(activeTab !== 'profile') e.currentTarget.style.background = 'transparent' }}>
                <User size={18} /> My Profile
              </li>
              <li onClick={() => setActiveTab('orders')} style={{ padding: '12px 16px', background: activeTab === 'orders' ? 'rgba(252, 227, 0, 0.1)' : 'transparent', borderRadius: '10px', fontWeight: '700', color: activeTab === 'orders' ? 'var(--primary-color)' : 'var(--text-muted-dark)', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', fontSize: '14px', transition: 'background 0.2s' }} onMouseOver={e => { if(activeTab !== 'orders') e.currentTarget.style.background = '#f8f9fa' }} onMouseOut={e => { if(activeTab !== 'orders') e.currentTarget.style.background = 'transparent' }}>
                <Package size={18} /> Order History
              </li>
              <li onClick={() => setActiveTab('addresses')} style={{ padding: '12px 16px', background: activeTab === 'addresses' ? 'rgba(252, 227, 0, 0.1)' : 'transparent', borderRadius: '10px', fontWeight: '700', color: activeTab === 'addresses' ? 'var(--primary-color)' : 'var(--text-muted-dark)', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', fontSize: '14px', transition: 'background 0.2s' }} onMouseOver={e => { if(activeTab !== 'addresses') e.currentTarget.style.background = '#f8f9fa' }} onMouseOut={e => { if(activeTab !== 'addresses') e.currentTarget.style.background = 'transparent' }}>
                <MapPin size={18} /> Saved Addresses
              </li>
              <li style={{ padding: '12px 16px', borderRadius: '10px', fontWeight: '600', color: 'red', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', marginTop: '15px', fontSize: '14px', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = '#fef2f2'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                <LogOut size={18} /> Log Out
              </li>
            </ul>
          </div>
          
          {/* Main Content */}
          <div style={{ background: '#fff', padding: '30px', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.05)' }}>
            {activeTab === 'profile' && (
              <>
                <h3 style={{ marginBottom: '20px', fontSize: '22px', fontWeight: '800' }}>Personal Information</h3>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: 'var(--text-muted-dark)', fontSize: '13px' }}>First Name</label>
                      <input type="text" defaultValue="John" style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.05)', background: '#f8f9fa', fontSize: '14px', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: 'var(--text-muted-dark)', fontSize: '13px' }}>Last Name</label>
                      <input type="text" defaultValue="Doe" style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.05)', background: '#f8f9fa', fontSize: '14px', outline: 'none' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: 'var(--text-muted-dark)', fontSize: '13px' }}>Email Address</label>
                    <input type="email" defaultValue="john.doe@example.com" style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.05)', background: '#f8f9fa', fontSize: '14px', outline: 'none' }} />
                  </div>
                  
                  <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', marginTop: '15px', paddingTop: '20px' }}>
                    <h3 style={{ marginBottom: '15px', fontSize: '20px', fontWeight: '800' }}>Change Password</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      <div>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: 'var(--text-muted-dark)', fontSize: '13px' }}>Current Password</label>
                        <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.05)', background: '#f8f9fa', fontSize: '14px', outline: 'none' }} />
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <div>
                          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: 'var(--text-muted-dark)', fontSize: '13px' }}>New Password</label>
                          <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.05)', background: '#f8f9fa', fontSize: '14px', outline: 'none' }} />
                        </div>
                        <div>
                          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: 'var(--text-muted-dark)', fontSize: '13px' }}>Confirm New Password</label>
                          <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.05)', background: '#f8f9fa', fontSize: '14px', outline: 'none' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button type="button" className="btn btn-primary" style={{ width: 'fit-content', padding: '10px 24px', borderRadius: '50px', fontSize: '14px', fontWeight: '800', marginTop: '5px', boxShadow: '0 10px 20px rgba(252, 227, 0, 0.3)' }}>Save Changes</button>
                </form>
              </>
            )}

            {activeTab === 'orders' && (
              <>
                <h3 style={{ marginBottom: '25px', fontSize: '22px', fontWeight: '800' }}>Order History</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Order Card 1 */}
                  <div style={{ border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', padding: '25px', display: 'flex', gap: '25px', alignItems: 'center' }}>
                    <div style={{ width: '100px', height: '100px', borderRadius: '12px', background: `url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop') center/cover` }}></div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                        <div>
                          <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--primary-color)', background: 'var(--bg-dark)', padding: '4px 10px', borderRadius: '50px', display: 'inline-block', marginBottom: '8px' }}>Delivered</span>
                          <h4 style={{ margin: '0 0 5px', fontSize: '18px', fontWeight: '800' }}>Premium Dumbbell Set</h4>
                          <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted-dark)' }}>Order #NX-84729 • Oct 12, 2023</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '18px', fontWeight: '800' }}>$199.99</div>
                          <span style={{ fontSize: '13px', color: 'var(--text-muted-dark)' }}>Qty: 1</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                        <button style={{ padding: '8px 16px', background: '#f8f9fa', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '50px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', transition: 'all 0.2s' }} onMouseOver={e => e.currentTarget.style.background = '#e9ecef'} onMouseOut={e => e.currentTarget.style.background = '#f8f9fa'}>View Details</button>
                        <button style={{ padding: '8px 16px', background: 'var(--primary-color)', color: 'var(--bg-dark)', border: 'none', borderRadius: '50px', fontSize: '13px', fontWeight: '800', cursor: 'pointer', boxShadow: '0 5px 15px rgba(252, 227, 0, 0.3)' }}>Buy Again</button>
                      </div>
                    </div>
                  </div>

                  {/* Order Card 2 */}
                  <div style={{ border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', padding: '25px', display: 'flex', gap: '25px', alignItems: 'center' }}>
                    <div style={{ width: '100px', height: '100px', borderRadius: '12px', background: `url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop') center/cover` }}></div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                        <div>
                          <span style={{ fontSize: '12px', fontWeight: '700', color: '#10b981', background: '#d1fae5', padding: '4px 10px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '5px', width: 'fit-content', marginBottom: '8px' }}><CheckCircle size={14} /> Delivered</span>
                          <h4 style={{ margin: '0 0 5px', fontSize: '18px', fontWeight: '800' }}>Yoga Mat Pro</h4>
                          <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted-dark)' }}>Order #NX-84210 • Sep 05, 2023</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '18px', fontWeight: '800' }}>$45.00</div>
                          <span style={{ fontSize: '13px', color: 'var(--text-muted-dark)' }}>Qty: 2</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                        <button style={{ padding: '8px 16px', background: '#f8f9fa', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '50px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', transition: 'all 0.2s' }} onMouseOver={e => e.currentTarget.style.background = '#e9ecef'} onMouseOut={e => e.currentTarget.style.background = '#f8f9fa'}>View Details</button>
                        <button style={{ padding: '8px 16px', background: 'var(--primary-color)', color: 'var(--bg-dark)', border: 'none', borderRadius: '50px', fontSize: '13px', fontWeight: '800', cursor: 'pointer', boxShadow: '0 5px 15px rgba(252, 227, 0, 0.3)' }}>Buy Again</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'addresses' && (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                  <h3 style={{ margin: 0, fontSize: '22px', fontWeight: '800' }}>Saved Addresses</h3>
                  <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'var(--primary-color)', color: 'var(--bg-dark)', border: 'none', borderRadius: '50px', fontSize: '14px', fontWeight: '800', cursor: 'pointer', boxShadow: '0 5px 15px rgba(252, 227, 0, 0.3)' }}>
                    <Plus size={16} /> Add New Address
                  </button>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {/* Address Card 1 */}
                  <div style={{ border: '2px solid var(--primary-color)', borderRadius: '16px', padding: '20px', background: 'rgba(252, 227, 0, 0.05)', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', gap: '10px' }}>
                      <button style={{ background: 'none', border: 'none', color: 'var(--text-muted-dark)', cursor: 'pointer', padding: '5px' }}><Edit2 size={16} /></button>
                      <button style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer', padding: '5px' }}><Trash2 size={16} /></button>
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--bg-dark)', background: 'var(--primary-color)', padding: '4px 12px', borderRadius: '50px', display: 'inline-block', marginBottom: '15px' }}>Default</span>
                    <h4 style={{ margin: '0 0 10px', fontSize: '16px', fontWeight: '800' }}>Home</h4>
                    <p style={{ margin: '0 0 5px', fontSize: '14px', color: 'var(--text-muted-dark)', lineHeight: 1.5 }}>
                      John Doe<br/>
                      123 Fitness Avenue, Apt 4B<br/>
                      New York, NY 10001<br/>
                      United States
                    </p>
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-muted-dark)', fontWeight: '600' }}>+1 (555) 123-4567</p>
                  </div>

                  {/* Address Card 2 */}
                  <div style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: '16px', padding: '20px', background: '#fff', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', gap: '10px' }}>
                      <button style={{ background: 'none', border: 'none', color: 'var(--text-muted-dark)', cursor: 'pointer', padding: '5px' }}><Edit2 size={16} /></button>
                      <button style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer', padding: '5px' }}><Trash2 size={16} /></button>
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted-dark)', background: '#f8f9fa', padding: '4px 12px', borderRadius: '50px', display: 'inline-block', marginBottom: '15px' }}>Work</span>
                    <h4 style={{ margin: '0 0 10px', fontSize: '16px', fontWeight: '800' }}>Office</h4>
                    <p style={{ margin: '0 0 5px', fontSize: '14px', color: 'var(--text-muted-dark)', lineHeight: 1.5 }}>
                      John Doe<br/>
                      456 Corporate Blvd, Suite 200<br/>
                      San Francisco, CA 94107<br/>
                      United States
                    </p>
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-muted-dark)', fontWeight: '600' }}>+1 (555) 987-6543</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '80px', padding: '40px', background: '#fff', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '28px', fontWeight: '900', color: 'var(--bg-dark)', margin: '0 0 10px' }}>
            Empower Your <span style={{ color: 'var(--primary-color)', textShadow: '1px 1px 0 #000' }}>Fitness Journey</span>
          </h3>
          <p style={{ color: 'var(--text-muted-dark)', fontSize: '15px', maxWidth: '500px', margin: '0 auto', lineHeight: '1.6' }}>
            Join thousands of members who are transforming their lives every day with our premium equipment and expert guidance.
          </p>
        </div>
      </div>
    </div>
  );
}
