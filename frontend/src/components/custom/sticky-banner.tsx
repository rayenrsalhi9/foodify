import { Button } from "@/components/ui/button"
import { Link } from "react-router"

const StickyBanner = () => {
  return ( 
    <div className="fixed bottom-0 left-0 right-0 bg-orange-500 text-white py-3 sm:py-4 px-3 sm:px-4 shadow-2xl z-50 border-t border-orange-400"> 
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          
        <div className="flex-1 min-w-0 text-center sm:text-left">
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 truncate">Ready to order? Join us now!</h3>
          <p className="text-xs sm:text-sm opacity-90 hidden sm:block">Log in or create an account to access your cart, add delicious items, and get them delivered to your door.</p>
        </div>

        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <Button
            variant="outline"
            size="sm"
            className="border-2 border-white text-white hover:bg-orange-600 hover:border-white font-semibold bg-transparent transition-all duration-200 px-3 md:px-4"
          >
            <Link to="/login">Log in</Link>
          </Button>
          <Button 
            size="sm"
            className="bg-white text-orange-500 hover:bg-gray-100 font-semibold transition-all duration-200 px-3 md:px-4"
          >
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default StickyBanner