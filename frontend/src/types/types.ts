export type MenuItem = {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  discount: number
}

export type CartItem = MenuItem & { quantity: number}