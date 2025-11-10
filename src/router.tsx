import { createBrowserRouter } from "react-router"
import Landing from "./pages/landing"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/about",
    element: <div>This is the about page</div>,
  },
])

export default router