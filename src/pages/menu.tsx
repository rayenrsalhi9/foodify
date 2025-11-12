import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { Plus, ArrowRight } from "lucide-react"
import menuDecoration from '/menu/menu-decoration.png'
import { menuItems } from "@/data/menu"

const Menu = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 md:mb-16 gap-4">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Foodify Menu
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-orange-600 rounded-full" />
            <p className="text-gray-600 text-lg max-w-md">
              Discover our most loved dishes, crafted with passion and delivered fresh to your door
            </p>
          </div>
          <Link to="/menu" className="hidden lg:inline-block">
            <Button 
              variant="outline" 
              className="gap-3 border-2 border-orange-500 text-orange-600 hover:bg-orange-50 hover:border-orange-600 bg-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              See All Menu
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col sm:flex-row gap-4 p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:border-orange-200 transition-all duration-300"
                >
                  {/* Item Info */}
                  <div className="flex-1 min-w-0 space-y-3">
                    <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-2 leading-tight group-hover:text-orange-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <p className="font-bold text-orange-600 text-xl md:text-2xl">TND {(item.price / 1000).toFixed(2)}</p>
                      <Button
                        size="sm"
                        className="rounded-full bg-orange-500 hover:bg-orange-600 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className="relative shrink-0 w-full sm:w-24 h-32 sm:h-24 md:w-28 md:h-28">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Mobile See All Button */}
            <div className="lg:hidden mt-8 text-center">
              <Link to="/menu">
                <Button 
                  variant="outline" 
                  className="gap-3 border-2 border-orange-500 text-orange-600 hover:bg-orange-50 hover:border-orange-600 bg-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  See All Menu
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Decoration Image */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative group">
              <img
                src={menuDecoration}
                alt="Menu Decoration"
                className="w-full max-w-sm h-auto object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-orange-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu