const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

const additionalCSS = `
/* Product Card Layout Fixes */
.product-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-info {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex: 1; /* Pushes the button to the bottom by taking up remaining space */
}

.product-card-price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0 15px;
  flex-wrap: wrap; /* Allow wrapping if constrained */
  gap: 8px;
}

.product-card-price {
  font-weight: bold;
  font-size: 14px;
  color: var(--text-dark);
  margin: 0;
}

.product-card-rating {
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 10px;
  color: var(--text-muted-dark);
}

.rating-score {
  font-weight: bold;
  color: var(--text-dark);
}

.rating-pro {
  background-color: var(--bg-dark);
  color: var(--text-light);
  padding: 2px 5px;
  border-radius: 4px;
  font-size: 8px;
  font-weight: bold;
  margin-left: 2px;
}

.btn-add-cart {
  width: 100%;
  margin-top: auto; /* Aligns to bottom */
}

@media (max-width: 768px) {
  .product-info {
    padding: 15px; /* Less padding on small cards */
  }
  
  .product-card-price-row {
    flex-direction: column; /* Stack price and rating on very small screens */
    align-items: flex-start;
  }
}
`;

fs.writeFileSync(cssPath, css + additionalCSS);
console.log('Fixed related product cards layout');
