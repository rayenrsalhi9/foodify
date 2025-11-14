import { type CartItem } from "@/data/cart"

type CartItemProps = {
    item: CartItem
}

const CartItemCard = ({ item } : CartItemProps) => {
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border rounded-lg">

            <div className="shrink-0">
                <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
                onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik00MCA0MEMzNS41ODE3IDQwIDMyIDM2LjQxODMgMzIgMzJDMzIgMjcuNTgxNyAzNS41ODE3IDI0IDQwIDI0QzQ0LjQxODMgMjQgNDggMjcuNTgxNyA0OCAzMkM0OCAzNi40MTgzIDQ0LjQxODMgNDAgNDAgNDBaIiBmaWxsPSIjOUI5QjlCIi8+CjxwYXRoIGQ9Ik00MCA0OEM0NC40MTgzIDQ4IDQ4IDUxLjU4MTcgNDggNTZDNDggNjAuNDE4MyA0NC40MTgzIDY0IDQwIDY0QzM1LjU4MTcgNjQgMzIgNjAuNDE4MyAzMiA1NkMzMiA1MS41ODE3IDM1LjU4MTcgNDggNDAgNDhaIiBmaWxsPSIjOUI5QjlCIi8+Cjwvc3ZnPgo='
                }}
                />
            </div>

            <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 truncate">{item.name}</h3>
                <p className="text-sm text-gray-600 mt-1">
                Price: <span className="font-medium">{(item.price / 1000).toFixed(2)} TND</span>
                </p>
                <p className="text-sm text-gray-600">
                Quantity: <span className="font-medium">{item.quantity}</span>
                </p>
            </div>

            <div className="text-right ml-auto">
                <p className="text-lg font-semibold text-gray-900">
                {((item.price * item.quantity) / 1000).toFixed(2)} TND
                </p>
                <p className="text-sm text-gray-600">Subtotal</p>
            </div>
            
        </div>
    )
}

export default CartItemCard