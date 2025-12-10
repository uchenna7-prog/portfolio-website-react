import { createContext,useContext, useState } from "react";   

const NotificationContext = createContext()


export function NotificationProvider({children}){

    const [message,setMessage] = useState({})

    const notify = (message,messageCategory) => setMessage({message,messageCategory})
    
    return(
        <NotificationContext.Provider value={{notify,message}}>
            {children}
        </NotificationContext.Provider>
    )
}


export const useNotification = ()=> useContext(NotificationContext)