import burger from '/food/burger.png'
import pasta from '/food/pasta.png'
import salad from '/food/salad.png'
import pizza from '/food/pizza.png'
import sandwich from '/food/sandwich.png'
import rice from '/food/rice.png'

export type Category = {
    id: number
    name: string
    img: string
    urlTo: string
}

export const categories = [
  { id: 1, name: "Burger", img: burger, urlTo: "/menu?category=burger" },
  { id: 2, name: "Pasta", img: pasta, urlTo: "/menu?category=pasta" },
  { id: 3, name: "Salad", img: salad, urlTo: "/menu?category=salad" },
  { id: 4, name: "Pizza", img: pizza, urlTo: "/menu?category=pizza" },
  { id: 5, name: "Sandwich", img: sandwich, urlTo: "/menu?category=sanswich" },
  { id: 6, name: "Fried Rice", img: rice, urlTo: "/menu?category=rice" },
]