import { RouterProvider } from "react-router/dom"
import router from "./router"

const App = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-2">
      <RouterProvider router={router} />
    </div>
  )
}

export default App