import React from 'react'
import './VIdeoSidebarCard.css'


function VIdeoSidebarCard({ image, title, channelName,
    views, date
    }) {
    return (
        <div className = "det__said__body">
            <img className = "det__said__images" src = {image} alt= '' />

            <div className = "det__said__content">
                <h4 className=  'det__h4'> {title} </h4>
                <p className = "det__p"> {channelName} </p>
                <p className = "det__p2"> {views} . {date} </p>
            </div>
            
        </div>
    )
}

export default VIdeoSidebarCard
