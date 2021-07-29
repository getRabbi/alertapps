import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './VideoCard.css'

function VideoCard({ image, title, channel, views, timestamp,channelImage }) {
    return (
        <div className= "card__main">
            <img className ="card__thumbnail" src = {image} alt= "" />
            <div className ="card__body">
                 <Avatar 
                        className = "card__avatar"
                        alt = {channel}
                        src = {channelImage}
                    />
                <div className = "card__text">
                    <h4>{ title }</h4>
                    <p> {channel} </p>
                    <p> {views}.{timestamp} </p>
                </div>
            </div>
            
        </div>
    )
}

export default VideoCard
