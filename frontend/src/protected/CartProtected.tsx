import CartLayout from "@/layout/cartLayout";
import { Navigate } from "react-router";
import { useUserContext } from "@/context/userContext";

const CartProtected = () => {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to="/login" state={{ from: '/cart', message: 'You need to login to access your cart' }} replace />;
  }

  return <CartLayout />;
};

export default CartProtected;
