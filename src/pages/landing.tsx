import Header from "@/components/custom/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Navigation2, Search} from "lucide-react"

import bgIcon1 from '/food/bg-icon-1.png'
import bgIcon2 from '/food/bg-icon-2.png'
import burger from '/food/burger.png'
import pasta from '/food/pasta.png'
import salad from '/food/salad.png'
import pizza from '/food/pizza.png'
import sandwich from '/food/sandwich.png'
import rice from '/food/rice.png'

const categories = [
  { id: 1, name: "Burger", img: burger },
  { id: 2, name: "Pasta", img: pasta },
  { id: 3, name: "Salad", img: salad },
  { id: 4, name: "Pizza", img: pizza },
  { id: 5, name: "Sandwich", img: sandwich },
  { id: 6, name: "Fried Rice", img: rice },
]

const landing = () => {
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      <Header />

      <section className="relative bg-linear-to-br from-orange-500 to-orange-600 text-white flex-1 px-4 overflow-hidden flex items-center min-h-full">

        <div className="max-w-5xl mx-auto relative z-1 w-full py-8 sm:py-12 lg:py-16">
          {/* Tagline */}
          <p className="text-center text-base sm:text-lg opacity-90 mb-3 sm:mb-4 animate-fade-in">
            Craving something? We'll bring it hot to your door-fast.
          </p>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 sm:mb-8 leading-tight text-balance animate-slide-up">
            Fast Delivery. Zero Hassle.
          </h2>

          {/* Search Bar */}
          <form className="flex flex-col sm:flex-row gap-3 sm:gap-2 bg-white rounded-2xl sm:rounded-full p-3 sm:p-2 shadow-lg mb-8 sm:mb-10 max-w-xl mx-auto animate-fade-in-up">
            <div className="flex items-center gap-2 flex-1 px-3 sm:px-4">
              <MapPin className="h-5 w-5 text-gray-400 shrink-0" />
              <Input
                type="text"
                placeholder="Enter delivery address"
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:outline-none text-gray-900 placeholder:text-gray-400 h-12 sm:h-auto"
              />
            </div>

            <div className="flex gap-2">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 gap-2 flex-1 sm:flex-none transition-colors duration-200"
              >
                <Navigation2 className="h-4 w-4" />
                <span className="text-xs sm:text-sm font-medium">Locate Me</span>
              </Button>

              <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl sm:rounded-full px-4 sm:px-6 gap-2 flex-1 sm:flex-none transition-colors duration-200">
                <Search className="h-4 w-4" />
                <span className="text-sm font-semibold">Search</span>
              </Button>
            </div>
          </form>

          {/* Food Categories */}
          <div className="flex justify-center animate-fade-in-up">
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 max-w-2xl md:max-w-3xl">
              {categories.map((category, index) => (
                <div 
                  key={category.id} 
                  className="flex flex-col items-center gap-2 group cursor-pointer transform transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 overflow-hidden">
                    <img 
                      src={category.img} 
                      alt={category.name} 
                      className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-center text-xs sm:text-sm font-medium group-hover:text-orange-100 transition-colors">
                    {category.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Icons - Hidden on mobile, visible on tablet/desktop */}
        <div className="absolute bottom-[-40%] left-[-15%] pointer-events-none opacity-90 w-160 h-160 hidden md:block transition-opacity duration-500">
          <img 
            src={bgIcon1} 
            alt="Background Icon 1" 
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-[-40%] right-[-15%] pointer-events-none opacity-90 w-120 h-120 hidden md:block transition-opacity duration-500">
          <img 
            src={bgIcon2} 
            alt="Background Icon 2" 
            className="object-cover"
            loading="lazy"
          />
        </div>

      </section>

    </div>
  )
}

export default landing