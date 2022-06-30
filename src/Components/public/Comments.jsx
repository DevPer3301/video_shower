import React from "react"
import CommentsStats from "./CommentsStats.jsx"
import CommentAdd from "./CommentAdd.jsx"
import CommentsContent from "./CommentsContent.jsx"

function Comments(){

    return(
        <>
            <CommentsStats/>
            <CommentAdd/>
            <CommentsContent/>
        </>
    )
}

export default Comments;