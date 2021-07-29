import React from 'react'

import './WatchCard.css';

function WatchCard({ image, title, channel, views, timestamp,channelInfo }) {
    return (
        <div>
            <div className= "wcard__main">
            <img className ="wcard__thumbnail" src = {image} alt= "" />
            <div className ="wcard__body">
                 
                <div className = "wcard__text">
                    <h4>{ title }</h4>
                    <p> {channel} </p>
                    <p> {views}.{timestamp} </p>
                    <p className= "channelinfo"> {channelInfo} </p>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default WatchCard
