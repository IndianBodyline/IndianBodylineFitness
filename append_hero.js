const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

const additionalCSS = `
/* Hero Mobile Adjustments */
@media (max-width: 768px) {
  .hero-buttons {
    flex-direction: column;
    width: 100%;
    gap: 15px;
    margin-top: 10px;
  }
  
  .hero-buttons .btn {
    width: 100%;
    padding: 14px 20px;
    font-size: 14px;
    justify-content: center;
  }
  
  .hero-title {
    font-size: 32px;
    line-height: 1.2;
    margin-bottom: 15px;
  }
  
  .hero-description {
    font-size: 14px;
    margin-bottom: 25px;
    line-height: 1.6;
    color: #e0e0e0;
  }
  
  .hero-subtitle {
    margin-bottom: 15px;
  }
}
`;

fs.writeFileSync(cssPath, css + additionalCSS);
console.log('Appended hero mobile adjustments');
