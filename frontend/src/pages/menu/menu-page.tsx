import { useSearchParams } from "react-router"
import MenuFilters from "./menu-filters"
import MenuItemCard from "./menu-item"
import MenuEmpty from "./menu-empty"
import useMenu from "@/hooks/useMenu"

const Menu = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const category = searchParams.get('category')
    const search = searchParams.get('search')

    const { menu } = useMenu({ category, search })
    
    const categories = [...Array.from(new Set(menu.map(item => item.category)))]

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

                <MenuFilters 
                    category={category} 
                    categories={categories} 
                    search={search}
                    setSearchParams={setSearchParams} 
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {menu.map((item) => <MenuItemCard key={item.id} item={item} />)}
                </div>

                { menu.length === 0 ? <MenuEmpty /> : null }
            </div>
        </div>
    )
}

export default Menu