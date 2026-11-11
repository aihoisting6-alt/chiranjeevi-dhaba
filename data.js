// ============================================================
//  CHIRANJEEVI DHABA – SITE DATA
//  To add a NEW BRANCH: copy one branch object, change the values.
//  To change a PRICE: edit the number in FULL_MENU.
// ============================================================

window.BRANCHES = [
  {
    id: "hyderabad",
    city: "Hyderabad", cityTe: "హైదరాబాద్", area: "Nallagandla",
    status: "open", badge: "Branch 01 · Since 9 April 2025",
    photo: "assets/signboard.png",
    address: "Plot No-5/B, HIG, Nallagandla Residential Complex, Nallagandla Village, Serilingampalle (M), Hyderabad, Telangana 500046",
    phone: "099129 21234", tel: "+919912921234", whatsapp: "919912921234",
    hours: "Evenings from 6:30 pm",
    price: "₹200–400 per person",
    rating: "4.1★", reviews: "2,876 Google reviews",
    features: ["Dine-in", "Takeaway", "Delivery", "Live pulka counter", "Firewood chulhas"],
    lat: 17.467633, lng: 78.3075659,
    maps: "https://www.google.com/maps/search/?api=1&query=Chiranjeevi+Dhaba+Nallagandla+Hyderabad"
  },
  {
    id: "bhimavaram",
    city: "Bhimavaram", cityTe: "భీమవరం", area: "West Godavari",
    status: "open", badge: "Branch 02 · Grand Opening 11 Nov",
    photo: "assets/bhimavaram.png",
    address: "Bhimavaram, West Godavari, Andhra Pradesh. Exact address is coming soon on Google Maps. DM @chiranjeevi_dhaba on Instagram for directions.",
    phone: "", tel: "", whatsapp: "",
    hours: "Now open",
    price: "Same Mega taste, bigger kitchen",
    rating: "NEW", reviews: "Just opened",
    features: ["Bigger woodfire kitchen", "Outdoor seating", "AC seating", "New menu additions"],
    lat: 16.5449, lng: 81.5212,
    maps: "https://www.google.com/maps/search/?api=1&query=Chiranjeevi+Dhaba+Bhimavaram"
  },
  {
    id: "next",
    city: "Your City?", cityTe: "త్వరలో", area: "Coming soon",
    status: "soon", badge: "Branch 03 · Loading…",
    photo: "assets/firewood.png",
    address: "The Mega family keeps growing. Follow @chiranjeevi_dhaba for the next big announcement!",
    phone: "", tel: "", whatsapp: "",
    hours: "Stay tuned", price: "—", rating: "★", reviews: "Coming soon",
    features: ["Woodfire", "Same Mega taste"],
    maps: "https://www.instagram.com/chiranjeevi_dhaba/"
  }
];

// Signature dishes (photos are from the dhaba's own Instagram posts)
window.SIGNATURE = [
  { name: "Ramba Chicken", te: "రంభ చికెన్", price: 325, tag: "🔥 #1 Most Talked", desc: "Spicy tomato gravy topped with an omelette. The dish everyone comes back for.", icon: "🍗" },
  { name: "Sri Devi Chicken", te: "శ్రీదేవి చికెన్", price: 345, tag: "Fan Favourite", desc: "Chicken in a creamy palak gravy. Rich, smooth and addictive.", icon: "🍛" },
  { name: "Supreme Chicken Biryani", te: "సుప్రీమ్ బిర్యానీ", price: 350, tag: "Next Level", img: "assets/supreme-biryani.png", desc: "Loaded with a whole leg piece and eggs. Biryani lovers, miss avvakandi!" },
  { name: "SP Chicken Biryani", te: "SP బిర్యానీ", price: 335, tag: "Dum Style", img: "assets/dum-biryani.png", desc: "Fragrant basmati and marinated chicken, slow-cooked dum style." },
  { name: "RR Chicken", te: "RR చికెన్", price: 315, tag: "Popular", desc: "The signature dhaba starter. Top pick on Google reviews.", icon: "🌶️" },
  { name: "Butter Garlic Prawns", te: "బటర్ గార్లిక్ ప్రాన్స్", price: 360, tag: "Now Peeled!", desc: "Buttery and garlicky. Peeled now, because you asked.", icon: "🍤" },
  { name: "Shahi Kaju", te: "షాహీ కాజు", price: 305, tag: "Veg Mass", img: "assets/shahi-kaju.png", desc: "Asli dhaba flavour with a shahi andaaz: cashews in a royal gravy." },
  { name: "Palak Paneer", te: "పాలక్ పనీర్", price: 210, tag: "Firewood", img: "assets/palak-paneer.png", desc: "Soft paneer in spinach with a rustic firewood aroma." },
  { name: "Kaju Tomato", te: "కాజు టొమాటో", price: 275, tag: "Veg Special", img: "assets/kaju-tomato.png", desc: "Cashews, fresh tomatoes and spices. Perfect with hot pulka." },
  { name: "Talaas", te: "తలాస్", price: 125, tag: "Viral Dessert", desc: "Our creamy crowd-puller dessert, inspired by Goan serradura.", icon: "🍮" }
];

