import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import CartConfirm from "./cart-confirm"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { type CartItem } from "@/data/cart"

type CartSummaryProps = {
    cart: CartItem[]
}

const CartSummary = ({ cart } : CartSummaryProps) => {

    const handleConfirmDelivery = () => {
        console.log("Delivery confirmed")
    }

    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

    return (
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
                
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button 
                            onClick={handleConfirmDelivery}
                            className="w-full mt-6"
                            size="lg"
                        >
                            Confirm Delivery
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <CartConfirm />
                    </AlertDialogContent>
                </AlertDialog>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                    By confirming, you agree to our delivery terms and conditions.
                </p>
                </div>
            </CardContent>
            </Card>
        </div>
    )
}

export default CartSummary