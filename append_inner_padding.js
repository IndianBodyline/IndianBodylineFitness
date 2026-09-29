const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

const additionalCSS = `
/* Product Details Wrapper padding adjustments */
.product-details-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 20px;
  gap: 40px;
}

@media (max-width: 768px) {
  .product-details-inner {
    padding: 0;
  }
  
  /* Reset the image corner radii since it now touches the edges */
  .product-details-left {
    border-radius: 0 !important;
    margin-bottom: 20px;
  }
}
`;

fs.writeFileSync(cssPath, css + additionalCSS);
console.log('Fixed product details inner padding');
