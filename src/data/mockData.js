export const siteConfig = {
  logo: {
    icon: 'IB',
    titleMain: 'INDIAN',
    titleHighlight: 'BODYLINES',
    subtitle: 'FITNESS EQUIPMENT'
  },
  navLinks: [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Categories', path: '/categories' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact', path: '/contact' }
  ],
  hero: {
    subtitle: 'PREMIUM FITNESS EQUIPMENT',
    titleLine1: 'BUILD YOUR',
    titleHighlight: 'STRONGER',
    titleLine2: 'BODY',
    description: 'High-quality gym equipment for commercial gyms, home gyms, outdoor parks and fitness centers.',
    buttons: [
      { text: 'Explore Products', primary: true, link: '/products' },
      { text: 'View Catalog', primary: false, link: '/categories' }
    ]
  },
  featureBar: [
    { id: 'f1', icon: 'ShieldCheck', title: 'Premium Quality', subtitle: 'Durable & Reliable' },
    { id: 'f2', icon: 'CheckCircle', title: 'Wide Range', subtitle: '50+ Equipment Models' },
    { id: 'f3', icon: 'User', title: 'Trusted by Gyms', subtitle: 'Across India' },
    { id: 'f4', icon: 'Truck', title: 'Pan India Delivery', subtitle: 'On Time' },
    { id: 'f5', icon: 'Headphones', title: 'Expert Support', subtitle: 'Always Here' }
  ],
  whyChooseUs: {
    subtitle: 'WHY CHOOSE US',
    titleMain: 'Indian',
    titleHighlight: 'Bodylines',
    subHeading: 'Your Trusted Partner in Fitness Equipment',
    description: 'We manufacture and supply high-quality gym equipment for commercial gyms, home gyms, outdoor parks and more.',
    features: [
      { id: 'w1', icon: 'ShieldCheck', title: 'High Quality Manufacturing', desc: 'Built for long-lasting performance.' },
      { id: 'w2', icon: 'Package', title: 'Complete Gym Solutions', desc: 'From strength to cardio to outdoor.' },
      { id: 'w3', icon: 'MapPin', title: 'Pan India Support', desc: 'Service & assistance wherever you are.' },
      { id: 'w4', icon: 'User', title: 'Custom Solutions', desc: 'For gyms, hotels, institutions & more.' }
    ],
    badgeText: ['STRONGER', 'HEALTHIER', 'HAPPIER']
  },
  exploreGallery: {
    subtitle: 'OUR EQUIPMENT GALLERY',
    titleMain: 'Explore',
    titleHighlight: 'Our Range',
    description: 'From strength machines to cardio equipment, we have everything you need to build the perfect gym.',
    categories: [
      { name: 'Strength Equipment', image: '/gallery-strength.jpg' },
      { name: 'Cardio Equipment', image: '/gallery-cardio.jpg' },
      { name: 'Outdoor Gym', image: '/gallery-outdoor.jpg' },
      { name: 'Accessories', image: '/gallery-accessories.jpg' },
      { name: 'Free Weights', image: '/gallery-accessories.jpg' },
      { name: 'CrossFit Rigs', image: '/gallery-strength.jpg' },
      { name: 'Spin Bikes', image: '/gallery-cardio.jpg' },
      { name: 'Calisthenics', image: '/gallery-outdoor.jpg' }
    ]
  },
  footer: {
    slogan: 'Stronger Bodies. Healthier Tomorrow.',
    contact: [
      { type: 'Phone', value: '+91 9258888252' },
      { type: 'Mail', value: 'indianbodylines@gmail.com' },
      { type: 'MapPin', value: 'India' }
    ],
    social: [
      { name: 'f', link: '#' },
      { name: 'IG', link: '#' },
      { name: 'YT', link: '#' },
      { name: 'in', link: '#' }
    ],
    bottomLinks: ['Privacy Policy', 'Terms & Conditions', 'Shipping', 'Support']
  }
};

export const products = [
  { id: 'IBS-01', name: 'Leg Curl', category: 'Strength', image: '/gym-strength.jpg', price: 125000 },
  { id: 'IBS-02', name: 'Shoulder Press', category: 'Strength', image: '/gym-strength.jpg', price: 135000 },
  { id: 'IBS-03', name: 'Vertical Chest Press', category: 'Strength', image: '/gym-strength.jpg', price: 140000 },
  { id: 'IBS-04', name: 'Seated Rowing', category: 'Strength', image: '/gym-strength.jpg', price: 110000 },
  { id: 'IBS-08', name: 'Lat Pull Down', category: 'Strength', image: '/gym-strength.jpg', price: 120000 },
  { id: 'IBS-09', name: 'Multi Hip', category: 'Strength', image: '/gym-strength.jpg', price: 115000 },
  { id: 'IBS-12', name: 'Smith Machine', category: 'Strength', image: '/gym-strength.jpg', price: 180000 },
  { id: 'IBS-23', name: 'Functional Trainer', category: 'CrossFit', image: '/gym-strength.jpg', price: 210000 },
  { id: 'IBS-53', name: 'Commercial Treadmill', category: 'Cardio', image: '/gym-cardio.jpg', price: 250000 },
  { id: 'IBS-85', name: 'Bouncer Dumbbells Set', category: 'Accessories', image: '/gym-accessories.jpg', price: 45000 },
];

