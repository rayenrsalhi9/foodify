import { createBrowserRouter } from "react-router"
import HomeLayout from "./layout/homeLayout"
import LoginPage from "./pages/auth/login"
import SignupPage from "./pages/auth/signup"
import NotFound from "./pages/not-found"

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
  },
  {
    path: "signup",
    element: <SignupPage />
  },
  {
    path: "*",
    element: <NotFound />
  }
])

export default router