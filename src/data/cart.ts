import tacos from "/menu/tacos.jpg"
import brik from "/menu/brik.jpg"
import sandwich from "/menu/sandwich.jpg"
import salad from "/menu/salad.jpg"
import puttanesca from "/menu/puttanesca.jpg"
import pastaMushroom from "/menu/pasta-mushroom.jpg"

export type CartItem = {
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
    image: tacos,
    price: 12800,
    quantity: 2,
  },
  {
    id: 2,
    name: "Brik",
    image: brik,
    price: 15200,
    quantity: 1
  },
  {
    id: 3,
    name: "Seafood Sandwich",
    image: sandwich,
    price: 21100,
    quantity: 1
  },
  {
    id: 4,
    name: "Garden Salad",
    image: salad,
    price: 12400,
    quantity: 3
  },
  {
    id: 5,
    name: "Pasta Puttanesca",
    image: puttanesca,
    price: 18600,
    quantity: 1
  },
  {
    id: 6,
    name: "Creamy Mushroom Pasta",
    image: pastaMushroom,
    price: 19900,
    quantity: 2
  }
]