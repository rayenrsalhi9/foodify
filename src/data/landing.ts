export type Category = {
    id: number
    name: string
    img: string
    urlTo: string
}

export const categories = [
  { id: 1, name: "Burger", img: "/categories/burger.png", urlTo: "/menu?category=burger" },
  { id: 2, name: "Pasta", img: "/categories/pasta.png", urlTo: "/menu?category=pasta" },
  { id: 3, name: "Salad", img: "/categories/salad.png", urlTo: "/menu?category=salad" },
  { id: 4, name: "Pizza", img: "/categories/pizza.png", urlTo: "/menu?category=pizza" },
  { id: 5, name: "Sandwich", img: "/categories/sandwich.png", urlTo: "/menu?category=sanswich" },
  { id: 6, name: "Fried Rice", img: "/categories/rice.png", urlTo: "/menu?category=rice" },
]