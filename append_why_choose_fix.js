const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

const additionalCSS = `
/* Fix Why Choose Us text overlap on mobile */
@media (max-width: 768px) {
  .stronger-badge {
    width: 250px;
    height: 250px;
    padding: 15px;
  }
  
  .stronger-text {
    font-size: 18px;
  }
  
  .why-choose-right {
    padding-bottom: 150px; /* Provides extra space so text doesn't flow behind the diagonal badge */
  }
}
`;

fs.writeFileSync(cssPath, css + additionalCSS);
console.log('Fixed Why Choose Us overlapping on mobile');
