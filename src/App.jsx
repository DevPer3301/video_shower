import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/layout/Navbar.jsx';
import Home from './Components/pages/Home.jsx';
import Video from './Components/pages/Video.jsx';
import VideoProvider from './Components/context/VideoContext.jsx';
import CommentsProvider from './Components/context/CommentsContext.jsx';
import UserProvider from './Components/context/UserContext.jsx';


function App() {
    return (
        <div className="App">
            <UserProvider>
                <VideoProvider>
                    <CommentsProvider>
                        <Navbar/>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Home/>} />
                                <Route path="/video/:video_name" element={<Video/>} />
                            </Routes>
                        </BrowserRouter>
                    </CommentsProvider>
                </VideoProvider>
            </UserProvider>
        </div>
    )
}

export default App;