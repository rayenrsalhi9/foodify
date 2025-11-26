import { RouterProvider } from "react-router/dom"
import router from "./router"
import { CartContextProvider } from "./context/cartContext"
import { UserContextProvider } from "./context/userContext"
import { Toaster } from "@/components/ui/sonner"

const App = () => {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <RouterProvider router={router} />
        <Toaster />
      </CartContextProvider>
    </UserContextProvider>
  )
}

export default App