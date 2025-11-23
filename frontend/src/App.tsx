import { RouterProvider } from "react-router/dom"
import router from "./router"
import { CartContextProvider } from "./context/cartContext"

const App = () => {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  )
}

export default App