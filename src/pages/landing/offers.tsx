import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { offers } from "@/data/offers"
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Offers = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 lg:mb-6 text-balance">
            Special Offers
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don't miss out on these amazing deals! Limited time offers on your favorite meals.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-2 sm:px-0">
          <Carousel
            plugins={[Autoplay({delay: 3000})]}
            opts={{align: "center",loop: true,}}
            className="w-full"
          >
            <CarouselContent className="">
              {offers.map((offer) => (
                <CarouselItem key={offer.id} className="basis-full py-4 pl-2 pr-2 sm:pl-4 sm:pr-4">
                  <Card
                    className="group overflow-hidden rounded-xl border-0 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer bg-white"
                  >
                    <div className="flex h-32 sm:h-36">
                      {/* Left Side - Image */}
                      <div className="relative w-28 sm:w-36 shrink-0">
                        <img
                          src={offer.image}
                          alt={offer.name}
                          className="w-full h-full object-contain"
                        />
                        {/* Discount Badge */}
                        <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded">
                          -{Math.round(offer.discount * 100)}%
                        </div>
                      </div>

                      {/* Right Side - Content */}
                      <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between">
                        {/* Top Section */}
                        <div>
                          <div className="mb-1 sm:mb-2">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
                              {offer.name}
                            </h3>
                          </div>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-2">
                            {offer.description}
                          </p>
                        </div>

                        {/* Bottom Section */}
                        <div className="flex items-end justify-between gap-2">
                          {/* Price */}
                          <div className="flex items-baseline gap-1 sm:gap-2">
                            <span className="text-lg sm:text-xl font-bold text-orange-500">
                              TND {(offer.price / 1000 * (1 - offer.discount)).toFixed(2)}
                            </span>
                            <span className="text-xs sm:text-sm text-gray-600 line-through">
                              TND {(offer.price / 1000).toFixed(2)}
                            </span>
                          </div>

                          {/* CTA */}
                          <Button 
                            size="sm"
                            className="bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded transition-colors shrink-0"
                          >
                            Order Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-2 sm:-left-12 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg hover:bg-white z-10" />
            <CarouselNext className="absolute -right-2 sm:-right-12 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg hover:bg-white z-10" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Offers