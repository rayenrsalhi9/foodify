import { createBrowserRouter } from "react-router"

import HomeLayout from "./layout/homeLayout"
import MenuLayout from "./layout/menuLayout"
import CartLayout from "./layout/cartLayout"

import LoginPage from "./pages/auth/login"
import SignupPage from "./pages/auth/signup"
import NotFound from "./pages/not-found"

const router = createBrowserRouter([
  { path: "/", element: <HomeLayout /> },
  { path: '/menu', element: <MenuLayout /> },
  { path: '/cart', element: <CartLayout /> },
  { path: "/about", element: <div>This is the about page</div> },
  { path: "login", element: <LoginPage /> },
  { path: "signup", element: <SignupPage /> },
  { path: "*", element: <NotFound /> }
])

export default router