import { 
    AlertDialogAction, 
    AlertDialogCancel, 
    AlertDialogDescription,
    AlertDialogFooter, 
    AlertDialogHeader, 
    AlertDialogTitle 
} from "@/components/ui/alert-dialog"
import { useCartContext } from "@/context/cartContext"

const CartConfirm = () => {

    const { clearCart } = useCartContext()

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
                <AlertDialogAction onClick={() => clearCart()}>Place Order</AlertDialogAction>
            </AlertDialogFooter>
        </>
    )
}

export default CartConfirm