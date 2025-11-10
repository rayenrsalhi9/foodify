import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { Home, UtensilsCrossed, ShoppingCart, User, Phone, Info } from "lucide-react"
import { Link } from "react-router"

const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Menu",
        url: "/menu",
        icon: UtensilsCrossed,
    },
    {
        title: "My Orders",
        url: "/orders",
        icon: ShoppingCart,
    },
    {
        title: "Profile",
        url: "/profile",
        icon: User,
    },
    {
        title: "Contact Us",
        url: "/contact",
        icon: Phone,
    },
    {
        title: "About",
        url: "/about",
        icon: Info,
    }
]

const appSidebar = () => {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Foodify Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                                <Link to={item.url}>
                                <item.icon />
                                <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default appSidebar