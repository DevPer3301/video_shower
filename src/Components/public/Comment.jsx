import React from "react"

function Comment({comment}){
    return(
        <div className="card bg-neutral text-neutral-content p-5 mt-5 lg:w-3/5 md:w-4/5 w-max m-auto">
            <div className="flex flex-col gap-x-1">
                <div>
                    <p className="text-xl font-bold text-purple-300">{comment.username}</p>
                </div>
                <div>
                    <p className="text-purple-400">{comment.comment}</p>
                </div>
            </div>
        </div>
    )
}

export default Comment;