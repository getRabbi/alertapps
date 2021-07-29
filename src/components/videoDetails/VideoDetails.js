import React from 'react'
import VideoDetailsCard from './VideoDetailsCard'
import VideoDetailsSIdebar from './VideoDetailsSIdebar';

import './VIdeoDetails.css';

function VideoDetails() {
    return (
        <div className ="vid__det__main">
            <div className = "vid__det__body">
                <VideoDetailsCard
                    title = "This is my first video"
                    views = "2.3M views"
                    date = "jul 06 21"
                    channelImage = "/images/slider-scale.jpg"
                    channelName = "alert"
                    channel = "rubuil"
                    image = "/images/YouTube.jpg"
                    like = "228K"
                    dislike = "899"
                    descripTion = "Hi this is image taken from google you will see the image link in next update "
                    subsriber = "299M follwer"

                />
            </div>
            <div className = "vid__siderbar">
                <VideoDetailsSIdebar />
            </div>
            
        </div>
    )
}

export default VideoDetails
