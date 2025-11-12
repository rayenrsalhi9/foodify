type OfferCard = {
  id: number
  name: string
  coupon: string
  price: number
  bgImage: string
  floatingImage?: string
  discountPercent: number
  description?: string
  rating?: number
  timeLeft?: string
}

export const offers: OfferCard[] = [
  {
    id: 1,
    name: "TANGO BURGER",
    coupon: "FEASTA10",
    price: 21500,
    bgImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/offer-bg1-1XxUR5639Zidk8Dn9sqnhVbq1yJO7W.jpg",
    floatingImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/offer-burger-Q9N5KSOyH0aLtdeujlMhzI3sm6GARo.png",
    discountPercent: 0.1,
    description: "Juicy beef patty with special sauce",
    rating: 4.8,
    timeLeft: "2 days left"
  },
  {
    id: 2,
    name: "CREAMY PASTA",
    coupon: "BOGO-Mojo",
    price: 32000,
    bgImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/offer-bg2-LI1dw56E5VuJDlUbFcpu9lMn8nktPP.jpg",
    discountPercent: 0.15,
    description: "Rich alfredo sauce with fresh herbs",
    rating: 4.6,
    timeLeft: "3 days left"
  },
  {
    id: 3,
    name: "CHEESY PIZZA!",
    coupon: "FRIE12",
    price: 24500,
    bgImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/offer-bg3-jxPWNnwm7UNanFFJEp8BjHWMYOvvXc.png",
    floatingImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/offer-pizza-2UDilF6r0eGefgy9H4oH1d5ec3JCXL.png",
    discountPercent: 0.12,
    description: "Loaded with mozzarella cheese",
    rating: 4.9,
    timeLeft: "1 day left"
  },
]