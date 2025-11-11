import { ArrowRight, UtensilsCrossed } from "lucide-react"
import leaf from '/footer/leaf.png'
import salad from '/footer/salad.png'

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white relative overflow-hidden">

      <div className="absolute w-48 h-48 top-2 left-0 pointer-events-none opacity-25 hidden sm:block">
        <img
          src={salad}
          alt="Decorative salad"
          className="object-cover"
        />
      </div>
      <div className="absolute w-48 h-48 top-4 right-0 pointer-events-none opacity-25 hidden sm:block">
        <img
          src={leaf}
          alt="Decorative leaf"
          className="object-cover"
        />
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 relative z-10">
        {/* Logo Section - Improved responsive spacing */}
        <div className="flex justify-center mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 w-full max-w-4xl">
            <div className="flex-1 border-t border-gray-600"></div>
            <div className="shrink-0 flex items-center gap-2 sm:gap-3">
                <UtensilsCrossed className="h-8 w-8 sm:h-10 sm:w-10 bg-white text-orange-500 rounded-full p-1.5 sm:p-2" />
                <div className="text-center">
                    <h1 className="text-xl sm:text-2xl font-extrabold">Foodify</h1>
                    <p className="text-xs tracking-widest opacity-90">ORDER. FOOD. HAPPY</p>
                </div>
            </div>
            <div className="flex-1 border-t border-gray-600"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* HELP Column */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 tracking-wide">HELP</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Store Locator
                </a>
              </li>
            </ul>
          </div>

          {/* ABOUT US Column - Improved responsive text alignment */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 tracking-wide">ABOUT US</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Store Locator
                </a>
              </li>
            </ul>
          </div>

          {/* ADDRESS Column - Improved responsive text alignment */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 tracking-wide">ADDRESS</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                <p>1487 Rocky Horse Carre</p>
                <p>1487Rocky Arlington, TX 16819</p>
                <p>United</p>
              </div>
              <div className="pt-2">
                <p className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">1800 6565 222</p>
                <p className="text-gray-400 text-xs sm:text-sm">info@gmail.com</p>
              </div>
            </div>
          </div>

          {/* CONNECT Column - Improved responsive text alignment */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 tracking-wide">CONNECT</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Absolutely loved the cozy vibe and Rich aroma! The coffee was perfectly brewed
            </p>
            <div className="flex items-center gap-2 border-b border-gray-600 pb-2 sm:pb-3 hover:border-white transition-colors cursor-pointer group max-w-xs mx-auto sm:mx-0">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                className="bg-transparent text-white placeholder:text-gray-500 focus:outline-none text-xs sm:text-sm flex-1"
              />
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Divider - Responsive spacing */}
        <div className="border-t border-gray-700 my-6 sm:my-8"></div>

        {/* Bottom Footer - Improved responsive layout */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            Copyright © {new Date().getFullYear()} <span className="text-orange-500 font-semibold">Foodify</span> all Rights Reserved
          </p>
          <div className="flex gap-4 sm:gap-6 text-gray-400 text-xs sm:text-sm">
            <a href="#" target="_blank" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" target="_blank" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer