import { 
    AlertDialogAction, 
    AlertDialogCancel, 
    AlertDialogDescription,
    AlertDialogFooter, 
    AlertDialogHeader, 
    AlertDialogTitle 
} from "@/components/ui/alert-dialog"
import { useCartContext } from "@/context/cartContext"
import { toast } from "sonner"

const CartConfirm = () => {

    const { placeOrder } = useCartContext()

    const handlePlaceOrder = async () => {
        const { error, success, details } = await placeOrder()
        if (success) {
            toast.success('Order placed successfully!', {
                style: {
                    background: '#f0fdf4',
                    border: '1px solid #bbf7d0',
                    color: 'green'
                },
                duration: 3000
            })
            console.log(details)
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
        <>
            <AlertDialogHeader>
                <AlertDialogTitle>Confirm your order?</AlertDialogTitle>
                <AlertDialogDescription>
                    By continuing, your order will be placed and sent to the restaurant for preparation and delivery.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handlePlaceOrder}>Place Order</AlertDialogAction>
            </AlertDialogFooter>
        </>
    )
}

export default CartConfirm