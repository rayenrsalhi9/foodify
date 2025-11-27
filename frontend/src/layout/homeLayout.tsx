import Header from "@/components/custom/header"
import Landing from "@/pages/landing/landing"
import OrderSteps from "@/pages/landing/orderSteps"
import Offers from "@/pages/landing/offers"
import OfferLimited from "@/pages/landing/offer-limited"
import Menu from "@/pages/landing/menu"
import Footer from "@/components/custom/footer"
import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "@/components/custom/Sidebar"

import StickyBanner from "@/components/custom/sticky-banner"
import { useUserContext } from "@/context/userContext"

const HomeLayout = () => {

  const {user} = useUserContext()

  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <div className="w-full mx-auto overflow-x-hidden">
        <Header />
        <Landing />
        <Offers />
        <OrderSteps />
        <OfferLimited />
        <Menu />
        <Footer />
        { !user ? <StickyBanner /> : null }
      </div>
    </SidebarProvider>
  )
}

export default HomeLayout