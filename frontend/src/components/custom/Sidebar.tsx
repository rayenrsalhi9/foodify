import { useState } from "react"
import { Link } from "react-router"
import { menuItems } from "@/data/sidebar-menu"
import { UtensilsCrossed, ChevronDown, ChevronRight} from "lucide-react"
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
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const AppSidebar = () => {
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    const toggleExpand = (item: string) => {
        setExpandedItems(prev => 
            prev.includes(item) 
                ? prev.filter(i => i !== item)
                : [...prev, item]
        );
    }

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
                                            {item.clickable ? (
                                                <Link 
                                                    to={item.url} 
                                                    className="flex items-center gap-2 flex-1"
                                                    aria-label={item.title}
                                                >
                                                    <item.icon className="h-4 w-4" />
                                                    <span>{item.title}</span>
                                                </Link>
                                            ) : (
                                                <div 
                                                    className="flex items-center gap-2 flex-1 cursor-pointer"
                                                    onClick={() => toggleExpand(item.title)}
                                                    role="button"
                                                    aria-expanded={expandedItems.includes(item.title)}
                                                    aria-label={`${item.title} menu`}
                                                    tabIndex={0}
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter' || e.key === ' ') {
                                                            e.preventDefault();
                                                            toggleExpand(item.title);
                                                        }
                                                    }}
                                                >
                                                    <item.icon className="h-4 w-4" />
                                                    <span>{item.title}</span>
                                                </div>
                                            )}
                                            {item.subItems.length > 0 && (
                                                <button
                                                    onClick={() => toggleExpand(item.title)}
                                                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                                                    aria-label={expandedItems.includes(item.title) ? "Collapse menu" : "Expand menu"}
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
                                                        <Link to={subItem.url} className="flex items-center gap-2">
                                                            <subItem.icon className="h-4 w-4" />
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

            <SidebarFooter className="border-t border-gray-200">
                    <Link to="/profile" className="flex items-center gap-3 p-2 w-full hover:bg-gray-100 rounded transition-colors">
                        <Avatar className="h-8 w-8 rounded-lg grayscale">
                            <AvatarImage src="https://github.com/shadcn.png" alt="" />
                            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-medium">salhirayen123</span>
                            <span className="text-muted-foreground truncate text-xs">
                                rayen123@gmail.com
                            </span>
                        </div>
                    </Link>
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar