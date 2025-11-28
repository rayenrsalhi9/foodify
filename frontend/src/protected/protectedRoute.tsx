import type { JSX } from "react";
import { Navigate, useLocation } from "react-router";
import { useUserContext } from "@/context/userContext";
import Loading from "@/components/custom/loading";

const ProtectedRoute = ({children} : { children: JSX.Element }) => {

  const { user, isLoading } = useUserContext()
  const location = useLocation()

  if (isLoading) {
    return <Loading />
  }

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
