import React, {useContext, createContext} from "react"
import {useParams} from "react-router-dom"
import {VideoContext} from "../context/VideoContext.jsx"
import {CommentsContext} from "../context/CommentsContext.jsx"
import ReactPlayer from "../public/ReactPlayer.jsx"
import Comments from "../public/Comments.jsx"


export const VideoComponentsContext = createContext()

function Video(){
    const {video_name} = useParams()
    const {videoData} = useContext(VideoContext)
    const {comments} = useContext(CommentsContext)

    const videoSrc = videoData[video_name]

    let videoComments = comments.filter((item) => ((Object.keys(item)[0]) === video_name))

    return(
        <div>
            <VideoComponentsContext.Provider value={{videoComments, video_name}}>
                <ReactPlayer src={videoSrc}/>
                <Comments/>
            </VideoComponentsContext.Provider>
        </div>
    )
}

export default Video;