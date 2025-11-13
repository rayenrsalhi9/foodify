import brik from "/menu/brik.jpg"
import sandwich from "/menu/sandwich.jpg"
import tacos from "/menu/tacos.jpg"
import salad from "/menu/salad.jpg"
import puttanesca from "/menu/puttanesca.jpg"
import pastaMushroom from "/menu/pasta-mushroom.jpg"

import salad1 from '/decoration/salad.png'
import burger1 from '/food/burger.png'
import pasta from '/food/pasta.png'
import pizza from '/food/pizza.png'
import friedRice from '/food/rice.png'
import sandwich1 from '/food/sandwich.png'

import broccoliSalad from '/menu/salad-1.jpg'
import pastaSeaFood from "/menu/pasta-sea-food.jpg"
import cappuccino from "/menu/coffee.jpg"

import burgerDeluxe from '/offers/big-burger.png'
import cheeseBurger from '/offers/offer-burger.png'
import veggiesPizza from '/offers/offer-pizza.png'

type MenuItem = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Tacos",
    description: "Three soft corn tortillas filled with seasoned grilled chicken, fresh salsa, shredded lettuce, and a drizzle of lime crema.",
    price: 12800,
    image: tacos,
  },
  {
    id: 2,
    name: "Brik",
    description: "A golden-brown brik pastry filled with spiced tuna, capers, and a touch of harissa.",
    price: 15200,
    image: brik,
  },
  {
    id: 3,
    name: "Seafood Sandwich",
    description: "Toasted ciabatta stacked with fresh shrimp, calamari, and mussels, finished with a light tomato-garlic aioli.",
    price: 21100,
    image: sandwich,
  },
  {
    id: 4,
    name: "Garden Salad",
    description: "Crisp mixed greens topped with cherry tomatoes, cucumbers, red onions, and a tangy vinaigrette.",
    price: 12400,
    image: salad,
  },
  {
    id: 5,
    name: "Pasta Puttanesca",
    description: "Spaghetti in a bold sauce of tomatoes, olives, capers, anchovies, and garlic, finished with fresh basil.",
    price: 18600,
    image: puttanesca,
  },
  {
    id: 6,
    name: "Creamy Mushroom Pasta",
    description: "Fettuccine enveloped in a velvety cream sauce loaded with sautéed wild mushrooms and a sprinkle of parmesan.",
    price: 19900,
    image: pastaMushroom,
  },
]

export const menu = [
  {
    id: 1,
    name: "Tacos",
    description: "Three soft corn tortillas filled with seasoned grilled chicken, fresh salsa, shredded lettuce, and a drizzle of lime crema.",
    category: "sandwich",
    price: 12800,
    image: tacos
  },
  {
    id: 2,
    name: "Brik",
    description: "A golden-brown brik pastry filled with spiced tuna, capers, and a touch of harissa.",
    category: "sandwich",
    price: 15200,
    image: brik
  },
  {
    id: 3,
    name: "Seafood Sandwich",
    description: "Toasted ciabatta stacked with fresh shrimp, calamari, and mussels, finished with a light tomato-garlic aioli.",
    category: "sandwich",
    price: 21100,
    image: sandwich
  },
  {
    id: 4,
    name: "Garden Salad",
    description: "Crisp mixed greens topped with cherry tomatoes, cucumbers, red onions, and a tangy vinaigrette.",
    category: "salad",
    price: 12400,
    image: salad
  },
  {
    id: 5,
    name: "Broccoli Salad",
    description: "Fresh broccoli florets with crispy bacon, sunflower seeds, and a creamy sweet dressing.",
    category: "salad",
    price: 13200,
    image: broccoliSalad
  },
  {
    id: 6,
    name: "Pasta Puttanesca",
    description: "Spaghetti in a bold sauce of tomatoes, olives, capers, anchovies, and garlic, finished with fresh basil.",
    category: "pasta",
    price: 18600,
    image: puttanesca
  },
  {
    id: 7,
    name: "Creamy Mushroom Pasta",
    description: "Fettuccine enveloped in a velvety cream sauce loaded with sautéed wild mushrooms and parmesan.",
    category: "pasta",
    price: 19900,
    image: pastaMushroom
  },
  {
    id: 8,
    name: "Seafood Pasta",
    description: "Fresh pasta with mixed seafood in a light tomato and white wine sauce with garlic and herbs.",
    category: "pasta",
    price: 22400,
    image: pastaSeaFood
  },
  {
    id: 9,
    name: "Classic Pizza",
    description: "Traditional pizza with tomato sauce, mozzarella cheese, and fresh basil on a crispy thin crust.",
    category: "pizza",
    price: 16800,
    image: pizza
  },
  {
    id: 10,
    name: "Veggie Pizza",
    description: "Loaded with fresh vegetables including bell peppers, mushrooms, olives, and onions on a crispy crust.",
    category: "pizza",
    price: 18200,
    image: veggiesPizza
  },
  {
    id: 11,
    name: "Burger Deluxe",
    description: "Juicy beef patty with lettuce, tomato, onion, pickles, and special sauce on a sesame seed bun.",
    category: "burger",
    price: 19500,
    image: burgerDeluxe
  },
  {
    id: 12,
    name: "Cheese Burger",
    description: "Classic beef burger topped with melted cheddar cheese, lettuce, tomato, and our signature sauce.",
    category: "burger",
    price: 17800,
    image: cheeseBurger
  },
  {
    id: 13,
    name: "Cappuccino",
    description: "Rich espresso topped with steamed milk foam, perfect for ending your meal.",
    category: "dessert",
    price: 8500,
    image: cappuccino
  },
  {
    id: 14,
    name: "Fried Rice",
    description: "Savory fried rice with mixed vegetables and aromatic spices, a satisfying main course.",
    category: "rice",
    price: 14600,
    image: friedRice
  },
  // New items using decoration/food images
  {
    id: 15,
    name: "Fresh Salad Bowl",
    description: "A vibrant mix of greens, cherry tomatoes, cucumbers, and olives with a light lemon vinaigrette.",
    category: "salad",
    price: 11800,
    image: salad1
  },
  {
    id: 16,
    name: "Classic Burger",
    description: "Juicy beef patty with lettuce, tomato, onion, and our house sauce on a toasted bun.",
    category: "burger",
    price: 16900,
    image: burger1
  },
  {
    id: 17,
    name: "Tomato Basil Pasta",
    description: "Al dente pasta tossed in a fresh tomato and basil sauce with a hint of garlic and olive oil.",
    category: "pasta",
    price: 15400,
    image: pasta
  },
  {
    id: 18,
    name: "Grilled Chicken Sandwich",
    description: "Tender grilled chicken breast with avocado, lettuce, and chipotle mayo on ciabatta.",
    category: "sandwich",
    price: 18700,
    image: sandwich1
  }
]
