import cheeseBurger from '/offers/offer-burger.png'
import burgerDeluxe from '/offers/big-burger.png'
import pizza from '/offers/offer-pizza.png'
import pastaMushroom from "/offers/offer-pasta.jpeg"

type Offer = {
  id: number
  name: string
  description: string
  price: number
  discount: number
  image: string
}

export const offers: Offer[] = [
  {
    id: 1,
    name: "Cheese Burger",
    price: 21100,
    image: cheeseBurger,
    discount: 0.1,
    description: "Classic beef burger topped with melted cheddar cheese, lettuce, tomato, and our signature sauce.",
  },
  {
    id: 2,
    name: "Creamy Mushroom Pasta",
    price: 19900,
    image: pastaMushroom,
    discount: 0.15,
    description: "Fettuccine enveloped in a velvety cream sauce loaded with sautéed wild mushrooms and a sprinkle of parmesan.",
  },
  {
    id: 3,
    name: "Classic Pizza",
    price: 16800,
    image: pizza,
    discount: 0.2,
    description: "Traditional pizza with tomato sauce, mozzarella cheese, and fresh basil on a crispy thin crust.",
  },
]

export const limitedOffer = {
  id: 1,
  name: "Big Burger Cheese Deluxe",
  description: "Perfect blend of premium beef, melted cheese, and fresh ingredients in our signature burger.",
  price: 19500,
  image: burgerDeluxe,
  discount: 0.2
}