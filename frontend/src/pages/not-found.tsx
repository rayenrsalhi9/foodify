import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty"
import { AlertCircle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Empty className="max-w-md mx-auto">
        <EmptyHeader>
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
            <AlertCircle className="w-8 h-8 text-orange-500" />
          </div>
          <EmptyTitle className="text-3xl">Page Not Found...</EmptyTitle>
          <EmptyDescription className="text-muted-foreground text-md">
            The page you're looking for doesn't exist or may have been moved.
            Please check the URL or return to the homepage.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Link to="/">
            <Button size="lg" className="bg-orange-500 cursor-pointer hover:bg-amber-700">
              Go to Homepage
            </Button>
          </Link>
        </EmptyContent>
      </Empty>
    </div>
  )
}