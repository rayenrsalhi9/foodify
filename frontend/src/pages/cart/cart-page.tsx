import { useCartContext } from "@/context/cartContext"
import CartEmpty from "./cart-empty"
import CartItemCard from "./cart-item"
import CartSummary from "./cart-summary"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { useState } from "react"
import ConfirmationAlert from "./confirmationAlert"
import type { OrderDetails } from "@/context/cartContext"

const CartPage = () => {

  const { cart, placeOrder } = useCartContext()
  const [showOrderDialog, setShowOrderDialog] = useState(false)
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null)
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null)
  const [location, setLocation] = useState<string | null>(null)

  const handlePlaceOrder = async (phoneNumber: string | null, location: string | null) => {

    if (!phoneNumber || !location) {
        toast.error('Please enter your phone number and location', {
            style: {
                background: '#fee2e2',
                border: '1px solid #fecaca',
                color: 'red'
            },
            duration: 3000
        })
        return
    }

    const { error, success, details } = await placeOrder(phoneNumber, location)
    if (success) {
        toast.success('Order placed successfully!', {
            style: {
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                color: 'green'
            },
            duration: 3000
        })
        if (details) {
            setOrderDetails(details)
            setShowOrderDialog(true)
        }
    } else {
        toast.error(error || 'Failed to place order', {
            style: {
                background: '#fee2e2',
                border: '1px solid #fecaca',
                color: 'red'
            },
            duration: 3000
        })
    }
  }

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

                <CartSummary 
                  cart={cart} 
                  handlePlaceOrder={handlePlaceOrder} 
                  phoneNumber={phoneNumber}
                  setPhoneNumber={setPhoneNumber}
                  location={location}
                  setLocation={setLocation}
                />
                
              </div>
            </>
          )
        }    
      </div>

      <ConfirmationAlert 
        showOrderDialog={showOrderDialog} 
        setShowOrderDialog={setShowOrderDialog} 
        orderDetails={orderDetails} 
      />
      
    </div>
  )
}

export default CartPage;