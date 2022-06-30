import React, {useContext} from "react"
import Login from "../registration/Login.jsx"
import Logout from "../registration/Logout.jsx"
import {UserContext} from "../context/UserContext.jsx"

function Navbar(){
    const {user} = useContext(UserContext)

    return(
        <div className="navbar mb-12 shadow-lg bg-base-100">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost normal-case text-xl">Video Viewer</a>
            </div>
            <div className="flex-none">
                {(user === null) ? <Login/> : <Logout/>}
            </div>
        </div>
    )
}

export default Navbar;
