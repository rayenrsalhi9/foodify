/* eslint-disable react-refresh/only-export-components */
import { 
    createContext, 
    useState, 
    useContext, 
    useEffect, 
    type Dispatch, 
    type SetStateAction 
} from "react"

type User = {
    username: string
    email: string
    created_at: string
}

type LogoutResult = { success?: boolean, message?: string, error?: string }

const UserContext = createContext<{
    user: User | null
    isSignedIn: boolean
    setIsSignedIn: Dispatch<SetStateAction<boolean>>
    logout: () => Promise<LogoutResult>
    isLoading: boolean
}>({
    user: null,
    isSignedIn: false,
    setIsSignedIn: () => {},
    logout: async () => ({success: false, message: ""}),
    isLoading: false
})

const UserContextProvider = ({children}: {children: React.ReactNode}) => {

    const [user, setUser] = useState<User | null>(null)
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const logout = async () => {
        try {
            const response = await fetch("/api/auth/logout")
            
            const {success, error, message} = await response.json()
            
            if (error) return {error}

            if (success) {
                setIsSignedIn(false)
                return {success: true, message}
            }

        } catch (error) {
            console.error("Logout error:", error)
            return {error}
        }
        return {success: false}
    }

    useEffect(() => {
        const fetchUser = async () => {
            setIsLoading(true)
            try {
                const response = await fetch("/api/user/data")
                const {notSignedIn, error, user} = await response.json()
                if (notSignedIn) {
                    setUser(null)
                    return
                }
                if (error) throw new Error(error)
                setUser(user)
            } catch (error) {
                console.log(error)
                setUser(null)
            } finally {
                setIsLoading(false)
            }
        }

        if (!isSignedIn && user) {
            setUser(null)
            return 
        } 

        if (isSignedIn) {
            fetchUser()
        }

    }, [isSignedIn])

    return (
        <UserContext.Provider value={{user, isSignedIn, setIsSignedIn, logout, isLoading}}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => useContext(UserContext)

export {UserContextProvider, useUserContext}