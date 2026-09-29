const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

const mediaQueries = `

/* =========================================
   MOBILE RESPONSIVENESS
========================================= */
@media (max-width: 992px) {
  .container {
    padding: 0 40px;
  }
  
  .category-grid, .product-grid, .blogs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .gallery-container {
    flex-direction: column;
    gap: 30px;
  }
  
  .why-choose-container {
    flex-direction: column;
    gap: 40px;
  }
  
  .why-choose-background-right {
    display: none;
  }
  
  .stronger-badge {
    width: 250px;
    height: 250px;
    padding: 20px;
  }
  
  .stronger-text {
    font-size: 20px;
  }
  
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .footer-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
  
  .section {
    padding: 50px 0;
  }
  
  .section-title {
    font-size: 32px;
    margin-bottom: 20px;
  }
  
  .hero-title {
    font-size: 36px;
  }
  
  .hero-description {
    font-size: 14px;
  }
  
  .hero-side-text {
    display: none;
  }
  
  .feature-bar-container {
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .feature-item {
    min-width: 45%;
    border-right: none;
  }
  
  .category-grid, .product-grid, .blogs-grid, .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .why-choose-left .section-title {
    font-size: 36px;
  }
  
  .subscribe-container-inner {
    flex-direction: column;
    padding: 40px 20px;
    text-align: center;
    gap: 30px;
    transform: translateY(0);
    margin: 40px 0;
  }
  
  .subscribe-left {
    flex-direction: column;
    text-align: center;
  }
  
  .subscribe-right-text {
    text-align: center;
    max-width: 100%;
  }
  
  .footer-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .footer {
    padding-top: 60px;
  }
  
  /* Mobile Header Adjustments */
  .nav {
    display: none; /* We will show this with a mobile menu toggle */
  }
  
  .nav.mobile-active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--bg-dark);
    padding: 20px;
    gap: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
    z-index: 99;
  }
  
  .mobile-menu-btn {
    display: block;
    color: var(--text-light);
  }
}

@media (min-width: 769px) {
  .mobile-menu-btn {
    display: none;
  }
}
`;

fs.writeFileSync(cssPath, css + mediaQueries);
console.log('CSS media queries appended');
