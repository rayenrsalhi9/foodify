import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/custom/header";
import AppSidebar from "@/components/custom/Sidebar";
import Profile from "@/pages/profile/profile";
import Footer from "@/components/custom/footer";

const ProfileLayout = () => {
    return (
        <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            <div className="w-full mx-auto overflow-x-hidden">
                <Header />
                <Profile />
                <Footer />
            </div>
        </SidebarProvider>
    )
}

export default ProfileLayout