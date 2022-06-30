import React from "react"

function ReactPlayer({src}){
    return(
        <div className="card bg-neutral text-neutral-content p-5 lg:w-3/5 md:w-4/5 sm:w-11/12 w-max m-auto">
            <video controls >
                <source src={src} type="video/mp4"/>
            </video>
        </div>
    )
}

export default ReactPlayer;