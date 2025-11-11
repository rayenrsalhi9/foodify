import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarSeparator,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"

import { 
  Home, 
  UtensilsCrossed, 
  Phone, 
  ChevronDown,
  ChevronRight,
  MapPin,
  Mail,
  Clock,
  Store,
  FileText
} from "lucide-react"
import { Link } from "react-router"
import { useState } from "react"

const AppSidebar = () => {
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    const toggleExpand = (item: string) => {
        setExpandedItems(prev => 
            prev.includes(item) 
                ? prev.filter(i => i !== item)
                : [...prev, item]
        );
    };

    const menuItems = [
        {
            title: "Home",
            url: "/",
            icon: Home,
            subItems: []
        },
        {
            title: "Menu",
            url: "/menu",
            icon: UtensilsCrossed,
            subItems: [
                { title: "Breakfast", url: "/menu/breakfast" },
                { title: "Lunch", url: "/menu/lunch" },
                { title: "Dinner", url: "/menu/dinner" },
                { title: "Desserts", url: "/menu/desserts" }
            ]
        },
        {
            title: "Shop",
            url: "/shop",
            icon: Store,
            subItems: [
                { title: "Merchandise", url: "/shop/merchandise" },
                { title: "Gift Cards", url: "/shop/gift-cards" },
                { title: "Cookbooks", url: "/shop/cookbooks" }
            ]
        },
        {
            title: "Pages",
            url: "/pages",
            icon: FileText,
            subItems: [
                { title: "About Us", url: "/about" },
                { title: "Contact", url: "/contact" },
                { title: "FAQ", url: "/faq" },
                { title: "Terms & Conditions", url: "/terms" }
            ]
        }
    ];

    const contactInfo = [
        {
            icon: MapPin,
            label: "Address",
            value: "1487 Rocky Horse Carre, Arlington, TX 16819"
        },
        {
            icon: Mail,
            label: "Email",
            value: "info@foodify.com"
        },
        {
            icon: Clock,
            label: "Hours",
            value: "Mon-Sun: 8:00 AM - 10:00 PM"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+1 800 6565 222"
        }
    ];

    return (
        <Sidebar>
            <SidebarHeader className="p-4 border-b border-gray-200">
                <Link to="/" className="flex items-center gap-2 text-orange-500 no-underline">
                    <UtensilsCrossed className="h-10 w-10 bg-orange-500 text-white rounded-full p-2" />
                    <div className="text-center">
                        <h1 className="text-2xl font-extrabold text-gray-900">Foodify</h1>
                        <p className="text-xs tracking-widest text-gray-600">
                            ORDER. FOOD. HAPPY
                        </p>
                    </div>
                </Link>
            </SidebarHeader>

            <SidebarContent className="flex-1 p-2">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <div className="flex items-center justify-between">
                                            <Link to={item.url} className="flex items-center gap-2 flex-1">
                                                <item.icon className="h-4 w-4" />
                                                <span>{item.title}</span>
                                            </Link>
                                            {item.subItems.length > 0 && (
                                                <button
                                                    onClick={() => toggleExpand(item.title)}
                                                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                                                >
                                                    {expandedItems.includes(item.title) ? (
                                                        <ChevronDown className="h-4 w-4" />
                                                    ) : (
                                                        <ChevronRight className="h-4 w-4" />
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    </SidebarMenuButton>
                                    {item.subItems.length > 0 && expandedItems.includes(item.title) && (
                                        <SidebarMenuSub>
                                            {item.subItems.map((subItem) => (
                                                <SidebarMenuSubItem key={subItem.title}>
                                                    <SidebarMenuSubButton asChild>
                                                        <Link to={subItem.url}>
                                                            {subItem.title}
                                                        </Link>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    )}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarSeparator />

            <SidebarFooter className="p-4">
                <div className="space-y-4">
                    <h3 className="font-bold text-sm text-gray-900">Contact Info</h3>
                    <div className="space-y-3">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <info.icon className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                                <div className="min-w-0">
                                    <p className="text-xs font-medium text-gray-700">{info.label}</p>
                                    <p className="text-xs text-gray-600 wrap-break-word">{info.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar