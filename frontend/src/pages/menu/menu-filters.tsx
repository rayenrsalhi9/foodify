import { Link } from "react-router"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

type MenuFiltersProps = {
    category: string | null
    categories: string[]
}

const MenuFilters = ({category, categories} : MenuFiltersProps) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Search Bar */}
                <div className="flex-1">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                            type="text"
                            placeholder="Search menu items..."
                            className="pl-10 pr-4 py-3 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 items-center">
                    <Link
                        to="/menu"
                        className={
                            `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                !category
                                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                                    : "text-gray-600 hover:text-orange-600 hover:border-orange-300 border"
                            }`
                        }
                    >
                        All
                    </Link>
                    {categories.map((cat) => (
                        <Link
                            key={cat}
                            to={`/menu?category=${cat}`}
                            className={
                                `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    category === cat
                                        ? "bg-orange-500 hover:bg-orange-600 text-white"
                                        : "text-gray-600 hover:text-orange-600 hover:border-orange-300 border"
                                }`
                            }
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MenuFilters