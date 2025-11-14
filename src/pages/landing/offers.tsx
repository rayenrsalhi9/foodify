import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tag, Clock, Star } from "lucide-react"
import { offers } from "@/data/offers"

const Offers = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            Special Offers
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don't miss out on these amazing deals! Limited time offers on your favorite meals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {offers.map((offer) => (
            <Card
              key={offer.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
            >
              {/* Image Container */}
              <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                <img
                  src={offer.bgImage}
                  alt={offer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Discount Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-linear-to-r from-orange-500 to-red-500 text-white font-bold text-xs sm:text-sm px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                  <Tag className="w-3 h-3" />
                  {offer.discount * 100}% OFF
                </div>

                {/* Time Left Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm text-gray-700 font-medium text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {offer.timeLeft}
                </div>

                {/* Floating Food Image */}
                {offer.image && (
                  <div className="absolute -bottom-6 sm:-bottom-8 right-3 sm:right-4 w-20 h-20 sm:w-24 sm:h-24 transform group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={offer.image}
                      alt={offer.name}
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                      {offer.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
                      {offer.description}
                    </p>
                  </div>
                  
                  {/* Rating */}
                  {offer.rating && (
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium text-gray-700">{offer.rating}</span>
                    </div>
                  )}
                </div>

                {/* Coupon Code */}
                <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-linear-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 font-medium">Use Code:</span>
                    <span className="font-bold text-orange-700 tracking-wider">
                      {offer.coupon}
                    </span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex flex-wrap items-center justify-between">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl sm:text-2xl font-bold text-gray-900">
                      TND {(offer.price / 1000 * (1 - offer.discount)).toFixed(2)}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 line-through">
                      TND {(offer.price / 1000).toFixed(2)}
                    </span>
                  </div>
                  
                  <Button 
                    size="sm"
                    className="bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 shadow-md cursor-pointer hover:shadow-lg"
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offers