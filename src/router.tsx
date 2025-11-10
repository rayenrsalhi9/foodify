import { createBrowserRouter } from "react-router"
import HomeLayout from "./layout/homeLayout"
import LoginPage from "./pages/auth/login"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/about",
    element: <div>This is the about page</div>,
  },
  {
    path: "login",
    element: <LoginPage />
  }
])

export default router