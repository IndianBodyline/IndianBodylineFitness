const fs = require('fs');
const path = require('path');

// 1. Update contact/page.js
const contactPagePath = path.join(__dirname, 'src', 'app', 'contact', 'page.js');
let contactPage = fs.readFileSync(contactPagePath, 'utf8');

contactPage = contactPage.replace(
  /style=\{\{ display: 'grid', gridTemplateColumns: '1fr 1\.2fr', gap: '80px', alignItems: 'start', marginBottom: '100px' \}\}/g,
  `className="contact-grid" style={{ marginBottom: '100px' }}`
);
contactPage = contactPage.replace(
  /style=\{\{ display: 'grid', gridTemplateColumns: 'repeat\(3, 1fr\)', gap: '30px' \}\}/g,
  `className="faq-grid-3"`
);
contactPage = contactPage.replace(
  /style=\{\{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' \}\}/g,
  `className="faq-grid-2"`
);
fs.writeFileSync(contactPagePath, contactPage);

// 2. Append to globals.css
const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

const additionalCSS = `
/* Contact page classes */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: start;
}
.faq-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
.faq-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .faq-grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .faq-grid-3, .faq-grid-2 {
    grid-template-columns: 1fr;
  }
}
`;

fs.writeFileSync(cssPath, css + additionalCSS);
console.log('Update script for contact completed');
