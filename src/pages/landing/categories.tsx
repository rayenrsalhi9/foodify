import { Link } from "react-router"
import { categories } from "@/data/landing"
import { createOptimizedPicture } from "@/lib/image-utils"

const Categories = () => {
    return (
        <div className="flex justify-center animate-fade-in-up">
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 max-w-2xl md:max-w-3xl">
              {categories.map((category, index) => {
                
                const imageData = createOptimizedPicture(category.img, category.name, "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 transition-transform duration-300 group-hover:scale-110", "lazy")
                
                return (
                <Link
                  to={category.urlTo} 
                  key={category.id} 
                  className="flex flex-col items-center gap-2 group cursor-pointer transform transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 overflow-hidden">
                    <picture>
                      <source srcSet={imageData.webpSrc} type="image/webp" />
                      <img 
                        src={imageData.originalSrc} 
                        alt={imageData.alt} 
                        className={imageData.className}
                        loading={imageData.loading}
                      />
                    </picture>
                  </div>
                  <p className="text-center text-xs sm:text-sm font-medium group-hover:text-orange-100 transition-colors">
                    {category.name}
                  </p>
                </Link>
              )})}
            </div>
        </div>
    )
}

export default Categories