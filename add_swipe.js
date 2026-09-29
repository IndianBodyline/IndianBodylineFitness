const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'src', 'app', 'page.js');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// 1. Add touch state variables
const touchStateCode = `
  const [galleryTouchStart, setGalleryTouchStart] = React.useState(null);
  const [testisTouchStart, setTestisTouchStart] = React.useState(null);
`;
pageContent = pageContent.replace(
  /const \[testisPerView, setTestisPerView\] = React\.useState\(3\);/,
  `const [testisPerView, setTestisPerView] = React.useState(3);\n${touchStateCode}`
);

// 2. Add touch handlers
const touchHandlersCode = `
  const handleGalleryTouchStart = (e) => setGalleryTouchStart(e.touches[0].clientX);
  const handleGalleryTouchEnd = (e) => {
    if (galleryTouchStart === null) return;
    const currentTouch = e.changedTouches[0].clientX;
    const diff = galleryTouchStart - currentTouch;
    if (diff > 50) nextGallery();
    else if (diff < -50) prevGallery();
    setGalleryTouchStart(null);
  };

  const handleTestisTouchStart = (e) => setTestisTouchStart(e.touches[0].clientX);
  const handleTestisTouchEnd = (e) => {
    if (testisTouchStart === null) return;
    const currentTouch = e.changedTouches[0].clientX;
    const diff = testisTouchStart - currentTouch;
    if (diff > 50) nextTestimonial();
    else if (diff < -50) prevTestimonial();
    setTestisTouchStart(null);
  };
`;
pageContent = pageContent.replace(
  /const getIcon = \(iconName\) => \{/,
  `${touchHandlersCode}\n  const getIcon = (iconName) => {`
);

// 3. Attach to gallery container
pageContent = pageContent.replace(
  /<div style=\{\{ overflow: 'hidden', flex: 1 \}\}>/g,
  `<div style={{ overflow: 'hidden', flex: 1, touchAction: 'pan-y' }} onTouchStart={handleGalleryTouchStart} onTouchEnd={handleGalleryTouchEnd}>`
);
// Wait, the above will replace BOTH, but the second one is testimonials!
// Let's do it individually by replacing the specific blocks.
// Actually the second one is `<div style={{ overflow: 'hidden', paddingBottom: '20px', flex: 1 }}>`

pageContent = pageContent.replace(
  /<div style=\{\{ overflow: 'hidden', flex: 1, touchAction: 'pan-y' \}\} onTouchStart=\{handleGalleryTouchStart\} onTouchEnd=\{handleGalleryTouchEnd\}>/g, // Revert if already modified by accident
  `<div style={{ overflow: 'hidden', flex: 1 }}>`
);

pageContent = pageContent.replace(
  /<div style=\{\{ overflow: 'hidden', flex: 1 \}\}>/,
  `<div style={{ overflow: 'hidden', flex: 1, touchAction: 'pan-y' }} onTouchStart={handleGalleryTouchStart} onTouchEnd={handleGalleryTouchEnd}>`
);

pageContent = pageContent.replace(
  /<div style=\{\{ overflow: 'hidden', paddingBottom: '20px', flex: 1 \}\}>/,
  `<div style={{ overflow: 'hidden', paddingBottom: '20px', flex: 1, touchAction: 'pan-y' }} onTouchStart={handleTestisTouchStart} onTouchEnd={handleTestisTouchEnd}>`
);

fs.writeFileSync(pagePath, pageContent);
console.log('Added swipe functionality');
