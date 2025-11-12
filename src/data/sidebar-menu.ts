import { 
    type LucideIcon, 
    Home, 
    UtensilsCrossed, 
    Store, 
    Phone, 
    MapPin, 
    Mail, 
    Clock 
} from "lucide-react"

type SidebarMenuItem = {
    title: string
    url: string
    icon: LucideIcon
    subItems: SidebarMenuSubItem[]
    clickable: boolean
}

type SidebarMenuSubItem = {
    title: string
    url: string
}

type ContactInfoItem = {
    icon: LucideIcon
    label: string
    value: string
}

export const menuItems: SidebarMenuItem[] = [
    {
        title: "Home",
        url: "/",
        icon: Home,
        subItems: [],
        clickable: true
    },
    {
        title: "Menu",
        url: "/",
        icon: UtensilsCrossed,
        subItems: [
            { title: "Breakfast", url: "/menu/breakfast" },
            { title: "Lunch", url: "/menu/lunch" },
            { title: "Dinner", url: "/menu/dinner" },
            { title: "Desserts", url: "/menu/desserts" }
        ],
        clickable: false
    },
    {
        title: "Store",
        url: "/store",
        icon: Store,
        subItems: [],
        clickable: true
    },
    {
        title: "Contact",
        url: "/contact",
        icon: Phone,
        subItems: [],
        clickable: true
    }
]

export const contactInfo: ContactInfoItem[] = [
    {
        icon: MapPin,
        label: "Address",
        value: "15 Rue de Marseille, 1002 Tunis, Tunisia"
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
        value: "+216 71 234 567"
    }
];