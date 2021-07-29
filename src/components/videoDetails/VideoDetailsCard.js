import React from 'react'
import { Avatar } from '@material-ui/core'
import './VideoDetailsCard.css'

function VideoDetailsCard({ image, title, channelImage, channelName, 
    views, date, like, dislike, subsriber, descripTion,channel 
    }) {
    return (
        <div className= "vid__card__main">
            <div className ="vid__card__body">
                <div className ="vid__card__content">
                    <img className ="vid__card__image" src = {image} alt="" />
                    <div className = "vid__card__title">
                        <h3>{title}</h3>
                            <div className = "vid__card__like">
                                <p>{views}.{date}</p>
                                <div className ="like__body">
                                    <span> {like} </span>
                                    <span> {dislike} </span>
                                </div>
                                
                            </div>
                    </div>
                    <div className = "vid__card__descr">
                        <Avatar
                            className = "vid__card__avatar"
                            alt = {channel}
                            src = {channelImage}
                        />
                        <div className = "vid__card__chInfo">
                            <h4> {channelName} </h4>
                            <p className ="subsriber"> {subsriber} </p>
                            <p className ="descripTion"> {descripTion} </p>
                        </div> 
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default VideoDetailsCard
