import { 
    AlertDialogAction, 
    AlertDialogCancel, 
    AlertDialogDescription,
    AlertDialogFooter, 
    AlertDialogHeader, 
    AlertDialogTitle 
} from "@/components/ui/alert-dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

const CartConfirm = ({
    handlePlaceOrder,
    phoneNumber,
    setPhoneNumber,
    location,
    setLocation
} : {
    handlePlaceOrder: (phoneNumber: string | null, location: string | null) => void
    phoneNumber: string | null
    setPhoneNumber: (phoneNumber: string | null) => void
    location: string | null
    setLocation: (location: string | null) => void
}) => {

    const phoneRegex = /^\+216[0-9]{8}$/
    const isValidPhoneNumber = phoneRegex.test(phoneNumber ?? '')

    return (
        <>
            <AlertDialogHeader className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                    <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <AlertDialogTitle className="text-xl font-bold text-gray-900">
                    Complete Your Order
                </AlertDialogTitle>
                <AlertDialogDescription className="text-gray-600">
                    Please provide your contact and delivery information to complete your order
                </AlertDialogDescription>
            </AlertDialogHeader>
            
            <Card className="mx-6 my-4 border-gray-200 bg-white p-6 shadow-sm">
                <div className="space-y-5">
                    <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                            Phone Number
                        </Label>
                        <Input 
                            id="phone" 
                            type="tel" 
                            value={phoneNumber ?? ''}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="e.g. +21692840380"
                            className={`${!isValidPhoneNumber ? 'border-red-500' : ''} w-full border-gray-300 focus:border-orange-500 focus:ring-orange-500`}
                        />
                        {!isValidPhoneNumber && (
                            <p className="text-xs text-red-500">
                                Please enter a valid phone number
                            </p>
                        )}
                        <p className="text-xs text-gray-500">
                            We'll contact you if needed
                        </p>
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="location" className="text-sm font-medium text-gray-700">
                            Delivery Location
                        </Label>
                        <Input 
                            id="address" 
                            type="text" 
                            value={location ?? ''}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="123 Main Street, City, State 12345"
                            className="w-full border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        />
                        <p className="text-xs text-gray-500">
                            Where should we deliver your order?
                        </p>
                    </div>
                </div>
            </Card>
            
            <AlertDialogFooter className="flex flex-col-reverse gap-3 px-6 pb-6 sm:flex-row sm:justify-between">
                <AlertDialogCancel className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                    Cancel
                </AlertDialogCancel>
                <AlertDialogAction 
                    disabled={!isValidPhoneNumber || !location || location?.length < 10}
                    onClick={() => handlePlaceOrder(phoneNumber, location)}
                    className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-medium"
                >
                    Place Order
                </AlertDialogAction>
            </AlertDialogFooter>
        </>
    )
}

export default CartConfirm