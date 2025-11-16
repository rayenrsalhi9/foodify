export type Category = {
    id: number
    name: string
    img: string
    urlTo: string
}

export const categories = [
  { id: 1, name: "Burger", img: "/categories/burger.webp", urlTo: "/menu?category=burger" },
  { id: 2, name: "Pasta", img: "/categories/pasta.webp", urlTo: "/menu?category=pasta" },
  { id: 3, name: "Salad", img: "/categories/salad.webp", urlTo: "/menu?category=salad" },
  { id: 4, name: "Pizza", img: "/categories/pizza.webp", urlTo: "/menu?category=pizza" },
  { id: 5, name: "Sandwich", img: "/categories/sandwich.webp", urlTo: "/menu?category=sandwich" },
  { id: 6, name: "Fried Rice", img: "/categories/rice.webp", urlTo: "/menu?category=rice" },
]