import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tag, Clock, Star } from "lucide-react"
import { offers } from "@/data/offers"

const Offers = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Special Offers
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don't miss out on these amazing deals! Limited time offers on your favorite meals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {offers.map((offer) => (
            <Card
              key={offer.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={offer.bgImage}
                  alt={offer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-linear-to-r from-orange-500 to-red-500 text-white font-bold text-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                  <Tag className="w-3 h-3" />
                  {offer.discountPercent} OFF
                </div>

                {/* Time Left Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 font-medium text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {offer.timeLeft}
                </div>

                {/* Floating Food Image */}
                {offer.floatingImage && (
                  <div className="absolute -bottom-8 right-4 w-24 h-24 transform group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={offer.floatingImage}
                      alt={offer.name}
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                      {offer.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
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
                <div className="mb-4 p-3 bg-linear-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 font-medium">Use Code:</span>
                    <span className="font-bold text-orange-700 tracking-wider">
                      {offer.coupon}
                    </span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {offer.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${(parseFloat(offer.price.replace('$', '')) * 1.2).toFixed(2)}
                    </span>
                  </div>
                  
                  <Button 
                    size="sm"
                    className="bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Offers Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 hover:border-orange-600 font-semibold px-8 py-3 rounded-xl transition-all duration-200"
          >
            View All Offers
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Offers