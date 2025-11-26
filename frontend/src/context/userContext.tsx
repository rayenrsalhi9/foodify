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

const UserContext = createContext<{
    user: User | null
    setIsSignedIn: Dispatch<SetStateAction<boolean>>
}>({
    user: null,
    setIsSignedIn: () => {},
})

const UserContextProvider = ({children}: {children: React.ReactNode}) => {

    const [user, setUser] = useState<User | null>(null)
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch("/api/user/data")
                const {notSignedIn, error, user} = await response.json()
                if (notSignedIn) return
                if (error) throw new Error(error)
                setUser(user)
            } catch (error) {
                console.log(error)
            }
        }

        if (!isSignedIn && !user) return

        if (!isSignedIn && user) {
            setUser(null)
            return 
        } 

        fetchUser()

    }, [isSignedIn, user])

    return (
        <UserContext.Provider value={{user, setIsSignedIn}}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => useContext(UserContext)

export {UserContextProvider, useUserContext}