import { createContext, ReactNode } from "react";

interface UserProps{
    name: string
    avatarUrl: string
}

export interface AuthContextDataProps{
    user: UserProps
    signIn: ()=> Promise<void>
}

interface AuthProviderProps{
    children: ReactNode
}


export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider({children}: AuthProviderProps){

    async function signIn(){
        console.log("Vamos Logar!")

    }

    return(
        <AuthContext.Provider value={{
            signIn,
            user:{
                name: 'Kelvin',
                avatarUrl: 'https://www.github.com/kelvinrevertis.png'
            }
        }}>
            {children}

        </AuthContext.Provider>
    )
}