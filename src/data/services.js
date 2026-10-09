import { GiGate, GiHammerNails, GiAnvil } from 'react-icons/gi';
import {
  MdOutlineDoorFront, MdOutlineWindow, MdOutlineFence, MdOutlineStairs, MdOutlineChair,
  MdOutlineTableRestaurant, MdOutlineDeck, MdOutlineBalcony, MdOutlineGrid4X4,
} from 'react-icons/md';

const img = (name) => `/images/services/${name}.jpg`;

export const services = [
  { id: 1, title: 'Iron Gates', icon: GiGate, image: img('gates'), alt: 'Custom iron main gate', text: 'Strong and customized gates designed according to the space and requirement.' },
  { id: 2, title: 'Doors', icon: MdOutlineDoorFront, image: img('doors'), alt: 'Custom iron door', text: 'Custom iron doors with practical and decorative designs.' },
  { id: 3, title: 'Windows', icon: MdOutlineWindow, image: img('windows'), alt: 'Iron window with grill', text: 'Iron windows and grills designed for strength and appearance.' },
  { id: 4, title: 'Railings', icon: MdOutlineFence, image: img('railings'), alt: 'Custom iron railing', text: 'Custom railings for balconies, stairs and other spaces.' },
  { id: 5, title: 'Staircases', icon: MdOutlineStairs, image: img('staircases'), alt: 'Iron staircase', text: 'Strong and customized iron staircase solutions.' },
  { id: 6, title: 'Grills', icon: MdOutlineGrid4X4, image: img('grills'), alt: 'Functional and decorative iron grill', text: 'Functional and decorative iron grills.' },
  { id: 7, title: 'Chairs & Seating', icon: MdOutlineChair, image: img('chairs'), alt: 'Custom iron chair', text: 'Custom iron chairs and seating designs.' },
  { id: 8, title: 'Tables', icon: MdOutlineTableRestaurant, image: img('tables'), alt: 'Iron table', text: 'Strong and customized iron tables.' },
  { id: 9, title: 'Swings / Jhule', icon: MdOutlineDeck, image: img('swings'), alt: 'Custom iron swing (jhula)', text: 'Custom iron swings and decorative seating.' },
  { id: 10, title: 'Balcony Railings', icon: MdOutlineBalcony, image: img('railings'), alt: 'Balcony railing in iron', text: 'Custom balcony railing designs.' },
  { id: 11, title: 'Decorative Iron Work', icon: GiHammerNails, image: img('custom'), alt: 'Decorative ironwork', text: 'Decorative and artistic ironwork.' },
  { id: 12, title: 'Custom Fabrication', icon: GiAnvil, image: img('custom'), alt: 'Custom metal fabrication', text: 'Completely customized fabrication based on customer requirements.' },
  { id: 13, title: 'Biliya Farma', icon: GiAnvil, image: '/images/services/biliya-farma.png', alt: 'Steel Biliya Farma construction mould', text: 'Strong steel Biliya Farma moulds for construction work.' },
];
