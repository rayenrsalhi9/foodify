import { type CartItem } from "@/data/cart"
import { createOptimizedPicture } from "@/lib/image-utils"
import { useCartContext } from "@/context/cartContext"
import { Trash2 } from "lucide-react"
import { formatPrice } from "@/lib/currency"

type CartItemProps = {
    item: CartItem
}

const CartItemCard = ({ item } : CartItemProps) => {
    const { removeFromCart } = useCartContext()
    const imageData = createOptimizedPicture(item.image, item.name, "w-20 h-20 object-cover rounded-lg", "lazy")
    
    // Calculate discounted price
    const discountedPrice = item.discount > 0 ? item.price * (1 - item.discount) : item.price
    const originalPrice = item.price
    
    const handleRemove = () => {
        removeFromCart(item.id)
    }
    
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow duration-200">

            <div className="shrink-0">
                <picture>
                    {imageData.webpSrc && <source srcSet={imageData.webpSrc} type="image/webp" />}
                    <img
                    src={imageData.originalSrc}
                    alt={imageData.alt}
                    className={imageData.className}
                    loading={imageData.loading}
                    onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik00MCA0MEMzNS41ODE3IDQwIDMyIDM2LjQxODMgMzIgMzJDMzIgMjcuNTgxNyAzNS41ODE3IDI0IDQwIDI0QzQ0LjQxODMgMjQgNDggMjcuNTgxNyA0OCAzMkM0OCAzNi40MTgzIDQ0LjQxODMgNDAgNDAgNDBaIiBmaWxsPSIjOUI5QjlCIi8+CjxwYXRoIGQ9Ik00MCA0OEM0NC40MTgzIDQ4IDQ4IDUxLjU4MTcgNDggNTZDNDggNjAuNDE4MyA0NC40MTgzIDY0IDQwIDY0QzM1LjU4MTcgNjQgMzIgNjAuNDE4MyAzMiA1NkMzMiA1MS41ODE3IDM1LjU4MTcgNDggNDAgNDhaIiBmaWxsPSIjOUI5QjlCIi8+Cjwvc3ZnPgo='
                    }}
                    />
                </picture>
            </div>

            <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 truncate">{item.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                    {item.discount > 0 ? (
                        <>
                            <span className="text-sm text-gray-500 line-through">
                                {formatPrice(originalPrice)}
                            </span>
                            <span className="text-sm font-semibold text-orange-600">
                                {formatPrice(discountedPrice)}
                            </span>
                            <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full font-medium">
                                -{Math.round(item.discount * 100)}%
                            </span>
                        </>
                    ) : (
                        <span className="text-sm font-medium text-gray-900">
                            {formatPrice(originalPrice)}
                        </span>
                    )}
                </div>
                <p className="text-sm text-gray-600">
                Quantity: <span className="font-medium">{item.quantity}</span>
                </p>
            </div>

            <div className="flex items-center gap-4 ml-auto">
                <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900">
                        {formatPrice(discountedPrice * item.quantity)}
                    </p>
                    <p className="text-sm text-gray-600">Subtotal</p>
                </div>
                
                <button
                    onClick={handleRemove}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200 group"
                    title="Remove item from cart"
                >
                    <Trash2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
            </div>
            
        </div>
    )
}

export default CartItemCard