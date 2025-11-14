import { cart } from "@/data/cart"
import CartEmpty from "./cart-empty"
import CartItemCard from "./cart-item"
import CartSummary from "./cart-summary"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const CartPage = () => {

  return (
    <div className="min-h-[calc(100vh - 80px)] bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">

        {
          cart.length === 0
          ? <CartEmpty />
          : (
            <>
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
                        {
                          cart.map(item => <CartItemCard key={item.id} item={item} /> )
                        }
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <CartSummary cart={cart} />
                
              </div>
            </>
          )
        }    
      </div>
    </div>
  )
}

export default CartPage;