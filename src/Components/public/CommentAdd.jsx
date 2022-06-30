import React, {useState, useContext} from "react"
import {CommentsContext} from "../context/CommentsContext.jsx"
import {VideoComponentsContext} from "../pages/Video.jsx"
import {UserContext} from "../context/UserContext.jsx"

function CommentAdd(){
    const [commentText, setCommentText] = useState("")
    const {addComment} = useContext(CommentsContext)
    const {video_name} = useContext(VideoComponentsContext)
    const {user} = useContext(UserContext)

    function handleChange(e){
        setCommentText(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if (commentText !== ""){
            let newComment = {
                username: user,
                comment: commentText
            }
            setCommentText("")
            addComment(video_name, newComment)
        }
    }

    return(
        <>
            {(user !== null) ?
            (
                <div className="card bg-neutral text-neutral-content p-5 lg:w-3/5 md:w-4/5 sm:w-11/12 w-max m-auto">
                    <form className="flex flex-row gap-2.5" onSubmit={handleSubmit}>
                        <input className="input basis-3/4" value={commentText} onChange={handleChange} placeholder="Add a comment..."/>
                        <button className="btn basis-1/4" type="submit">Submit</button>
                    </form>
                </div>
            ) :
            (
              <p className="text-slate-400 text-center text-xl">You should be logged in to write a comments</p>
            )}
        </>
    )
}

export default CommentAdd;