import type { JSX } from "react";
import { Navigate, useLocation } from "react-router";
import { useUserContext } from "@/context/userContext";

const ProtectedRoute = ({children} : { children: JSX.Element }) => {

  const { user } = useUserContext()
  const location = useLocation()

  if (!user) {
    return (
      <Navigate 
        to="/login" 
        replace 
        state={{
          from: location.pathname,
          message: "You must be logged in to access this page."
        }}
      />
    )
  }

  return children
}

export default ProtectedRoute;
