// src/data/menuData.js

export const categories = [
  { id: 1, name: "Starters", emoji: "🥗", color: "#FF6B6B", bg: "#FFF5F5" },
  { id: 2, name: "Main Course", emoji: "🍛", color: "#F7931E", bg: "#FFF9F0" },
  { id: 3, name: "Breads", emoji: "🫓", color: "#F4C430", bg: "#FFFDF0" },
  { id: 4, name: "Desserts", emoji: "🍰", color: "#C77DFF", bg: "#FAF5FF" },
  { id: 5, name: "Beverages", emoji: "🥤", color: "#48CAE4", bg: "#F0FBFF" },
  { id: 6, name: "Snacks", emoji: "🍿", color: "#52B788", bg: "#F0FBF4" },
];

export const dishes = [
  // Starters
  {
    id: 101, categoryId: 1, name: "Paneer Tikka", price: 280, rating: 4.8, isVeg: true,
    description: "Marinated cottage cheese cubes grilled to perfection with spices.",
    image: "🧀",
    ingredients: [
      { name: "Paneer", qty: "250g", note: "Fresh cottage cheese" },
      { name: "Yogurt", qty: "100ml", note: "For marinade" },
      { name: "Red Chili Powder", qty: "2 tsp", note: "Kashmiri for color" },
      { name: "Garam Masala", qty: "1 tsp", note: "Freshly ground" },
      { name: "Lemon Juice", qty: "2 tbsp", note: "For tanginess" },
      { name: "Bell Peppers", qty: "2 medium", note: "Any color" },
    ],
    tags: ["Grilled", "Spicy", "Popular"],
  },
  {
    id: 102, categoryId: 1, name: "Veg Spring Rolls", price: 180, rating: 4.5, isVeg: true,
    description: "Crispy rolls stuffed with fresh vegetables and noodles.",
    image: "🥢",
    ingredients: [
      { name: "Spring Roll Sheets", qty: "12 pcs", note: "Thin pastry sheets" },
      { name: "Cabbage", qty: "1 cup", note: "Shredded" },
      { name: "Carrots", qty: "½ cup", note: "Julienned" },
      { name: "Noodles", qty: "½ cup", note: "Cooked, glass noodles" },
      { name: "Soy Sauce", qty: "2 tbsp", note: "For flavor" },
      { name: "Garlic", qty: "4 cloves", note: "Minced" },
    ],
    tags: ["Crispy", "Chinese", "Kids' Favorite"],
  },
  {
    id: 103, categoryId: 1, name: "Chicken Seekh Kebab", price: 320, rating: 4.9, isVeg: false,
    description: "Minced chicken kebabs with aromatic herbs on skewers.",
    image: "🍢",
    ingredients: [
      { name: "Chicken Mince", qty: "500g", note: "Finely minced" },
      { name: "Onion", qty: "1 large", note: "Finely chopped" },
      { name: "Green Chili", qty: "4 pcs", note: "Finely chopped" },
      { name: "Coriander Leaves", qty: "½ cup", note: "Fresh" },
      { name: "Cumin Powder", qty: "1 tsp", note: "Roasted" },
      { name: "Egg", qty: "1 pc", note: "Binding agent" },
    ],
    tags: ["Grilled", "Non-Veg", "Party Hit"],
  },
  {
    id: 104, categoryId: 1, name: "Mushroom Galawat", price: 240, rating: 4.6, isVeg: true,
    description: "Soft mushroom patties with old Delhi-style spices.",
    image: "🍄",
    ingredients: [
      { name: "Mushrooms", qty: "300g", note: "Button mushrooms" },
      { name: "Fried Onion", qty: "½ cup", note: "Crispy" },
      { name: "Poppy Seeds", qty: "2 tbsp", note: "Soaked" },
      { name: "Cream", qty: "3 tbsp", note: "Fresh" },
      { name: "Rose Water", qty: "1 tsp", note: "Aromatic touch" },
    ],
    tags: ["Soft", "Mughlai", "Unique"],
  },

  // Main Course
  {
    id: 201, categoryId: 2, name: "Butter Chicken", price: 380, rating: 4.9, isVeg: false,
    description: "Creamy tomato-based curry with tender chicken pieces.",
    image: "🍗",
    ingredients: [
      { name: "Chicken", qty: "600g", note: "Boneless, cubed" },
      { name: "Tomatoes", qty: "4 large", note: "Pureed" },
      { name: "Butter", qty: "4 tbsp", note: "Unsalted" },
      { name: "Cream", qty: "½ cup", note: "Heavy whipping" },
      { name: "Kasuri Methi", qty: "2 tsp", note: "Dried fenugreek" },
      { name: "Ginger-Garlic Paste", qty: "2 tbsp", note: "Fresh" },
    ],
    tags: ["Creamy", "Mild", "Bestseller"],
  },
  {
    id: 202, categoryId: 2, name: "Dal Makhani", price: 260, rating: 4.8, isVeg: true,
    description: "Slow-cooked black lentils in rich buttery tomato gravy.",
    image: "🫕",
    ingredients: [
      { name: "Black Lentils (Urad)", qty: "1 cup", note: "Soaked overnight" },
      { name: "Rajma", qty: "¼ cup", note: "Kidney beans" },
      { name: "Butter", qty: "3 tbsp", note: "Generous amount" },
      { name: "Cream", qty: "¼ cup", note: "For richness" },
      { name: "Tomato Puree", qty: "½ cup", note: "Thick" },
      { name: "Cumin Seeds", qty: "1 tsp", note: "For tempering" },
    ],
    tags: ["Rich", "Veg", "Must Have"],
  },
  {
    id: 203, categoryId: 2, name: "Hyderabadi Biryani", price: 420, rating: 5.0, isVeg: false,
    description: "Aromatic basmati rice layered with spiced meat, saffron & fried onions.",
    image: "🍚",
    ingredients: [
      { name: "Basmati Rice", qty: "2 cups", note: "Aged, long grain" },
      { name: "Mutton/Chicken", qty: "500g", note: "On bone" },
      { name: "Saffron", qty: "1 pinch", note: "Soaked in warm milk" },
      { name: "Fried Onions", qty: "1 cup", note: "Birista" },
      { name: "Mint Leaves", qty: "½ cup", note: "Fresh" },
      { name: "Whole Spices", qty: "as needed", note: "Bay, cardamom, clove" },
    ],
    tags: ["Dum-cooked", "Signature", "Hyderabadi Special"],
  },
  {
    id: 204, categoryId: 2, name: "Palak Paneer", price: 290, rating: 4.7, isVeg: true,
    description: "Cottage cheese in velvety spinach gravy with mild spices.",
    image: "🥬",
    ingredients: [
      { name: "Spinach", qty: "500g", note: "Blanched and pureed" },
      { name: "Paneer", qty: "200g", note: "Cubed" },
      { name: "Onion", qty: "2 medium", note: "Finely chopped" },
      { name: "Garlic", qty: "5 cloves", note: "Minced" },
      { name: "Cream", qty: "2 tbsp", note: "Optional" },
    ],
    tags: ["Healthy", "Green", "Classic"],
  },

  // Breads
  {
    id: 301, categoryId: 3, name: "Butter Naan", price: 60, rating: 4.8, isVeg: true,
    description: "Soft leavened bread baked in tandoor, brushed with butter.",
    image: "🫓",
    ingredients: [
      { name: "All-Purpose Flour", qty: "2 cups", note: "Maida" },
      { name: "Yogurt", qty: "½ cup", note: "For softness" },
      { name: "Yeast", qty: "1 tsp", note: "Instant" },
      { name: "Butter", qty: "3 tbsp", note: "For brushing" },
      { name: "Sugar", qty: "1 tsp", note: "For yeast activation" },
    ],
    tags: ["Soft", "Tandoor", "Classic"],
  },
  {
    id: 302, categoryId: 3, name: "Garlic Kulcha", price: 70, rating: 4.7, isVeg: true,
    description: "Fluffy kulcha stuffed with garlic and herbs.",
    image: "🧄",
    ingredients: [
      { name: "Refined Flour", qty: "2 cups", note: "Sifted" },
      { name: "Garlic", qty: "8 cloves", note: "Finely chopped" },
      { name: "Coriander", qty: "¼ cup", note: "Fresh, chopped" },
      { name: "Baking Powder", qty: "1 tsp", note: "" },
      { name: "Butter", qty: "2 tbsp", note: "For topping" },
    ],
    tags: ["Aromatic", "Fluffy", "Favourite"],
  },

  // Desserts
  {
    id: 401, categoryId: 4, name: "Gulab Jamun", price: 120, rating: 4.9, isVeg: true,
    description: "Soft milk-solid dumplings soaked in rose-flavored sugar syrup.",
    image: "🟤",
    ingredients: [
      { name: "Khoya (Mawa)", qty: "200g", note: "Reduced milk solids" },
      { name: "Maida", qty: "2 tbsp", note: "Binding" },
      { name: "Cardamom Powder", qty: "½ tsp", note: "Aromatic" },
      { name: "Sugar", qty: "1½ cups", note: "For syrup" },
      { name: "Rose Water", qty: "1 tsp", note: "For flavor" },
      { name: "Saffron", qty: "1 pinch", note: "In syrup" },
    ],
    tags: ["Sweet", "Traditional", "All-time Fav"],
  },
  {
    id: 402, categoryId: 4, name: "Double Ka Meetha", price: 140, rating: 4.8, isVeg: true,
    description: "Hyderabadi bread pudding with dry fruits and saffron milk.",
    image: "🍮",
    ingredients: [
      { name: "Bread Slices", qty: "8 pcs", note: "Deep fried golden" },
      { name: "Milk", qty: "2 cups", note: "Full fat" },
      { name: "Sugar", qty: "½ cup", note: "" },
      { name: "Saffron", qty: "1 pinch", note: "Soaked" },
      { name: "Mixed Dry Fruits", qty: "¼ cup", note: "Almonds, pistachios, raisins" },
      { name: "Ghee", qty: "3 tbsp", note: "For frying" },
    ],
    tags: ["Hyderabadi", "Rich", "Signature"],
  },

  // Beverages
  {
    id: 501, categoryId: 5, name: "Mango Lassi", price: 90, rating: 4.9, isVeg: true,
    description: "Chilled yogurt smoothie blended with Alphonso mangoes.",
    image: "🥭",
    ingredients: [
      { name: "Mango Pulp", qty: "1 cup", note: "Alphonso preferred" },
      { name: "Yogurt", qty: "1 cup", note: "Chilled" },
      { name: "Sugar", qty: "2 tbsp", note: "To taste" },
      { name: "Cardamom", qty: "¼ tsp", note: "Optional" },
      { name: "Ice Cubes", qty: "6 pcs", note: "" },
    ],
    tags: ["Chilled", "Fruity", "Summer Special"],
  },
  {
    id: 502, categoryId: 5, name: "Masala Chaas", price: 60, rating: 4.6, isVeg: true,
    description: "Spiced thin buttermilk with roasted cumin and fresh herbs.",
    image: "🥛",
    ingredients: [
      { name: "Yogurt", qty: "1 cup", note: "Fresh" },
      { name: "Water", qty: "2 cups", note: "Cold" },
      { name: "Cumin Seeds", qty: "1 tsp", note: "Roasted and crushed" },
      { name: "Green Chili", qty: "1 pc", note: "Finely chopped" },
      { name: "Coriander", qty: "2 tbsp", note: "Fresh" },
      { name: "Black Salt", qty: "½ tsp", note: "Kala Namak" },
    ],
    tags: ["Cooling", "Digestive", "Refreshing"],
  },

  // Snacks
  {
    id: 601, categoryId: 6, name: "Samosa (Mini)", price: 80, rating: 4.7, isVeg: true,
    description: "Crispy pastry pockets stuffed with spiced potato and peas.",
    image: "🔺",
    ingredients: [
      { name: "All-Purpose Flour", qty: "1 cup", note: "For pastry shell" },
      { name: "Potatoes", qty: "3 medium", note: "Boiled and mashed" },
      { name: "Green Peas", qty: "½ cup", note: "Boiled" },
      { name: "Coriander Powder", qty: "1 tsp", note: "" },
      { name: "Amchur Powder", qty: "½ tsp", note: "Dry mango powder" },
      { name: "Oil", qty: "for frying", note: "Deep fry" },
    ],
    tags: ["Crispy", "Potato", "All-time Fav"],
  },
  {
    id: 602, categoryId: 6, name: "Cheese Corn Patties", price: 150, rating: 4.8, isVeg: true,
    description: "Golden pan-fried patties loaded with corn and melted cheese.",
    image: "🌽",
    ingredients: [
      { name: "Sweet Corn", qty: "1 cup", note: "Boiled" },
      { name: "Cheese", qty: "½ cup", note: "Grated, cheddar" },
      { name: "Mashed Potato", qty: "2 medium", note: "Binding" },
      { name: "Mixed Herbs", qty: "1 tsp", note: "Dried oregano, basil" },
      { name: "Black Pepper", qty: "½ tsp", note: "" },
      { name: "Breadcrumbs", qty: "½ cup", note: "For coating" },
    ],
    tags: ["Cheesy", "Kids' Fav", "Pan-fried"],
  },
];
