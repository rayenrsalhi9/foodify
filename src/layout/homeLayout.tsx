import Header from "@/components/custom/header"
import Landing from "@/pages/landing"
import OrderSteps from "@/pages/orderSteps"
import Footer from "@/components/custom/footer"

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Landing />
      <OrderSteps />
      <Footer />
    </div>
  )
}

export default HomeLayout