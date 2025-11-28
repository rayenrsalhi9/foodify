import { useNavigate } from "react-router"
import { useUserContext } from "@/context/userContext"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Calendar, Mail, User, LogOut } from "lucide-react"

const Profile = () => {

    const { user, setIsSignedIn, logout } = useUserContext()
    const navigate = useNavigate()

    const handleLogout = async () => {

        const {success, message, error} = await logout()

        if (error) throw new Error(error)

        if (success) {
            setIsSignedIn(false)
            navigate("/login")
            toast.success(message || "Logout successful", {
                style: {
                    background: '#f0fdf4',
                    border: '1px solid #bbf7d0',
                    color: 'green'
                },
                duration: 3000
            })
        }

    }

    const getInitials = (username: string) => {
        return username
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2)
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    if (!user) {
        return (
            <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
                <Card className="w-full max-w-md">
                    <CardContent className="pt-6">
                        <div className="text-center space-y-4">
                            <div className="text-muted-foreground">
                                No user data available
                            </div>
                            <Button onClick={() => window.location.href = '/login'}>
                                Sign In
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-linear-to-br from-background to-muted/20 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold tracking-tight bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        Profile
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        Manage your account information and preferences
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Profile Card */}
                    <div className="lg:col-span-1">
                        <Card className="h-full">
                            <CardContent className="pt-6">
                                <div className="flex flex-col items-center space-y-4">
                                    <Avatar className="h-24 w-24 ring-4 ring-primary/10">
                                        <AvatarFallback className="text-2xl font-semibold bg-linear-to-br from-primary to-primary/60 text-white">
                                            {getInitials(user.username)}
                                        </AvatarFallback>
                                    </Avatar>
                                    
                                    <div className="text-center space-y-1">
                                        <h2 className="text-xl font-semibold">
                                            {user.username}
                                        </h2>
                                        <p className="text-sm text-muted-foreground">
                                            Member since {formatDate(user.created_at)}
                                        </p>
                                    </div>

                                    <Button 
                                        variant="outline" 
                                        className="w-full"
                                        onClick={handleLogout}
                                    >
                                        <LogOut className="mr-2 h-4 w-4" />
                                        Sign Out
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Account Details */}
                    <div className="lg:col-span-2">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>Account Information</CardTitle>
                                <CardDescription>
                                    Your personal account details
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid gap-4">
                                    {/* Username Field */}
                                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                                        <div className="flex items-center space-x-3">
                                            <User className="h-5 w-5 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm font-medium">Username</p>
                                                <p className="text-sm text-muted-foreground">Your display name</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-medium">{user.username}</p>
                                        </div>
                                    </div>

                                    {/* Email Field */}
                                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                                        <div className="flex items-center space-x-3">
                                            <Mail className="h-5 w-5 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm font-medium">Email</p>
                                                <p className="text-sm text-muted-foreground">Your email address</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-medium">{user.email}</p>
                                        </div>
                                    </div>

                                    {/* Member Since */}
                                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                                        <div className="flex items-center space-x-3">
                                            <Calendar className="h-5 w-5 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm font-medium">Member Since</p>
                                                <p className="text-sm text-muted-foreground">Account creation date</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-medium">{formatDate(user.created_at)}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile