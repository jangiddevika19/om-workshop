// Add / remove entries freely. `aspect` only shapes the masonry tile
// ("tall" | "wide" | "square" | "standard") — images are never distorted (object-cover).
export const galleryCategories = ['All', 'Gates', 'Doors', 'Windows', 'Railings', 'Staircases', 'Furniture', 'Swings', 'Custom Work'];

const g = (name) => `/images/gallery/${name}.jpg`;

export const gallery = [
  { id: 'gate-01', src: g('gate-01'), category: 'Gates', title: 'Main gate', alt: 'Iron main gate made by OM WORKSHOP', aspect: 'tall' },
  { id: 'railing-01', src: g('railing-01'), category: 'Railings', title: 'Railing', alt: 'Custom iron railing', aspect: 'standard' },
  { id: 'chair-01', src: g('chair-01'), category: 'Furniture', title: 'Iron chair', alt: 'Custom iron chair', aspect: 'square' },
  { id: 'gate-02', src: g('gate-02'), category: 'Gates', title: 'Decorative gate', alt: 'Decorative iron gate design', aspect: 'wide' },
  { id: 'staircase-01', src: g('staircase-01'), category: 'Staircases', title: 'Staircase', alt: 'Iron staircase with railing', aspect: 'tall' },
  { id: 'door-01', src: g('door-01'), category: 'Doors', title: 'Iron door', alt: 'Custom iron door', aspect: 'standard' },
  { id: 'swing-01', src: g('swing-01'), category: 'Swings', title: 'Swing / Jhula', alt: 'Custom iron swing', aspect: 'square' },
  { id: 'window-01', src: g('window-01'), category: 'Windows', title: 'Window grill', alt: 'Iron window grill design', aspect: 'standard' },
  { id: 'custom-01', src: g('custom-01'), category: 'Custom Work', title: 'Custom design', alt: 'Custom metal fabrication', aspect: 'wide' },
];