// Mugguru Monagallu – the 3 star starters (Feb 2026 launch)
window.MUGGURU = [
  { name: "Chicken Roast (Bone)", price: 315 },
  { name: "Chicken 85", price: 315 },
  { name: "Chicken Lollipop", price: 345 }
];

// Full menu (from the in-store menu board, Apr 2026). All prices are in ₹ and include 5% GST.
// star: true = highlighted on the menu board
window.FULL_MENU = [
  { cat: "Starters (Non-Veg)", te: "స్టార్టర్స్", type: "nv", items: [
    ["RR Egg",190],["Egg 65",190],["Chicken 65",315],["Chicken 85",315],["RR Chicken",315,1],["Chicken Lollipop",345,1],
    ["Chicken Manchuria",305],["Chicken Roast (Bone)",315],["Butter Garlic Prawns",360,1],["Chilli Chicken",305],["Chilli Egg",190],["Pepper Chicken",315]]},
  { cat: "Curries (Non-Veg)", te: "కర్రీస్", type: "nv", items: [
    ["Butter Chicken",285],["Egg Afghani",230],["Egg Burji",135],["Egg Curry",135],["Egg Kheema",180],["Egg Masala",210],
    ["Egg Mughalai",230],["Egg Tadka",250],["Egg Tomato",180],["Ginger Chicken",260],["Hyderabadi Chicken",305],["Kadai Chicken",305],
    ["Kaju Chicken",370],["Methi Chicken",305],["Mughalai Chicken",305],["Punjabi Chicken",305],["Ramba Chicken",325,1],["Sri Devi Chicken",345,1],
    ["Telangana Chicken (Bone)",260]]},
  { cat: "Rice (Non-Veg)", te: "బిర్యానీ & రైస్", type: "nv", items: [
    ["Chicken Fried Rice",230],["Egg Fried Rice",190,1],["Ranga Fry Piece Biryani",315],["Ranga Biryani (Chicken)",295,1],
    ["SP Chicken Fried Rice",275,1],["SP Chicken Biryani",335],["Supreme Chicken Biryani",350,1]]},
  { cat: "Starters (Veg)", te: "వెజ్ స్టార్టర్స్", type: "v", items: [
    ["Chilli Paneer",210],["Paneer 65",210],["RR Paneer",240,1]]},
  { cat: "Curries (Veg)", te: "వెజ్ కర్రీస్", type: "v", items: [
    ["Dal Fry",135],["Dal Makhani",170],["Dal Tadka",170],["Paneer Butter Masala",240],["Kaju Masala",305],["Kaju Paneer",295],
    ["Kaju Tomato",275,1],["Methi Chaman",275,1],["Palak Curry",160],["Palak Paneer",210],["Kadai Paneer",250],["Shahi Kaju",305],["Veg Radhika",295,1]]},
  { cat: "Rice (Veg)", te: "వెజ్ రైస్", type: "v", items: [
    ["Curd Rice",95],["Kaju Fried Rice",210],["SP Veg Fried Rice",275],["Veg Fried Rice",180],["Zeera Rice",200],["Supreme Veg Biryani",300,1]]},
  { cat: "Pulka & Desserts", te: "పుల్కా & స్వీట్స్", type: "v", items: [
    ["Pulka (each, fresh off the fire)",12],["Talaas",125],["Sweet Lassi",85]]}
];

window.TAGLINES = [
  "మెగా అభిమానం · మెగా రుచి",
  "Boss Level Taste",
  "కట్టెల పొయ్యి మీద వండిన అసలైన రుచి",
  "Mass Ante Maa Dhaba",
  "Mugguru Monagallu Are Here",
  "లో మాస్ తో పాటు క్లాస్ కూడా",
  "Woodfire · Tradition · Mega Vibes"
];

// Customer quotes, paraphrased from public Google reviews of the Nallagandla branch
window.REVIEWS = [
  ["Sai Kiran", "Local Guide", "Everything we ordered was good. If you love spice, go for the Ramba Chicken. I liked the Sri Devi Chicken even more."],
  ["Adi Pen", "Local Guide", "Tasty, hygienic dhaba food and a simple menu. Try the RR, Ramba and Sridevi chicken. Good portions, quick service, affordable."],
  ["Shilpa Srivastava", "Local Guide", "Loved the starters, and even the roti is really good. You can watch the rotis being made fresh right in front of you!"],
  ["Food blogger", "Instagram", "Highway-style rustic dhaba flavours in a family-friendly space, with wood-fired mud battis doing all the cooking."]
];

// ===== WEBSITE CREDIT (shown in the footer only when name is filled) =====
window.DEVELOPER = { name: "", link: "" };   // e.g. { name: "Your Name", link: "https://wa.me/91XXXXXXXXXX" }
