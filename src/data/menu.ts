type MenuItem = {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
}

export const menuPreview: MenuItem[] = [
  {
    id: 1,
    name: "Tacos",
    description: "Three soft corn tortillas filled with seasoned grilled chicken, fresh salsa, shredded lettuce, and a drizzle of lime crema.",
    category: "sandwich",
    price: 12800,
    image: "/menu/tacos.jpg"
  },
  {
    id: 4,
    name: "Green Salad",
    description: "Crisp mixed greens topped with cherry tomatoes, cucumbers, red onions, and a tangy vinaigrette.",
    category: "salad",
    price: 12400,
    image: "/salad/green-salad.png"
  },
  {
    id: 9,
    name: "Classic Pizza",
    description: "Traditional pizza with tomato sauce, mozzarella cheese, and fresh basil on a crispy thin crust.",
    category: "pizza",
    price: 16800,
    image: "/pizza/classic-pizza.png"
  },
  {
    id: 13,
    name: "Big Burger Cheese Deluxe",
    description: "Perfect blend of premium beef, melted cheese, and fresh ingredients in our signature burger.",
    category: "burger",
    price: 19500,
    image: "/burger/deluxe-burger.jpeg"
  },
  {
    id: 19,
    name: "Fried Rice",
    description: "Savory fried rice with mixed vegetables and aromatic spices, a satisfying main course.",
    category: "rice",
    price: 14600,
    image: "/rice/fried-rice.png"
  },
  {
    id: 6,
    name: "Pasta Puttanesca",
    description: "Spaghetti in a bold sauce of tomatoes, olives, capers, anchovies, and garlic, finished with fresh basil.",
    category: "pasta",
    price: 18600,
    image: "/pasta/puttanesca-pasta.png"
  }
]

