const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

const additionalCSS = `
/* Product Details Outer Wrapper */
.product-details-wrapper {
  background-color: #f8f9fa;
  min-height: 80vh;
  padding: 60px 20px;
}

.product-details-box {
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  .product-details-wrapper {
    padding: 0; /* Remove padding around the container on mobile */
  }
  
  .product-details-box.container {
    padding: 0; /* Negate the global .container padding */
    border-radius: 0; /* Make it square since it touches the screen edges */
    box-shadow: none;
  }
}
`;

fs.writeFileSync(cssPath, css + additionalCSS);
console.log('Fixed outer wrapper padding');
