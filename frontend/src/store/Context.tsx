import React, {  createContext, useEffect, useState} from "react"
interface useType{
    id:string,
    email:string,
    name:string
}

type UserContextType = {
    isloggedIn: boolean | null
    setIsLoggedIn:  React.Dispatch<React.SetStateAction<boolean | null>>
    loading: boolean 
    setLoading:  React.Dispatch<React.SetStateAction<boolean >>
    user:useType |null
    setUser:  React.Dispatch<React.SetStateAction<useType | null>>
}

type UserContextProviderPros = {
    children: React.ReactNode
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({children}:UserContextProviderPros) =>{
    const [isloggedIn,setIsLoggedIn] = useState<boolean | null>(null);
    const [loading,setLoading] = useState<boolean >(true);
    const [user,setUser] = useState<useType|null>(null)
    
    useEffect(() => {
        const fetchData = () => {
            const currToken = localStorage.getItem('token');
            if (!currToken) {
                setLoading(false)
                setIsLoggedIn(false);
                return;
            }
            try {
                fetch('http://localhost:8787/api/v1/user/getinfo', {
                    headers: {
                        Authorization: currToken
                    }
                }).then(async (res) => {
                    if (res.ok) {
                        const json = await res.json();
                        console.log(json);
                        setIsLoggedIn(true);
                        setLoading(false)
                        setUser(json.user)
                    }
                    else {
                        // alert('incorrect token');
                        setLoading(false)
                        console.log(currToken);
                        console.log('incorrect token');
                    }
                })
            } catch (error) {
                setLoading(false)
                console.log(currToken);
                console.log('incorrect token 2');
            }
        }
        fetchData()
        return () => {
            console.log('cleanup');
        }
    }, [])
    return (
        <UserContext.Provider value={{isloggedIn,setIsLoggedIn,loading,setLoading,user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}