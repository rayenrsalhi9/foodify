import { UtensilsCrossed } from "lucide-react"
import loginBg from '/auth/login-bg.jpg'
import { LoginForm } from "@/components/login-form"
import { Link } from "react-router"

const login = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <div className="bg-orange-500 text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <UtensilsCrossed className="size-4" />
            </div>
            Foodify.
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src={loginBg}
          alt="Login background image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default login