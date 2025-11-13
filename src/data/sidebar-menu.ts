import { 
    type LucideIcon, 
    Home, 
    UtensilsCrossed, 
    Phone, 
    MapPin, 
    Mail, 
    Clock,
    Sandwich,
    Pizza,
    Salad,
    CakeSlice,
    Hamburger,
    Soup
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
    icon: LucideIcon
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
            { title: "Sandwich", url: "/menu?category=sandwich", icon: Sandwich },
            { title: "Salad", url: "/menu?category=salad", icon: Salad },
            { title: "Pasta", url: "/menu?category=pasta", icon: Soup },
            { title: "Pizza", url: "/menu?category=pizza", icon: Pizza },
            { title: "Burger", url: "/menu?category=burger", icon: Hamburger },
            { title: "Dessert", url: "/menu?category=dessert", icon: CakeSlice }
        ],
        clickable: false
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