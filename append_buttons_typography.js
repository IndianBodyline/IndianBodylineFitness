const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

const additionalCSS = `
/* Product Page Typography & Buttons */
.product-price-section {
  font-size: 28px;
  font-weight: 900;
  color: var(--text-dark);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.product-stock-badge {
  font-size: 12px;
  font-weight: 800;
  background: #111;
  color: #fff;
  padding: 4px 10px;
  border-radius: 4px;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.product-action-row {
  display: flex;
  gap: 15px;
  align-items: center;
}

.quantity-selector {
  display: flex;
  align-items: center;
  border: 2px solid #e0e0e0;
  border-radius: 50px;
  overflow: hidden;
  height: 45px;
}

.quantity-btn {
  width: 40px;
  height: 100%;
  background: none;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: #555;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quantity-value {
  width: 35px;
  text-align: center;
  font-size: 15px;
  font-weight: 800;
  color: #111;
}

.product-cart-btn {
  flex: 1;
  height: 45px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #111;
  color: #fff;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  white-space: nowrap;
}

@media (max-width: 768px) {
  .product-page-title {
    font-size: 26px !important;
  }
  
  .product-price-section {
    font-size: 24px;
  }
  
  .product-action-row {
    flex-direction: column;
    align-items: stretch;
  }
  
  .quantity-selector {
    justify-content: space-between;
  }
  
  .quantity-value {
    flex: 1;
  }
}
`;

fs.writeFileSync(cssPath, css + additionalCSS);
console.log('Fixed product buttons and typography');
