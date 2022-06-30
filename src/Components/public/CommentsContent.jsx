import React, {useContext} from "react"
import Comment from "./Comment.jsx"
import {VideoComponentsContext} from "../pages/Video.jsx"
import {CommentsContext} from "../context/CommentsContext.jsx"

function CommentsContent(){
    const {videoComments} = useContext(VideoComponentsContext);
    const {commentsToggled} = useContext(CommentsContext);

    const Comments = (videoComments.map((item, index) => {
                const comment = Object.values(item)[0]
                return <Comment key={index} comment={comment}/>
            }))

    return (
        <>
            {commentsToggled && Comments}
        </>

    )
}

export default CommentsContent;