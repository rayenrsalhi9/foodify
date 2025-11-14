import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Star } from "lucide-react"
import bigBurgerUrl from '/offers/big-burger.png'
import { Link } from "react-router"

const OfferLimited = () => {
  return (
    <section className="relative w-full bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 py-20 px-4 flex justify-center items-center overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-linear-to-br from-amber-500/20 to-orange-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-linear-to-br from-red-500/15 to-pink-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[40px_40px]"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Image with Price Badge */}
          <div className="flex justify-center relative order-2 lg:order-1">
            <div className="relative group">
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-linear-to-br from-amber-400 to-orange-500 rounded-full animate-bounce delay-300 opacity-80"></div>
              <div className="absolute -bottom-6 -right-6 w-6 h-6 bg-linear-to-br from-red-400 to-pink-500 rounded-full animate-bounce delay-700 opacity-80"></div>
              <Star className="absolute -top-8 right-8 w-4 h-4 text-amber-400 animate-pulse" />
              <Sparkles className="absolute bottom-8 -left-8 w-4 h-4 text-orange-400 animate-pulse delay-500" />
              
              {/* Burger Image Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-amber-500/20 to-orange-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                <img
                  src={bigBurgerUrl || "/placeholder.svg"}
                  alt="Limited offer meal image"
                  className="relative w-full max-w-md h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Enhanced Price Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-16 lg:translate-x-0 z-10">
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-br from-red-600 to-red-700 rounded-full blur-lg opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-linear-to-br from-red-500 via-red-600 to-red-700 rounded-full px-8 py-4 shadow-2xl border border-red-400/30 backdrop-blur-sm">
                    <div className="text-white text-center">
                      <div className="text-3xl md:text-5xl font-bold bg-linear-to-br from-white to-gray-200 bg-clip-text text-transparent">
                        TND 17.5
                      </div>
                      <div className="text-sm font-semibold text-red-100 tracking-wide">Limited Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center items-start gap-10 order-1 lg:order-2 text-center lg:text-left">
            {/* Heading with Enhanced Typography */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-linear-to-r from-amber-500/20 to-orange-500/20 px-4 py-2 rounded-full border border-amber-500/30 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-sm font-semibold tracking-wide">Special Offer</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold bg-linear-to-br from-white via-gray-200 to-gray-300 bg-clip-text text-transparent leading-tight">
                Big Burger
                <span className="block bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Cheese Deluxe
                </span>
              </h2>
              
              <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Experience the perfect blend of premium beef, melted cheese, and fresh ingredients in our signature burger.
              </p>
            </div>

            {/* Enhanced CTA Button */}
            <Link to="offers" className="group mx-auto lg:mx-0">
              <Button
                variant="outline"
                className="relative bg-linear-to-r from-white to-gray-100 text-zinc-900 hover:from-gray-100 hover:to-white px-10 py-7 text-xl font-bold rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300 border-0 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  See Details & Offers
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </Link>

            {/* Additional Info */}
            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Available Now</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400" />
                <span className="text-sm">Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfferLimited