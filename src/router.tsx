import { lazy, Suspense } from "react"
import { createBrowserRouter } from "react-router"

import LoginPage from "./pages/auth/login"
import SignupPage from "./pages/auth/signup"
import NotFound from "./pages/not-found"

const HomeLayoutLazy = lazy(() => import('./layout/homeLayout'))
const MenuLayoutLazy = lazy(() => import('./layout/menuLayout'))
const CartLayoutLazy = lazy(() => import('./layout/cartLayout'))

const router = createBrowserRouter([
  { 
    path: "/", 
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HomeLayoutLazy />
      </Suspense>
    ) 
  },{ 
    path: '/menu', 
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <MenuLayoutLazy />
      </Suspense>
    ) 
  },{ 
    path: '/cart', 
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <CartLayoutLazy />
      </Suspense>
    ) 
  },
  { path: "login", element: <LoginPage /> },
  { path: "signup", element: <SignupPage /> },
  { path: "*", element: <NotFound /> }
])

export default router