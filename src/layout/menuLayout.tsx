import Header from "@/components/custom/header";
import AppSidebar from "@/components/custom/Sidebar";
import Menu from "@/pages/menu/menu-page";
import Footer from "@/components/custom/footer";
import { SidebarProvider } from "@/components/ui/sidebar";

const menuLayout = () => {
    return (
        <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            <div className="w-full mx-auto">
                <Header />
                <Menu />
                <Footer />
            </div>
        </SidebarProvider>
    )
}

export default menuLayout