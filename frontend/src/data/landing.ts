import { type LucideIcon, Hamburger, ShoppingBasket, Hourglass } from "lucide-react"

type Category = {
    id: number
    name: string
    img: string
    urlTo: string
}

type Step = {
  id: number
  icon: LucideIcon
  title: string
  description: string
}

export const categories: Category[] = [
  { id: 1, name: "Burger", img: "/categories/burger.webp", urlTo: "/menu?category=burger" },
  { id: 2, name: "Pasta", img: "/categories/pasta.webp", urlTo: "/menu?category=pasta" },
  { id: 3, name: "Salad", img: "/categories/salad.webp", urlTo: "/menu?category=salad" },
  { id: 4, name: "Pizza", img: "/categories/pizza.webp", urlTo: "/menu?category=pizza" },
  { id: 5, name: "Sandwich", img: "/categories/sandwich.webp", urlTo: "/menu?category=sandwich" },
  { id: 6, name: "Fried Rice", img: "/categories/rice.webp", urlTo: "/menu?category=rice" },
]

export const steps: Step[] = [
  {
    id: 1,
    icon: Hamburger,
    title: "Choose your Product",
    description:
      "Browse our diverse menu and select your favorite meals with ease. Customize ingredients, portion sizes, and dietary preferences to match your taste perfectly.",
  },
  {
    id: 2,
    icon: ShoppingBasket,
    title: "Make your Order",
    description:
      "Add selected items to your cart, review your choices, apply any promo codes, and securely checkout using multiple payment options including cards, digital wallets, or cash on delivery.",
  },
  {
    id: 3,
    icon: Hourglass,
    title: "Food is on the way",
    description:
      "Track your order in real-time as our chefs prepare your meal with fresh ingredients. Receive live updates on preparation, packaging, and estimated delivery time straight to your doorstep.",
  },
]