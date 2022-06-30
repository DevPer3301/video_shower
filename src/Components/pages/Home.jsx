import React, {useContext, useEffect} from "react"
import {VideoContext} from "../context/VideoContext.jsx";
import VideoItem from "../public/VideoItem.jsx";
import {gapi} from "gapi-script"

const clientId = "687510174429-stq4gsnugh62mq0joeb0apsfnmcvcpm5.apps.googleusercontent.com"

function Home(){
    const {videoData} = useContext(VideoContext);
    const videoDataKeys = Object.keys(videoData)

    useEffect(() => {
        function start(){
            gapi.client.init({
                client_id: clientId,
                scope: ""
            })
        }

        gapi.load("client:auth2", start)
    })

    return(
        <div className="grid grid-cols-1 gap-8 mx-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {
                videoDataKeys.map((item, index) => <VideoItem key={index} index={index+1} video_name={item}/>)
            }
      </div>
    )

}


export default Home;