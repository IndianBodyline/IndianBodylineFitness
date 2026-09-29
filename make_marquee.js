const fs = require('fs');
const path = require('path');

// 1. Update page.js
const pagePath = path.join(__dirname, 'src', 'app', 'page.js');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// Replace the feature bar section
pageContent = pageContent.replace(
  /\{\/\* FEATURE BAR \*\/\}([\s\S]*?)<\/div>\s*<\/div>/,
  `{/* FEATURE BAR */}
      <div className="feature-bar">
        <div className="feature-bar-marquee">
          <div className="feature-bar-container">
            {[...siteConfig.featureBar, ...siteConfig.featureBar].map((feature, index) => (
              <div key={\`\${feature.id}-\${index}\`} className="feature-item">
                {getIcon(feature.icon)}
                <div className="feature-text">
                  <div className="feature-title">{feature.title}</div>
                  <div className="feature-subtitle">{feature.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>`
);

fs.writeFileSync(pagePath, pageContent);

// 2. Append CSS to globals.css
const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

const additionalCSS = `
/* Auto-scrolling Marquee for Feature Bar */
.feature-bar-marquee {
  overflow: hidden;
  width: 100%;
}

@media (min-width: 769px) {
  .feature-bar-container {
    justify-content: space-between;
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 80px;
  }
  
  /* Hide the second half (duplicates) on desktop */
  .feature-item:nth-child(n+6) {
    display: none;
  }
}

@media (max-width: 768px) {
  .feature-bar {
    padding: 15px 0;
  }
  
  .feature-bar-container {
    display: flex;
    flex-wrap: nowrap;
    width: max-content; /* Let it expand beyond screen */
    gap: 0;
    padding-bottom: 0;
    justify-content: flex-start;
    animation: marqueeScroll 15s linear infinite;
  }
  
  .feature-item {
    flex: 0 0 auto;
    width: 250px; /* Fixed width for consistent scrolling */
    border-right: 1px solid rgba(255, 255, 255, 0.15);
    padding: 0 20px;
  }
  
  @keyframes marqueeScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-250px * 5)); } /* 5 is the original number of items */
  }
}
`;

fs.writeFileSync(cssPath, css + additionalCSS);
console.log('Feature bar marquee implemented');
