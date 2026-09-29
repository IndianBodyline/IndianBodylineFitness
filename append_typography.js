const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

const additionalCSS = `
/* Product Page Typography Fixes */
.product-page-title {
  font-size: 36px;
}

@media (max-width: 768px) {
  .product-page-title {
    font-size: 28px;
  }
}
`;

fs.writeFileSync(cssPath, css + additionalCSS);
console.log('Fixed product page typography');
