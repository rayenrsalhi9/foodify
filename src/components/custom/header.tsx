import { Button } from "../ui/button"
import { Phone, ShoppingCart, User, UtensilsCrossed, Menu } from "lucide-react"
import { Link } from "react-router"
import { useSidebar } from "../ui/sidebar"

const Header = () => {

    const {toggleSidebar} = useSidebar()

    return (
        <header className="bg-orange-500 text-white relative p-4">
            <div className="max-w-6xl mx-auto">
                {/* Mobile Layout (default) */}
                <div className="flex items-center justify-between md:hidden">
                    
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        className="hover:bg-orange-600 transition-colors duration-200"
                        onClick={toggleSidebar}
                    >
                        <Menu className="h-6 w-6" />
                    </Button>
                    
                    <Link to="/" className="flex items-center gap-2 text-white no-underline">
                        <UtensilsCrossed className="h-10 w-10 bg-white text-orange-500 rounded-full p-2" />
                        <div className="text-center">
                            <h1 className="text-2xl font-extrabold">Foodify</h1>
                            <p className="text-xs tracking-widest opacity-90">
                                ORDER. FOOD. HAPPY
                            </p>
                        </div>
                    </Link>
                    
                    <Button variant="ghost" size="icon" className="hover:bg-orange-600 transition-colors duration-200">
                        <ShoppingCart className="h-6 w-6" />
                    </Button>
                </div>

                {/* Tablet/Desktop Layout */}
                <div className="hidden md:flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            className="hover:bg-orange-600 transition-colors duration-200"
                            onClick={toggleSidebar}
                        >
                            <Menu className="h-6 w-6" />
                        </Button>

                        <div className="flex items-center gap-2">
                            <Phone className="h-5 w-5" />
                            <div className="text-sm">
                                <p className="text-xs opacity-90">Hotline Number:</p>
                                <p className="font-semibold">+216 71 234 567</p>
                            </div>
                        </div>
                    </div>

                    <Link to="/" className="flex-1 flex items-center justify-center gap-2 text-white no-underline">
                        <UtensilsCrossed className="h-12 w-12 bg-white text-orange-500 rounded-full p-2" />
                        <div className="text-center">
                            <h1 className="text-3xl font-extrabold">Foodify</h1>
                            <p className="text-xs tracking-widest">ORDER. FOOD. HAPPY</p>
                        </div>
                    </Link>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="hover:bg-orange-600 transition-colors duration-200">
                            <ShoppingCart className="h-6 w-6" />
                        </Button>
                        <Link
                            to="login"
                            className="inline-flex items-center justify-center rounded-md bg-white text-orange-500 hover:bg-gray-100 font-semibold gap-2 transition-colors duration-200 px-4 py-2"
                        >
                            <User className="h-5 w-5" />
                            <span className="hidden lg:inline">Log In</span>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className="absolute top-full left-0 right-0 bg-orange-600 shadow-lg transition-all duration-300 ease-in-out md:hidden opacity-0 invisible -translate-y-2">
                    <div className="px-4 py-3 space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                            <Phone className="h-4 w-4" />
                            <div>
                                <p className="text-xs opacity-90">Hotline Number:</p>
                                <p className="font-semibold">+216 71 234 567</p>
                            </div>
                        </div>
                        <Button
                            variant="default"
                            className="w-full bg-white text-orange-500 hover:bg-gray-100 font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
                        >
                            <User className="h-4 w-4" />
                            Log In
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header