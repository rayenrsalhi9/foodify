import { cart } from "@/data/cart"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const CartPage = () => {
  
  const handleConfirmDelivery = () => {
    console.log("Delivery confirmed")
  }

  const totalAmount = cart.reduce((sum, item) => sum + item.subTotal, 0)

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <h1>No Cart Items yet</h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Your Cart</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Review your selected items and confirm your order.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Cart Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border rounded-lg">
                      {/* Image */}
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

                      {/* Item Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">{item.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Price: <span className="font-medium">{(item.price / 1000).toFixed(2)} DT</span>
                        </p>
                        <p className="text-sm text-gray-600">
                          Quantity: <span className="font-medium">{item.quantity}</span>
                        </p>
                      </div>

                      {/* Subtotal */}
                      <div className="text-right">
                        <p className="text-lg font-semibold text-gray-900">
                          {(item.subTotal / 1000).toFixed(2)} TND
                        </p>
                        <p className="text-sm text-gray-600">Subtotal</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Items ({cart.length})</span>
                    <span className="font-medium">{(totalAmount / 1000).toFixed(2)} TND</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total Amount</span>
                    <span>{(totalAmount / 1000).toFixed(2)} TND</span>
                  </div>
                  
                  <Button 
                    onClick={handleConfirmDelivery}
                    className="w-full mt-6"
                    size="lg"
                  >
                    Confirm Delivery
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center mt-4">
                    By confirming, you agree to our delivery terms and conditions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage;