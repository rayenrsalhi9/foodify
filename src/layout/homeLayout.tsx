import Header from "@/components/custom/header"
import Landing from "@/pages/landing"
import OrderSteps from "@/pages/orderSteps"
import Offers from "@/pages/offers"
import OfferLimited from "@/pages/offer-limited"
import Footer from "@/components/custom/footer"
import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "@/components/custom/Sidebar"

const HomeLayout = () => {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <div className="w-full mx-auto">
        <Header />
        <Landing />
        <Offers />
        <OrderSteps />
        <OfferLimited />
        <Footer />
      </div>
    </SidebarProvider>
  )
}

export default HomeLayout