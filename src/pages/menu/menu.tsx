import { useState } from "react"
import { useSearchParams, Link } from "react-router"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { menu } from "@/data/menu"

const Menu = () => {
    const [searchTerm, setSearchTerm] = useState("")

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

                {/* Filter Section */}
                <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Search Bar */}
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Input
                                    type="text"
                                    placeholder="Search menu items..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
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

                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {menuToDisplay.map((item) => (
                        <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 border-gray-100">
                            <CardHeader className="p-0">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-3 right-3">
                                        <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4">
                                <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
                                    {item.name}
                                </CardTitle>
                                <CardDescription className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {item.description}
                                </CardDescription>
                                <div className="flex items-center justify-between gap-1">
                                    <span className="text-2xl font-bold text-orange-600">
                                        DT {(item.price / 1000).toFixed(2)}
                                    </span>
                                    <Button
                                        variant="default"
                                        size="sm"
                                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                                    >
                                        Add to Cart
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Empty State */}
                {menuToDisplay.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 mb-4">
                            <Search className="h-16 w-16 mx-auto" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
                        <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Menu