import { 
    AlertDialog, 
    AlertDialogAction, 
    AlertDialogContent, 
    AlertDialogDescription, 
    AlertDialogHeader, 
    AlertDialogTitle 
} from "@/components/ui/alert-dialog"
import type { OrderDetails } from "@/context/cartContext";
import { formatPrice } from "@/lib/currency";
import { CheckCircle } from "lucide-react";

type ConfirmationAlertProps = {
    showOrderDialog: boolean;
    setShowOrderDialog: (show: boolean) => void;
    orderDetails: OrderDetails | null;
}

const ConfirmationAlert = ({ showOrderDialog, setShowOrderDialog, orderDetails }: ConfirmationAlertProps) => {
  
  const formatOrderDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <AlertDialog open={showOrderDialog} onOpenChange={setShowOrderDialog}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
          <AlertDialogTitle className="text-center text-green-600 text-2xl font-bold">
            Order Confirmed!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center space-y-4">
            <div className="space-y-2">
              <p className="text-lg font-medium text-gray-800">
                Thank you for your order!
              </p>
              <p className="text-gray-600">
                Your delicious food is being prepared and will be delivered to you soon. 
                Sit back and relax while we take care of the rest.
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Order Total:</span>
                <span className="font-bold text-green-700 text-lg">
                  {formatPrice(Number(orderDetails?.total_price))}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Status:</span>
                <span className="capitalize font-medium text-green-600">{orderDetails?.status || 'pending'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Order Date:</span>
                <span className="text-sm text-gray-600">
                  {orderDetails?.created_at ? formatOrderDate(orderDetails.created_at) : 'Just now'}
                </span>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 text-center">
              You will receive a confirmation email shortly with your order details.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogAction className="w-full bg-green-600 hover:bg-green-700">
          Continue Shopping
        </AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmationAlert