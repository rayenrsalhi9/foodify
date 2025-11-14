import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent } from "@/components/ui/empty"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { ShoppingCart } from "lucide-react"

const CartEmpty = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <Empty>
            <EmptyHeader>
                <div className="text-gray-400 mb-4">
                    <ShoppingCart className="h-16 w-16 mx-auto" />
                </div>
                <EmptyTitle>Your cart is empty</EmptyTitle>
                <EmptyDescription>Looks like you haven't added any items to your cart yet.</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <Link to="/menu">
                <Button size="lg">
                    Return to Menu Page
                </Button>
                </Link>
            </EmptyContent>
            </Empty>
        </div>
    )
}

export default CartEmpty