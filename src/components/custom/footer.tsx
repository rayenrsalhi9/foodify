import { 
  UtensilsCrossed, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react"

const SocialIcon = ({ 
  icon: Icon, 
  href, 
  label, 
  ariaLabel 
}: { 
  icon: React.ElementType
  href: string
  label: string
  ariaLabel: string
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="text-gray-400 hover:text-orange-500 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
  >
    <Icon className="h-5 w-5" />
    <span className="sr-only">{label}</span>
  </a>
)

const Footer = () => {

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#111] text-white" role="contentinfo" aria-label="Site footer">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Minimal Logo Section */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <UtensilsCrossed className="h-8 w-8 bg-orange-500 text-white rounded-full p-1.5" />
            <div className="text-center">
              <h1 className="text-xl font-extrabold">Foodify</h1>
              <p className="text-xs tracking-widest opacity-90">ORDER. FOOD. HAPPY</p>
            </div>
          </div>
        </div>

        {/* Essential Contact Information */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-orange-500" />
            <span>+216 71 234 567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-orange-500" />
            <span>info@foodify.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-orange-500" />
            <span>15 Rue de Marseille, 1002 Tunis, Tunisia</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-4" role="navigation" aria-label="Social media links">
            <SocialIcon
              icon={Facebook}
              href="https://facebook.com/foodify"
              label="Facebook"
              ariaLabel="Follow us on Facebook"
            />
            <SocialIcon
              icon={Twitter}
              href="https://twitter.com/foodify"
              label="Twitter"
              ariaLabel="Follow us on Twitter"
            />
            <SocialIcon
              icon={Instagram}
              href="https://instagram.com/foodify"
              label="Instagram"
              ariaLabel="Follow us on Instagram"
            />
            <SocialIcon
              icon={Youtube}
              href="https://youtube.com/foodify"
              label="YouTube"
              ariaLabel="Subscribe to our YouTube channel"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Legal Links and Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-400 text-center sm:text-left">
            © {currentYear} <span className="text-orange-500 font-semibold">Foodify</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-400">
            <a 
              href="/privacy-policy" 
              target="_blank"
              className="hover:text-white transition-colors"
              aria-label="Read our Privacy Policy"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-of-service" 
              target="_blank"
              className="hover:text-white transition-colors"
              aria-label="Read our Terms of Service"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer