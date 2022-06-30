import React, {createContext, useState, useEffect} from "react"

export const VideoContext = createContext()


function getVideosData(r) {
    const file_names = r.keys().map((file_name) => {
        return file_name.substr(0, file_name.lastIndexOf(".")).replace(/[.]|[/]/g, "")
    });
    const file_srcs = r.keys().map(r);

    const files_data = file_names.reduce((obj, element, index) => {
        return {...obj, [element]: file_srcs[index]}
    }, {})

    return files_data
}


function VideoProvider({children}){
    const [videoData, setVideoData] = useState({});


    useEffect(() => {
        let files_data = getVideosData(require.context('../../../public/videos_data/', false, /\.mp4$/));
        setVideoData(files_data)
    }, [])

    return(
        <VideoContext.Provider value={{videoData}}>
            {children}
        </VideoContext.Provider>
    )
}

export default VideoProvider;