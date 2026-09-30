const fs = require('fs');

const publicDir = 'public';
const mockDataFile = 'src/data/mockData.js';

// Get all files starting with "Screenshot"
const files = fs.readdirSync(publicDir)
  .filter(f => f.startsWith('Screenshot') && f.endsWith('.png'))
  .sort();

let mockData = fs.readFileSync(mockDataFile, 'utf8');

// Find where the products array ends
const pStart = mockData.indexOf('export const products = [');
const pEnd = mockData.indexOf('];', pStart);

// Determine the next ID (roughly based on length or just hardcode starting from 176)
let nextId = 176;
let newProducts = '';

files.forEach((file, idx) => {
  newProducts += `  { id: 'IBS-${nextId++}', name: 'New Equipment ${idx + 1}', category: 'Strength Equipment', image: '/${file}', price: 95000, specs: ['2x4 Rectangle Pipe', '12 Gauge Pipe', 'Powder Coating Paint'] },\n`;
});

// Splice the new products into the file just before the ending `];`
const newMockData = mockData.slice(0, pEnd) + newProducts + mockData.slice(pEnd);
fs.writeFileSync(mockDataFile, newMockData);

console.log('Added ' + files.length + ' products using screenshot images.');
