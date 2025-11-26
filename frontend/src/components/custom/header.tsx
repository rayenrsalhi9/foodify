import { Link, useNavigate } from "react-router"
import { useSidebar } from "../ui/sidebar"
import { useCartContext } from "@/context/cartContext"
import { useUserContext } from "@/context/userContext"
import { Button } from "../ui/button"
import { toast } from "sonner"
import { Phone, ShoppingCart, LogIn, UtensilsCrossed, Menu, LogOut } from "lucide-react"

const Header: React.FC = () => {

    const navigate = useNavigate()
    const { toggleSidebar } = useSidebar()
    const { totalItems } = useCartContext()
    const { user, logout, setIsSignedIn } = useUserContext()

    const handleLogout = async () => {

        const {success, message, error} = await logout()

        if (error) throw new Error(error)

        if (success) {
            setIsSignedIn(prev => !prev)
            navigate("/login")
            toast.success(message || "Logout successful", {
                style: {
                    background: '#f0fdf4',
                    border: '1px solid #bbf7d0',
                    color: 'green'
                },
                duration: 3000
            })
        }

    }

    return (
        <header 
            className="bg-orange-500 text-white p-4 relative"
            role="banner"
            aria-label="Foodify header navigation"
        >
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between">
                    {/* Left section - Menu and Hotline */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            className="hover:bg-orange-600 transition-colors duration-200"
                            onClick={toggleSidebar}
                            aria-label="Toggle navigation menu"
                            aria-expanded={false}
                        >
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        </Button>
                        
                        {/* Hotline - visible on tablet/desktop */}
                        <div className="hidden md:flex items-center gap-2">
                            <Phone className="h-5 w-5" aria-hidden="true" />
                            <div className="text-sm">
                                <p className="text-xs opacity-90">Hotline Number:</p>
                                <p className="font-semibold">+216 92 840 380</p>
                            </div>
                        </div>
                    </div>

                    {/* Center section - Logo and Branding */}
                    <Link 
                        to="/" 
                        className="flex items-center gap-2 text-white no-underline hover:opacity-90 transition-opacity"
                        aria-label="Foodify home page"
                    >
                        <UtensilsCrossed 
                            className="h-10 w-10 md:h-12 md:w-12 bg-white text-orange-500 rounded-full p-2" 
                            aria-hidden="true" 
                        />
                        <div className="text-center">
                            <h1 className="text-2xl md:text-3xl font-extrabold">Foodify</h1>
                            <p className="text-xs tracking-widest opacity-90">
                                ORDER. FOOD. HAPPY
                            </p>
                        </div>
                    </Link>

                    {/* Right section - Cart and Login */}
                    <div className="flex items-center gap-2 md:gap-4">
                        {
                            user ? (
                                <div className="flex items-center gap-4">
                                    <Link 
                                        to="/cart"
                                        aria-label="Shopping cart"
                                        className="relative block"
                                    >
                                        <Button 
                                            variant="ghost" 
                                            size="icon" 
                                            className="cursor-pointer hover:bg-orange-600 transition-colors duration-200"
                                        >
                                            <ShoppingCart className="h-6 w-6" aria-hidden="true" />
                                            <span className="absolute -top-1 -right-1 bg-white text-red-600 text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                                                {totalItems}
                                            </span>
                                        </Button>
                                    </Link>  
                                    <Button 
                                        variant="outline" 
                                        size="default" 
                                        onClick={handleLogout}
                                        className="hidden md:flex bg-white text-orange-500 border-orange-500 hover:bg-orange-100 hover:text-orange-600 transition-colors duration-200"
                                    >
                                        <LogOut className="h-6 w-6" aria-hidden="true" />
                                        <span>Log Out</span>
                                    </Button>
                                </div>
                            ) : (
                                <Link
                                    to="/login"
                                    className="inline-flex items-center justify-center rounded-md bg-white text-orange-500 hover:bg-gray-100 font-semibold gap-2 transition-colors duration-200 px-4 py-2"
                                    aria-label="Log in to your account"
                                >
                                    <LogIn className="h-5 w-5" aria-hidden="true" />
                                    <span className="hidden lg:inline">Log In</span>
                                </Link>
                            )
                        }  
                    </div>
                </div>

                {/* Mobile hotline - visible only on mobile */}
                <div className="md:hidden mt-4 pt-4 border-t border-orange-400">
                    <div className="flex items-center justify-center gap-2 text-sm">
                        <Phone className="h-4 w-4" aria-hidden="true" />
                        <div>
                            <p className="text-xs opacity-90">Hotline Number:</p>
                            <p className="font-semibold">+216 92 840 380</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header