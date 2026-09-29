const fs = require('fs');
const path = require('path');

// 1. Update product/[id]/page.js
const productPagePath = path.join(__dirname, 'src', 'app', 'product', '[id]', 'page.js');
let productPage = fs.readFileSync(productPagePath, 'utf8');

productPage = productPage.replace(
  /style=\{\{ flex: '1 1 450px', position: 'relative'/g,
  `className="product-details-left" style={{ position: 'relative'`
);
productPage = productPage.replace(
  /style=\{\{ flex: '1 1 450px', padding: '10px 20px', display: 'flex'/g,
  `className="product-details-right" style={{ padding: '10px 20px', display: 'flex'`
);
productPage = productPage.replace(
  /style=\{\{ padding: '0 50px 50px', marginTop: '20px', borderTop: '1px solid #f0f0f0', paddingTop: '50px' \}\}/g,
  `className="responsive-padding" style={{ marginTop: '20px', borderTop: '1px solid #f0f0f0', paddingTop: '50px' }}`
);
productPage = productPage.replace(
  /style=\{\{ flex: '2 1 400px' \}\}/g,
  `className="product-desc-left"`
);
productPage = productPage.replace(
  /style=\{\{ flex: '1 1 300px' \}\}/g,
  `className="product-desc-right"`
);
productPage = productPage.replace(
  /style=\{\{ padding: '0 50px 50px', borderTop: '1px solid #f0f0f0', paddingTop: '50px' \}\}/g,
  `className="responsive-padding" style={{ borderTop: '1px solid #f0f0f0', paddingTop: '50px' }}`
);
productPage = productPage.replace(
  /style=\{\{ flex: '1 1 400px' \}\}/g,
  `className="product-reviews-half"`
);
fs.writeFileSync(productPagePath, productPage);

// 2. Update cart/page.js
const cartPagePath = path.join(__dirname, 'src', 'app', 'cart', 'page.js');
let cartPage = fs.readFileSync(cartPagePath, 'utf8');

cartPage = cartPage.replace(
  /style=\{\{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '50px', alignItems: 'start' \}\}/g,
  `className="cart-layout-grid"`
);
cartPage = cartPage.replace(
  /style=\{\{ marginTop: '100px', display: 'grid', gridTemplateColumns: 'repeat\(4, 1fr\)', gap: '20px', textAlign: 'center' \}\}/g,
  `className="trust-badges-grid" style={{ marginTop: '100px' }}`
);
fs.writeFileSync(cartPagePath, cartPage);

// 3. Append to globals.css
const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

const additionalCSS = `
/* Layout utility classes */
.cart-layout-grid {
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  gap: 50px;
  align-items: start;
}
.trust-badges-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  text-align: center;
}
.product-details-left, .product-details-right {
  flex: 1 1 450px;
}
.product-desc-left {
  flex: 2 1 400px;
}
.product-desc-right {
  flex: 1 1 300px;
}
.product-reviews-half {
  flex: 1 1 400px;
}
.responsive-padding {
  padding: 0 50px 50px;
}

@media (max-width: 992px) {
  .cart-layout-grid {
    grid-template-columns: 1fr;
  }
  .trust-badges-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .trust-badges-grid {
    grid-template-columns: 1fr;
  }
  .product-details-left, .product-details-right, 
  .product-desc-left, .product-desc-right, 
  .product-reviews-half {
    flex: 1 1 100%;
  }
  .responsive-padding {
    padding: 0 20px 50px !important;
  }
}
`;

fs.writeFileSync(cssPath, css + additionalCSS);
console.log('Update script completed');
