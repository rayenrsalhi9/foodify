import { createBrowserRouter } from "react-router"
import HomeLayout from "./layout/homeLayout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/about",
    element: <div>This is the about page</div>,
  },
])

export default router