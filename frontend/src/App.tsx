import { RouterProvider } from "react-router/dom"
import router from "./router"
import { CartContextProvider } from "./context/cartContext"
import { UserContextProvider } from "./context/userContext"

const App = () => {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </UserContextProvider>
  )
}

export default App