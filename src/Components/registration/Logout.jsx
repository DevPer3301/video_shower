import React, {useContext} from "react"
import {GoogleLogout} from "react-google-login"
import {UserContext} from "../context/UserContext.jsx"

const clientId = "687510174429-stq4gsnugh62mq0joeb0apsfnmcvcpm5.apps.googleusercontent.com"

function Logout(){
    const {setUser} = useContext(UserContext)

    function onLogout(){
        console.log("Logged out")
        setUser(null)
    }

    return(
        <GoogleLogout
            clientId={clientId}
            render={renderProps => (
                <button onClick={renderProps.onClick} className="btn btn-secondary">
                    Logout
                </button>)}
            buttonText="Logout"
            onLogoutSuccess={onLogout}>
        </GoogleLogout>
    )
}

export default Logout;