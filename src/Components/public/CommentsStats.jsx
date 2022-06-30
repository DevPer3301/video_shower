import React, {useContext} from "react"
import {CommentsContext} from "../context/CommentsContext.jsx"
import {VideoComponentsContext} from "../pages/Video.jsx"

function CommentsStats(){
    const {commentsToggled, toggleHandleChange} = useContext(CommentsContext)
    const {videoComments} = useContext(VideoComponentsContext)

    return(
        <div className="p-5 lg:w-3/5 md:w-4/5 sm:w-11/12 w-max m-auto">
            <div className="flex flex-row">
                <div className="basis-1/2">
                    <p className="text-xl text-center m-0 float-left"> {(videoComments.length !== 1) ? `${videoComments.length} Comments`  : "1 Comment"} </p>
                </div>
                <div className="basis-1/2">
                    <input type="checkbox" className="toggle float-right" checked={commentsToggled} onChange={toggleHandleChange}/>
                </div>
            </div>
        </div>
    )
}

export default CommentsStats;