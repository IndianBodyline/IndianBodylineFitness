const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

const additionalCSS = `
/* Maximize carousel width on mobile by absolutely positioning arrows */
@media (max-width: 768px) {
  .gallery-carousel, .testimonials-section > .container > div:last-child {
    position: relative;
    width: calc(100% + 40px);
    margin-left: -20px;
    margin-right: -20px;
  }
  
  .gallery-carousel .gallery-nav-btn,
  .testimonials-section > .container > div:last-child .gallery-nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  
  .gallery-carousel .gallery-nav-btn:first-child,
  .testimonials-section > .container > div:last-child .gallery-nav-btn:first-child {
    left: 10px;
  }
  
  .gallery-carousel .gallery-nav-btn:last-child,
  .testimonials-section > .container > div:last-child .gallery-nav-btn:last-child {
    right: 10px;
  }
  
  /* Give the inner container padding so items don't stick to the very edge under arrows */
  .gallery-carousel > div:nth-child(2),
  .testimonials-section > .container > div:last-child > div:nth-child(2) {
    padding: 0 10px;
  }
}
`;

fs.writeFileSync(cssPath, css + additionalCSS);
console.log('Appended carousel arrow mobile adjustments');
