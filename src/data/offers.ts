import type { MenuItem } from "./menu"

export const offers: MenuItem[] = [
  {
    id: 1,
    name: "Cheese Burger",
    price: 17800, 
    image: "/burger/cheese-burger.png",
    discount: 0.1,
    description: "Classic beef burger topped with melted cheddar cheese, lettuce, tomato, and our signature sauce.",
    category: "burger",
  },
  {
    id: 2,
    name: "Seafood Pasta",
    price: 22400, 
    image: "/pasta/seafood-pasta.jpeg",
    discount: 0.15,
    description: "Fresh pasta with mixed seafood in a light tomato and white wine sauce with garlic and herbs.",
    category: "pasta",
  },
  {
    id: 3,
    name: "Classic Pizza",
    price: 16800, 
    image: "/pizza/classic-pizza.png",
    discount: 0.1,
    description: "Traditional pizza with tomato sauce, mozzarella cheese, and fresh basil on a crispy thin crust.",
    category: "pizza",
  }
]

export const limitedOffer = {
    id: 19,
    name: "Fried Rice",
    description: "Savory fried rice with mixed vegetables and aromatic spices, a satisfying main course.",
    category: "rice",
    price: 14600,
    image: "/rice/fried-rice.png",
    discount: 0.2
}