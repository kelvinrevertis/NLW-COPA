import { createContext, ReactNode, useState, useEffect } from "react";
import * as Google from 'expo-auth-session/providers/google'
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import { api } from '../services/api'

WebBrowser.maybeCompleteAuthSession()

interface UserProps {
    name: string
    avatarUrl: string
}

export interface AuthContextDataProps {
    user: UserProps
    isUserLoading: boolean
    signIn: () => Promise<void>
}

interface AuthProviderProps {
    children: ReactNode
}


export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>({} as UserProps)
    const [isUserLoading, setIsUserLoading] = useState(false)

    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: '214174115282-dfppf2flsclcg5tlftrimm6turtv5e36.apps.googleusercontent.com',
        redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
        scopes: ['profile', 'email']
    })

    console.log()

    async function signIn() {
        try {
            setIsUserLoading(true)
            await promptAsync()

        } catch (error) {
            console.log(error)
            throw error
        } finally {
            setIsUserLoading(false)
        }
    }
//207
    async function signiInWithGoogle(access_token: string) {
        try {
            setIsUserLoading(true)

            const tokenResponse = await api.post('/users', { access_token })
            console.log(tokenResponse.data)
            api.defaults.headers.common['Authorization'] = `Bearer ${tokenResponse.data.token}`

            const userInfoResponse = await api.get('/me')
            setUser(userInfoResponse.data.user)


        } catch (error) {
            console.log(error)
            throw error
        } finally {
            setIsUserLoading(false)
        }
    }

    useEffect(() => {
        if (response?.type === 'success' && response.authentication?.accessToken) {
            signiInWithGoogle(response.authentication.accessToken)
        }
    }, [response])

    return (
        <AuthContext.Provider value={{
            signIn,
            isUserLoading,
            user,
        }}>
            {children}

        </AuthContext.Provider>
    )
}