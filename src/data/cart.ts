type CartItem = {
  id: number
  name: string
  image: string
  price: number
  quantity: number
}

export const cart: CartItem[] = [
  {
    id: 1,
    name: "Tacos",
    image: "/menu/tacos.jpg",
    price: 12800,
    quantity: 3,
  },
  {
    id: 2,
    name: "Cheese Burger",
    image: "/burger/cheese-burger.png",
    price: 17800,
    quantity: 2
  },
  {
    id: 3,
    name: "Classic Pizza",
    image: "/pizza/classic-pizza.png",
    price: 16800,
    quantity: 1
  },
  {
    id: 4,
    name: "Broccoli Salad",
    image: "/salad/broccoli-salad.jpg",
    price: 13200,
    quantity: 2
  },
  {
    id: 5,
    name: "Seafood Pasta",
    image: "/pasta/seafood-pasta.jpeg",
    price: 22400,
    quantity: 1
  },
  {
    id: 6,
    name: "Fried Rice",
    image: "/rice/fried-rice.png",
    price: 14600,
    quantity: 4
  },
  {
    id: 7,
    name: "Apple Pie",
    image: "/dessert/apple-pie.png",
    price: 9500,
    quantity: 2
  },
  {
    id: 8,
    name: "Cappuccino",
    image: "/menu/coffee.jpg",
    price: 8500,
    quantity: 3
  },
  {
    id: 9,
    name: "Pepperoni Pizza",
    image: "/pizza/pepperoni-pizza.jpeg",
    price: 17800,
    quantity: 1
  },
  {
    id: 10,
    name: "Mechouia Salad",
    image: "/salad/mechouia-salad.jpg",
    price: 14200,
    quantity: 1
  }
]