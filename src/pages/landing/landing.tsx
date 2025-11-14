import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Navigation2, Search} from "lucide-react"
import Decoration from "./decoration"
import Categories from "./categories"

const landing = () => {
  
  return (
    <div className="h-[calc(100vh-80px)] bg-white flex flex-col">

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

          <Categories />
          
        </div>

        <Decoration />

      </section>

    </div>
  )
}

export default landing