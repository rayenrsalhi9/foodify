import { useActionState } from "react"
import { Link, useNavigate } from "react-router"
import { useUserContext } from "@/context/userContext"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export function SignupForm({className, ...props}: React.ComponentProps<"form">) {

  const navigate = useNavigate()
  const {setIsSignedIn} = useUserContext()

  const [error, handleSignup, isPending] = useActionState(
    async (_prevState: string | null, formData: FormData) => {
      
      const data = Object.fromEntries(formData)

      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json",},
      })
      const {error, success, message} = await response.json()
      
      if (error) return error
      if (success && message) {
        toast.success(message)
        setIsSignedIn(prev => !prev)
        navigate("/menu")
      }

      return null
    },
    null
  )

  return (
    <form 
      className={cn("flex flex-col gap-6", className)} 
      {...props}
      action={handleSignup}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your details below to create your account
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
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input 
            name="username"
            id="username" 
            type="text" 
            className={cn("w-full", error ? "border-destructive" : "")}
            placeholder="e.g. johndoe471" 
            required 
            aria-required="true"
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? 'signin-error' : undefined}
            disabled={isPending}
          />
        </Field>
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
          <FieldLabel htmlFor="password">Password</FieldLabel>
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
          <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
          <Input 
            name="confirmPassword"
            id="confirmPassword" 
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
            {isPending ? 'Signing Up...' : 'Sign Up'}
          </Button>
        </Field>
        <Field>
          <FieldDescription className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="underline underline-offset-4">
              Login
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}