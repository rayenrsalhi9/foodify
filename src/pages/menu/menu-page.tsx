import { useSearchParams } from "react-router"
import MenuFilters from "./menu-filters"
import MenuItem from "./menu-item"
import MenuEmpty from "./menu-empty"
import { menu } from "@/data/menu"

const Menu = () => {
    // Get unique categories from menu data
    const categories = [...Array.from(new Set(menu.map(item => item.category)))]

    const [searchParams] = useSearchParams()
    const category = searchParams.get('category')

    const menuToDisplay = category
        ? menu.filter(item => item.category === category)
        : menu

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our delicious selection of dishes, crafted with love and delivered fresh to your door.
                    </p>
                </div>

                <MenuFilters category={category} categories={categories} />
                

                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {menuToDisplay.map((item) => <MenuItem item={item} />)}
                </div>

                { menuToDisplay.length === 0 ? <MenuEmpty /> : null }
            </div>
        </div>
    )
}

export default Menu