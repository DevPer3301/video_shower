import React, {useContext} from "react"
import {Link} from "react-router-dom"

function VideoItem({index, video_name}){
    return(
        <div className="card bg-neutral text-neutral-content shadow-xl">
            <Link to={`/video/${video_name}`}>
                <div className="card-body">
                    <h2 className="card-title">Video #{index}</h2>
                </div>
            </Link>
        </div>
    )
}

export default VideoItem;