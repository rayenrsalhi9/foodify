import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import {SidebarProvider} from "@/components/ui/sidebar";
import AppSidebar from "@/components/custom/Sidebar";
import CartPage from "@/pages/cart/cart-page";

const CartLayout = () => {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <div className="w-full mx-auto">
        <Header />
        <CartPage />
        <Footer />
      </div>
    </SidebarProvider>
  )
}

export default CartLayout;