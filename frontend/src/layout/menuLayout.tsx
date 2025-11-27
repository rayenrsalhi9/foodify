import Header from "@/components/custom/header";
import AppSidebar from "@/components/custom/Sidebar";
import Menu from "@/pages/menu/menu-page";
import Footer from "@/components/custom/footer";
import StickyBanner from "@/components/custom/sticky-banner";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useUserContext } from "@/context/userContext";

const MenuLayout = () => {

    const {user} = useUserContext()

    return (
        <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            <div className="w-full mx-auto overflow-x-hidden">
                <Header />
                <Menu />
                <Footer />
                { !user ? <StickyBanner /> : null }
            </div>
        </SidebarProvider>
    )
}

export default MenuLayout