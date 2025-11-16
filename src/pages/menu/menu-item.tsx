import type { MenuItem } from "@/data/menu"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type MenuItemProps = {
    item: MenuItem
}

const MenuItemCard = ({item} : MenuItemProps) => {
    return (
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
                    {item.discount > 0 ? (
                        <div className="absolute top-3 left-3">
                            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                                -{(item.discount * 100).toFixed(0)}%
                            </span>
                        </div>
                    ) : null}
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
                    <div className="flex flex-col">
                        {
                            item.discount > 0 ? (
                                <span className="text-sm text-gray-500 line-through">
                                        TND {(item.price / 1000).toFixed(2)}
                                </span>
                            ) : null
                        }
                        <span className="text-lg font-bold text-orange-600">
                            TND {(item.price * (1 - item.discount) / 1000).toFixed(2)}
                        </span>
                    </div>
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
    )
}

export default MenuItemCard