export const categories = [
  { id: 'cat-1', name: 'Strength Equipment', desc: 'Build power & endurance', icon: 'Dumbbell', image: '/gym-strength.jpg' },
  { id: 'cat-2', name: 'Cardio Equipment', desc: 'Stay fit, stay active', icon: 'Dumbbell', image: '/gym-cardio.jpg' },
  { id: 'cat-3', name: 'Home Gym', desc: 'Compact. Efficient. Personal.', icon: 'Dumbbell', image: '/gym-accessories.jpg' },
  { id: 'cat-4', name: 'Outdoor Gym', desc: 'For parks & communities', icon: 'Dumbbell', image: '/gym-outdoor.jpg' },
  { id: 'cat-5', name: 'Gym Accessories', desc: 'Dumbbells, rods, gloves & more', icon: 'Dumbbell', image: '/gym-accessories.jpg' },
  { id: 'cat-6', name: 'CrossFit', desc: 'Functional. Stronger. Fitter.', icon: 'Dumbbell', image: '/gym-strength.jpg' },
  { id: 'cat-7', name: 'Yoga & Pilates', desc: 'Mats, blocks, and core trainers.', icon: 'Dumbbell', image: '/gym-accessories.jpg' },
  { id: 'cat-8', name: 'Recovery', desc: 'Foam rollers and massage tools.', icon: 'Dumbbell', image: '/gym-strength.jpg' },
];

export const testimonials = [
  { id: 1, name: 'Rohit Sharma', role: 'Gym Owner, Delhi', quote: 'Excellent quality equipment and on-time delivery. Highly recommended for commercial gyms.', rating: 5, avatar: '/avatar-rohit.jpg' },
  { id: 2, name: 'Neha Verma', role: 'Fitness Center, Mumbai', quote: 'Best fitness equipment for our training center. Very durable and well designed.', rating: 5, avatar: '/avatar-neha.jpg' },
  { id: 3, name: 'Amit Patel', role: 'Gym Owner, Pune', quote: 'Great customer support and competitive pricing. Will definitely buy again.', rating: 5, avatar: '/avatar-amit.jpg' },
  { id: 4, name: 'Vikas Kumar', role: 'Personal Trainer', quote: 'The machines are incredibly biomechanically correct. My clients love them.', rating: 5, avatar: '/avatar-rohit.jpg' },
  { id: 5, name: 'Priya Singh', role: 'Crossfit Coach', quote: 'Sturdy racks and free weights. They can handle heavy lifting and drops effortlessly.', rating: 4, avatar: '/avatar-neha.jpg' },
  { id: 6, name: 'Suresh Menon', role: 'Hotel Manager, Goa', quote: 'Furnished our hotel gym with Indian Bodylines. Looks premium and works flawlessly.', rating: 5, avatar: '/avatar-amit.jpg' },
  { id: 7, name: 'Kavita Reddy', role: 'Home Gym User', quote: 'Bought a multi-gym setup for home. Installation was prompt and the equipment is commercial grade.', rating: 5, avatar: '/avatar-neha.jpg' },
  { id: 8, name: 'Anil Gupta', role: 'Sports Academy', quote: 'Bulk order was delivered on time. The quality matches top international brands.', rating: 5, avatar: '/avatar-rohit.jpg' },
  { id: 9, name: 'Sanjay Dutt', role: 'Fitness Enthusiast', quote: 'The cardio equipment is top notch. Smooth operation and great console features.', rating: 4, avatar: '/avatar-amit.jpg' },
  { id: 10, name: 'Meera Rajput', role: 'Corporate Wellness', quote: 'We setup a corporate gym and the whole process was seamless with their expert team.', rating: 5, avatar: '/avatar-neha.jpg' },
];

export const blogs = [
  { id: 1, title: 'How to Choose the Right Gym Equipment for Your Space', date: 'May 10, 2025', image: '/blog-1.jpg' },
  { id: 2, title: 'Benefits of Outdoor Gym Equipment', date: 'Apr 28, 2025', image: '/gym-outdoor.jpg' },
  { id: 3, title: 'Cardio Equipment for Better Heart Health', date: 'Apr 15, 2025', image: '/gym-cardio.jpg' },
  { id: 4, title: 'Strength Training Tips for Beginners', date: 'Apr 05, 2025', image: '/gym-strength.jpg' },
];