export const menu: MenuItem[] = [
  {
    id: 1,
    name: "Tacos",
    description: "Three soft corn tortillas filled with seasoned grilled chicken, fresh salsa, shredded lettuce, and a drizzle of lime crema.",
    category: "sandwich",
    price: 12800,
    image: "/menu/tacos.jpg"
  },
  {
    id: 2,
    name: "Brik",
    description: "A golden-brown brik pastry filled with spiced tuna, capers, and a touch of harissa.",
    category: "sandwich",
    price: 15200,
    image: "/menu/brik.jpg"
  },
  {
    id: 3,
    name: "Seafood Sandwich",
    description: "Toasted ciabatta stacked with fresh shrimp, calamari, and mussels, finished with a light tomato-garlic aioli.",
    category: "sandwich",
    price: 21100,
    image: "/menu/sandwich.jpg"
  },
  {
    id: 4,
    name: "Green Salad",
    description: "Crisp mixed greens topped with cherry tomatoes, cucumbers, red onions, and a tangy vinaigrette.",
    category: "salad",
    price: 12400,
    image: "/salad/green-salad.png"
  },
  {
    id: 5,
    name: "Broccoli Salad",
    description: "Fresh broccoli florets with crispy bacon, sunflower seeds, and a creamy sweet dressing.",
    category: "salad",
    price: 13200,
    image: "/salad/broccoli-salad.jpg"
  },
  {
    id: 6,
    name: "Pasta Puttanesca",
    description: "Spaghetti in a bold sauce of tomatoes, olives, capers, anchovies, and garlic, finished with fresh basil.",
    category: "pasta",
    price: 18600,
    image: "/pasta/puttanesca-pasta.png"
  },
  {
    id: 7,
    name: "Creamy Mushroom Pasta",
    description: "Fettuccine enveloped in a velvety cream sauce loaded with sautéed wild mushrooms and parmesan.",
    category: "pasta",
    price: 19900,
    image: "/pasta/mushroom-pasta.jpeg"
  },
  {
    id: 8,
    name: "Seafood Pasta",
    description: "Fresh pasta with mixed seafood in a light tomato and white wine sauce with garlic and herbs.",
    category: "pasta",
    price: 22400,
    image: "/pasta/seafood-pasta.jpeg"
  },
  {
    id: 9,
    name: "Classic Pizza",
    description: "Traditional pizza with tomato sauce, mozzarella cheese, and fresh basil on a crispy thin crust.",
    category: "pizza",
    price: 16800,
    image: "/pizza/classic-pizza.png"
  },
  {
    id: 10,
    name: "Cheese Pizza",
    description: "Simple yet delicious pizza topped with rich tomato sauce and melted mozzarella cheese.",
    category: "pizza",
    price: 15800,
    image: "/pizza/cheese-pizza.png"
  },
  {
    id: 11,
    name: "Seafood Pizza",
    description: "Gourmet pizza topped with fresh shrimp, calamari, and mussels on a tomato base with herbs.",
    category: "pizza",
    price: 21800,
    image: "/pizza/seafood-pizza.png"
  },
  {
    id: 12,
    name: "Pepperoni Pizza",
    description: "Classic pizza loaded with spicy pepperoni slices and melted mozzarella on tomato sauce.",
    category: "pizza",
    price: 17800,
    image: "/pizza/pepperoni-pizza.jpeg"
  },
  {
    id: 13,
    name: "Big Burger Cheese Deluxe",
    description: "Perfect blend of premium beef, melted cheese, and fresh ingredients in our signature burger.",
    category: "burger",
    price: 19500,
    image: "/burger/deluxe-burger.jpeg"
  },
  {
    id: 14,
    name: "Cheese Burger",
    description: "Classic beef burger topped with melted cheddar cheese, lettuce, tomato, and our signature sauce.",
    category: "burger",
    price: 17800,
    image: "/burger/cheese-burger.png"
  },
  {
    id: 15,
    name: "Classic Burger",
    description: "Juicy beef patty with lettuce, tomato, onion, and our house sauce on a toasted bun.",
    category: "burger",
    price: 16900,
    image: "/burger/classic-burger.png"
  },
  {
    id: 16,
    name: "Cappuccino",
    description: "Rich espresso topped with steamed milk foam, perfect for ending your meal.",
    category: "dessert",
    price: 8500,
    image: "/menu/coffee.jpg"
  },
  {
    id: 17,
    name: "Soda",
    description: "Refreshing soda with a hint of lime and a touch of sweetness.",
    category: "dessert",
    price: 6500,
    image: "/dessert/soda.jpeg"
  },
  {
    id: 18,
    name: "Apple Pie",
    description: "Crispy pastry with a sweet apple filling, a classic dessert.",
    category: "dessert",
    price: 9500,
    image: "/dessert/apple-pie.png"
  },
  {
    id: 19,
    name: "Fried Rice",
    description: "Savory fried rice with mixed vegetables and aromatic spices, a satisfying main course.",
    category: "rice",
    price: 14600,
    image: "/rice/fried-rice.png"
  },
  {
    id: 20,
    name: "Rice Chicken",
    description: "Delicious chicken cooked in aromatic rice with fresh vegetables and spices.",
    category: "rice",
    price: 16200,
    image: "/rice/rice-chicken.png"
  },
  {
    id: 21,
    name: "Yellow Rice",
    description: "Fragrant aromatic rice with saffron and mixed vegetables, perfectly seasoned.",
    category: "rice",
    price: 14800,
    image: "/rice/aromatic-rice.png"
  },
  {
    id: 22,
    name: "Fruit Salad",
    description: "Fresh seasonal fruits served with a light honey-lime dressing.",
    category: "salad",
    price: 11800,
    image: "/salad/fruit-salad.png"
  },
  {
    id: 23,
    name: "Mechouia Salad",
    description: "Traditional Tunisian roasted vegetable salad with tomatoes, peppers, and olive oil.",
    category: "salad",
    price: 14200,
    image: "/salad/mechouia-salad.jpg"
  },
  {
    id: 24,
    name: "White Sauce Pasta",
    description: "Creamy fettuccine pasta in a rich white sauce with parmesan and herbs.",
    category: "pasta",
    price: 17400,
    image: "/pasta/white-sauce-pasta.png"
  },
  {
    id: 25,
    name: "Hot Sauce Pasta",
    description: "Spicy penne pasta in a fiery tomato sauce with chili flakes and garlic.",
    category: "pasta",
    price: 16800,
    image: "/pasta/hot-sauce-pasta.jpg"
  }
]