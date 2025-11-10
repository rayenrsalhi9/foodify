import Header from "@/components/custom/header";
import Landing from "@/pages/landing";
import OrderSteps from "@/pages/orderSteps";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Landing />
      <OrderSteps />
    </div>
  );
};

export default HomeLayout