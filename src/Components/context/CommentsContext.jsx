import React, {useState, createContext} from "react"

export const CommentsContext = createContext()

function CommentsProvider({children}){
    const [comments, setComments] = useState([{"test_video_1": {username: "User 1", comment: "comment 1"}}, {"test_video_2": {username: "User 2", comment: "comment 2"}}, {"test_video_1": {username: "User 3", comment: "comment 3"}}])
    const [commentsToggled, setCommentsToggled] = useState(true)

    function addComment(video_name, commentBody){
        let newComment = {}
        newComment[video_name] = commentBody
        setComments((prevComment) => ([...prevComment, newComment]))
    }

    function toggleHandleChange(){
        setCommentsToggled(!commentsToggled)
    }

    return(
        <CommentsContext.Provider value={{addComment, comments, commentsToggled, toggleHandleChange}}>
            {children}
        </CommentsContext.Provider>
    )
}

export default CommentsProvider;