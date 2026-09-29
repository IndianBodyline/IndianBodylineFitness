const fs = require('fs');
const path = require('path');

// 1. Update about-us/page.js
const aboutPagePath = path.join(__dirname, 'src', 'app', 'about-us', 'page.js');
let aboutPage = fs.readFileSync(aboutPagePath, 'utf8');

aboutPage = aboutPage.replace(
  /style=\{\{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '80px' \}\}/g,
  `className="about-grid-2" style={{ marginBottom: '80px' }}`
);
aboutPage = aboutPage.replace(
  /style=\{\{ background: 'var\(--bg-dark\)', borderRadius: '20px', padding: '30px', display: 'grid', gridTemplateColumns: 'repeat\(4, 1fr\)', gap: '20px', textAlign: 'center', color: '#fff', marginBottom: '60px', boxShadow: '0 20px 50px rgba\(0,0,0,0\.15\)' \}\}/g,
  `className="about-stats-grid" style={{ background: 'var(--bg-dark)', borderRadius: '20px', padding: '30px', textAlign: 'center', color: '#fff', marginBottom: '60px', boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}`
);
aboutPage = aboutPage.replace(
  /style=\{\{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '40px' \}\}/g,
  `className="about-grid-2" style={{ marginBottom: '40px' }}`
);
fs.writeFileSync(aboutPagePath, aboutPage);

// 2. Append to globals.css
const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

const additionalCSS = `
/* About us page classes */
.about-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.about-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

@media (max-width: 992px) {
  .about-grid-2 {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .about-stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .about-stats-grid {
    grid-template-columns: 1fr;
  }
}
`;

fs.writeFileSync(cssPath, css + additionalCSS);
console.log('Update script for about-us completed');
