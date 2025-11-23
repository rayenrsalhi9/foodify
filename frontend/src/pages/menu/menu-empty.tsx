import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty"
import { Search } from "lucide-react"

const MenuEmpty = () => {
  return (
    <Empty>
        <EmptyHeader>
            <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
            </div>
          <EmptyTitle>No items found</EmptyTitle>
          <EmptyDescription>Try adjusting your search or filter criteria.</EmptyDescription>
        </EmptyHeader>
    </Empty>
  )
}

export default MenuEmpty