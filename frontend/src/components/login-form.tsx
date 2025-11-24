import { useActionState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link } from "react-router"

export function LoginForm({className,...props}: React.ComponentProps<"form">) {

  const [error, handleLogin, isPending] = useActionState(
    async (_prevState: string | null, formData: FormData) => {
      
      const data = Object.fromEntries(formData)
      console.log(data)
      
      return null
    },
    null
  )

  return (
    <form 
      className={cn("flex flex-col gap-6", className)} 
      {...props}
      action={handleLogin}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>

        <div 
          id="form-description" 
          className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0"
          aria-hidden="false"
        >
          Use this form to sign in to your account. Enter your email and password.
        </div>

        {
          error ? 
            <p className="text-destructive text-sm text-center" id="signin-error" role="alert">
              {error}
            </p> 
          : null
        }

        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input 
            name="email"
            id="email" 
            type="email" 
            className={cn("w-full", error ? "border-destructive" : "")}
            placeholder="e.g. m@example.com" 
            required 
            aria-required="true"
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? 'signin-error' : undefined}
            disabled={isPending}
          />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input 
            name="password"
            id="password" 
            type="password" 
            className={cn("w-full", error ? "border-destructive" : "")}
            placeholder="********" 
            required 
            aria-required="true"
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? 'signin-error' : undefined}
            disabled={isPending}
          />
        </Field>
        <Field>
          <Button 
            type="submit" 
            className={cn("bg-orange-500 cursor-pointer hover:bg-orange-600", isPending ? 'opacity-80 cursor-not-allowed' : '')}
            disabled={isPending}
            aria-busy={isPending}
          >
            {isPending ? 'Logging in...' : 'Login'}
          </Button>
        </Field>
        <Field>
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="underline underline-offset-4">
              Sign up
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
