import React, {useContext} from "react"
import {GoogleLogin} from "react-google-login"
import {UserContext} from "../context/UserContext.jsx"

const clientId = "687510174429-stq4gsnugh62mq0joeb0apsfnmcvcpm5.apps.googleusercontent.com"

function Login(){
    const {setUser} = useContext(UserContext);

    function onSuccess(res){
        console.log(res.profileObj)
        setUser(res.profileObj.name)
    }

    function onFailure(res){
        console.log(`Login failed`)
    }

    return(
        <div>
            <GoogleLogin clientId={clientId} render={renderProps => (
                <button onClick={renderProps.onClick} className="btn btn-ghost">
                    Login
                </button>)
                } buttonText="Login" onSuccess={onSuccess} onFailure={onFailure}
                cookiePrivacy={"single_host_origin"} isSignedIn={true} />
        </div>
    )
}

export default Login;