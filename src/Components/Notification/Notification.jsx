import styles from "./Notification.module.css"
import { useNotification } from "../../Context/NotificationContext"
import { useEffect, useRef } from "react"

function Notification(){
    const{message} = useNotification()
    const notificationContainerRef = useRef(null)
    useEffect(()=>{
        const timeout = setTimeout(()=> notificationContainerRef.current.style.background= "none",3000) 
        return(clearTimeout(timeout))
    },[message])
    return(
        <div className={styles.notificationContainer} ref={notificationContainerRef} style={message.message ? {display:"flex"} : {display:"none"}}>
            <div className={styles.closeButton}>
                <i class="fa fa-times-circle-o" aria-hidden="true"></i>
            </div>
            <div className={styles.messageContainer} style={message.category === "success" ? {background:"hsla(120, 29%, 75%, 1.00)"}: {background:"hsla(11, 21%, 59%, 1.00)"}}>
                {message.message}
            </div>
        </div>
    
    )
}

export default Notification