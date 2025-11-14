import cheeseBurger from '/offers/offer-burger.png'
import burgerDeluxe from '/offers/big-burger.png'
import pizza from '/offers/offer-pizza.png'
import burgerBg from '/offers/offer-bg1.jpg'
import pastaBg from '/offers/offer-bg2.jpg'
import pizzaBg from '/offers/offer-bg3.png'

type Offer = {
  id: number
  name: string
  description: string
  price: number
  discount: number
  coupon: string
  bgImage: string
  image?: string
  rating?: number
  timeLeft?: string
}

export const offers: Offer[] = [
  {
    id: 1,
    name: "Cheese Burger",
    coupon: "FEASTA10",
    price: 21100,
    bgImage: burgerBg,
    image: cheeseBurger,
    discount: 0.1,
    description: "Classic beef burger topped with melted cheddar cheese, lettuce, tomato, and our signature sauce.",
    rating: 4.8,
    timeLeft: "2 days left"
  },
  {
    id: 2,
    name: "Creamy Mushroom Pasta",
    coupon: "BOGO-Mojo",
    price: 19900,
    bgImage: pastaBg,
    discount: 0.15,
    description: "Fettuccine enveloped in a velvety cream sauce loaded with sautéed wild mushrooms and a sprinkle of parmesan.",
    rating: 4.6,
    timeLeft: "3 days left"
  },
  {
    id: 3,
    name: "Classic Pizza",
    coupon: "FRIE12",
    price: 16800,
    bgImage: pizzaBg,
    image: pizza,
    discount: 0.2,
    description: "Traditional pizza with tomato sauce, mozzarella cheese, and fresh basil on a crispy thin crust.",
    rating: 4.9,
    timeLeft: "1 day left"
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