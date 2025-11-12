import brik from "/menu/brik.jpg"
import sandwich from "/menu/sandwich.jpg"
import tacos from "/menu/tacos.jpg"
import salad from "/menu/salad.jpg"
import puttanesca from "/menu/puttanesca.jpg"
import pastaMushroom from "/menu/pasta-mushroom.jpg"

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