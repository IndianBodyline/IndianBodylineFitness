const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'src', 'app', 'page.js');
let content = fs.readFileSync(pagePath, 'utf8');

// Add state for responsive items
content = content.replace(
  /const \[likedProducts, setLikedProducts\] = React\.useState\({}\);/,
  `const [likedProducts, setLikedProducts] = React.useState({});
  const [itemsPerView, setItemsPerView] = React.useState(4);
  const [testisPerView, setTestisPerView] = React.useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
        setTestisPerView(1);
      } else if (window.innerWidth < 992) {
        setItemsPerView(2);
        setTestisPerView(2);
      } else {
        setItemsPerView(4);
        setTestisPerView(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);`
);

// Update max index calculations
content = content.replace(
  /const galleryMaxIndex = Math\.max\(0, galleryItems\.length - 4\);/,
  `const galleryMaxIndex = Math.max(0, galleryItems.length - itemsPerView);`
);
content = content.replace(
  /const testimonialMaxIndex = Math\.max\(0, testimonials\.length - 3\);/,
  `const testimonialMaxIndex = Math.max(0, testimonials.length - testisPerView);`
);

// Replace gallery flex and transform
content = content.replace(
  /transform: \`translateX\\(calc\\(-\\\${galleryIndex} \* \\(25% \+ 3\.75px\\)\\)\\)\`/g,
  `transform: \`translateX(calc(-\${galleryIndex} * (100% / \${itemsPerView} + 15px * (\${itemsPerView} - 1) / \${itemsPerView})))\``
);
content = content.replace(
  /flex: '0 0 calc\\(25% - 11\.25px\\)'/g,
  `flex: \`0 0 calc(100% / \${itemsPerView} - 15px * (\${itemsPerView} - 1) / \${itemsPerView})\``
);

// Replace testimonial flex and transform
content = content.replace(
  /transform: \`translateX\\(calc\\(-\\\${testimonialIndex} \* \\(33\.3333% \+ 10px\\)\\)\\)\`/g,
  `transform: \`translateX(calc(-\${testimonialIndex} * (100% / \${testisPerView} + 30px * (\${testisPerView} - 1) / \${testisPerView})))\``
);
content = content.replace(
  /flex: '0 0 calc\\(33\.3333% - 20px\\)'/g,
  `flex: \`0 0 calc(100% / \${testisPerView} - 30px * (\${testisPerView} - 1) / \${testisPerView})\``
);

fs.writeFileSync(pagePath, content);
console.log('page.js updated');
