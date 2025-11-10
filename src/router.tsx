import { createBrowserRouter } from "react-router"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is the home page</div>,
  },
  {
    path: "/about",
    element: <div>This is the about page</div>,
  },
])

export default router