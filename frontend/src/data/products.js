export const CATEGORIES = [
  { slug: 'rings', label: 'Rings', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=500&auto=format&fit=crop', desc: 'Solitaires, bands and statement rings for everyday and engagement.' },
  { slug: 'earrings', label: 'Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=500&auto=format&fit=crop', desc: 'Studs, jhumkas and drops crafted in gold and diamond.' },
  { slug: 'necklaces', label: 'Necklaces', img: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=500&auto=format&fit=crop', desc: 'Statement and layered necklaces for every occasion.' },
  { slug: 'bangles', label: 'Bangles', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=500&auto=format&fit=crop', desc: 'Traditional and modern bangles in 22K gold.' },
  { slug: 'bracelets', label: 'Bracelets', img: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=500&auto=format&fit=crop', desc: 'Everyday and occasion bracelets, gold and diamond.' },
  { slug: 'pendants', label: 'Pendants', img: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop', desc: 'Delicate pendants to layer or wear alone.' },
  { slug: 'mangalsutra', label: 'Mangalsutra', img: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=500&auto=format&fit=crop', desc: 'Traditional mangalsutra designs in black beads and gold.' },
  { slug: 'chains', label: 'Chains', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=500&auto=format&fit=crop', desc: 'Classic gold chains for men and women.' },
  { slug: 'bridal-jewellery', label: 'Bridal Jewellery', img: 'https://images.unsplash.com/photo-1587467512961-120760940315?q=80&w=500&auto=format&fit=crop', desc: 'Complete bridal sets for the big day.' },
  { slug: 'diamond-jewellery', label: 'Diamond Jewellery', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=500&auto=format&fit=crop', desc: 'Certified diamonds set in fine craftsmanship.' },
  { slug: 'gold-jewellery', label: 'Gold Jewellery', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=500&auto=format&fit=crop', desc: 'Hallmarked gold jewellery across every category.' },
  { slug: 'kids-jewellery', label: 'Kids Jewellery', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=500&auto=format&fit=crop', desc: 'Lightweight, safe designs made for little ones.' },
];

export const PRODUCTS = [
  {
    id: 'royal-gold-necklace',
    name: 'Royal Gold Necklace',
    category: 'necklaces',
    isNew: true,
    purity: '22K Gold',
    weight: '28.5 g',
    price: 185000,
    img: 'https://i.pinimg.com/1200x/06/64/8c/06648c9aa73f3737b39e386113a56877.jpg',
    description: 'A statement necklace with intricate temple-style motifs, handcrafted for weddings and festive occasions. Every link is finished and polished by hand.',
  },
  {
    id: 'diamond-stud-earrings',
    name: 'Diamond Stud Earrings',
    category: 'earrings',
    isNew: true,
    purity: '18K Gold',
    weight: '6.2 g',
    price: 78500,
    img: 'https://i.pinimg.com/736x/b1/b0/70/b1b07019d1aafa0a054b4c6205dc884f.jpg',
    description: 'Classic solitaire studs set with certified diamonds in a secure four-prong setting. Light enough for everyday wear.',
  },
  {
    id: 'traditional-gold-bangle',
    name: 'Traditional Gold Bangle',
    category: 'bangles',
    isNew: true,
    purity: '22K Gold',
    weight: '32.4 g',
    price: 210000,
    img: 'https://i.pinimg.com/1200x/7e/bb/50/7ebb5060f2fa91b661e95175b759dc44.jpg',
    description: 'A pair-ready bangle with hand-engraved traditional patterns, finished in high-polish 22K gold.',
  },
  {
    id: 'elegant-pendant',
    name: 'Elegant Pendant',
    category: 'pendants',
    isNew: true,
    purity: '18K Gold',
    weight: '4.8 g',
    price: 56000,
    img: 'https://i.pinimg.com/736x/f7/b7/65/f7b765806839f9764cc17a5e03852490.jpg',
    description: 'A delicate floral pendant set with sparkling stones, designed to be worn on its own fine chain.',
  },
  {
    id: 'classic-mangalsutra',
    name: 'Classic Mangalsutra',
    category: 'mangalsutra',
    isNew: true,
    purity: '22K Gold',
    weight: '12.6 g',
    price: 92000,
    img: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=700&auto=format&fit=crop',
    description: 'A traditional mangalsutra with black bead strands and a gold vati pendant, finished with a matching chain.',
  },
  {
    id: 'solitaire-diamond-ring',
    name: 'Solitaire Diamond Ring',
    category: 'rings',
    isNew: true,
    purity: '18K Gold',
    weight: '5.1 g',
    price: 125000,
    img: 'https://i.pinimg.com/736x/d8/9a/d1/d89ad12d8d64ea54e7ec0748d9d4b4ae.jpg',
    description: 'A timeless solitaire ring with a certified centre diamond, set in a sleek 18K gold band.',
  },
  {
    id: 'layered-gold-chain',
    name: 'Layered Gold Chain',
    category: 'chains',
    isNew: false,
    purity: '22K Gold',
    weight: '18.2 g',
    price: 148000,
    img: 'https://i.pinimg.com/736x/61/82/e5/6182e551d71b6dfb96a1e95d8c4a7593.jpg',
    description: 'A versatile double-layer chain that can be worn alone or paired with your favourite pendant.',
  },
  {
    id: 'bridal-choker-set',
    name: 'Bridal Choker Set',
    category: 'bridal-jewellery',
    isNew: false,
    purity: '22K Gold',
    weight: '64.0 g',
    price: 385000,
    img: 'https://i.pinimg.com/736x/00/9e/d2/009ed273ae5a67eae00f6e471ad2172c.jpg',
    description: 'A complete bridal choker set with matching earrings, studded with kundan and pearl work.',
  },
  {
    id: 'diamond-tennis-bracelet',
    name: 'Diamond Tennis Bracelet',
    category: 'bracelets',
    isNew: false,
    purity: '18K Gold',
    weight: '9.4 g',
    price: 165000,
    img: 'https://i.pinimg.com/1200x/59/b7/20/59b72002b3d3fa4b9982c262a88bfa53.jpg',
    description: 'A single row of certified diamonds set in a secure gold link bracelet, elegant enough for daily wear.',
  },
  {
    id: 'kids-gold-bracelet',
    name: 'Kids Gold Bracelet',
    category: 'kids-jewellery',
    isNew: false,
    purity: '18K Gold',
    weight: '3.1 g',
    price: 32000,
    img: 'https://i.pinimg.com/736x/fc/b5/f3/fcb5f35163b16711b667dac1014dfffc.jpg',
    description: 'A lightweight, smooth-finished bracelet made safe and comfortable for little wrists.',
  },
  {
    id: 'diamond-halo-pendant',
    name: 'Diamond Halo Pendant',
    category: 'diamond-jewellery',
    isNew: false,
    purity: '18K Gold',
    weight: '3.6 g',
    price: 68000,
    img: 'https://i.pinimg.com/736x/be/76/4e/be764e143f356e975ba1b5fa6aef8aa7.jpg',
    description: 'A single diamond encircled by a sparkling halo, set in a delicate 18K gold pendant.',
  },
  {
    id: 'gold-jhumka-earrings',
    name: 'Gold Jhumka Earrings',
    category: 'gold-jewellery',
    isNew: false,
    purity: '22K Gold',
    weight: '14.8 g',
    price: 98000,
    img: 'https://i.pinimg.com/1200x/a2/ee/32/a2ee3279ea83d512daca96d0479a7161.jpg',
    description: 'Traditional bell-shaped jhumkas with fine filigree work, a festive favourite.',
  },
  
];

export function getProductsByCategory(slug) {
  return PRODUCTS.filter((p) => p.category === slug);
}

export function getCategory(slug) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function formatPrice(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}
