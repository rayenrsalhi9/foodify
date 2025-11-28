import { lazy, Suspense } from "react"
import { createBrowserRouter } from "react-router"

import LoginPage from "./pages/auth/login"
import SignupPage from "./pages/auth/signup"

import ProtectedRoute from "./protected/protectedRoute"
import Loading from "./components/custom/loading"
import NotFound from "./pages/not-found"

const HomeLayoutLazy = lazy(() => import('./layout/homeLayout'))
const MenuLayoutLazy = lazy(() => import('./layout/menuLayout'))
const CartLayoutLazy = lazy(() => import('./layout/cartLayout'))
const ProfileLayoutLazy = lazy(() => import('./layout/profileLayout'))

const router = createBrowserRouter([
  { 
    path: "/", 
    element: (
      <Suspense fallback={<Loading />}>
        <HomeLayoutLazy />
      </Suspense>
    ) 
  },{ 
    path: '/menu', 
    element: (
      <Suspense fallback={<Loading />}>
        <MenuLayoutLazy />
      </Suspense>
    ) 
  },{ 
    path: '/cart', 
    element: (
      <ProtectedRoute>
        <Suspense fallback={<Loading />}>
          <CartLayoutLazy />
        </Suspense>
      </ProtectedRoute>     
    ) 
  }, {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <Suspense fallback={<Loading />}>
          <ProfileLayoutLazy />
        </Suspense>
      </ProtectedRoute>
    )
  },
  { path: "login", element: <LoginPage /> },
  { path: "signup", element: <SignupPage /> },
  { path: "*", element: <NotFound /> }
])

export default router