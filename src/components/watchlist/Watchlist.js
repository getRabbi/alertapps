import React from 'react'
import WatchCard from './WatchCard'
import './Watchlist.css'

function Wacthlist() {
    return (
        <div className = "wat__main">
            <div className= "wat__videos__body">
                <p className ="wat__history"> Watch history </p>
                <p> Today </p>
                <div className = "wat__videos">
                    
                        <WatchCard 
                            title = "joshuna rawson image from unplash"
                            views = "2.3M views"
                            timestamp = "3 days"
                            channelImage = "/images/joshua-rawson-harris-1.jpg"
                            channel = "joshua"
                            image = "/images/joshua-rawson-harris-3.jpg"
                            channelInfo = "This is my first react-projects for bussines purpose keep our team on your prayer- Thanks"
                        />
                    
                    
                </div>
                <hr  style={{
                    height: .5 
                }}/>
                <div className = "wat__videos">
                    <WatchCard 
                            title = "pawel szmanski image from unplash"
                            views = "1.2M views"
                            timestamp = "10 days"
                            channelImage = "/images/slider-scale.jpg"
                            channel = "pawel"
                            image = "/images/pawel-szvmanski-1.jpg"
                            channelInfo = "This is my first react-projects for bussines purpose keep our team on your prayer- Thanks"
                        />
                </div>
                <hr  style={{
                    height: .5 
                }}/>
                <div className = "wat__videos">
                    <WatchCard 
                            title = "fine art from joshua rawson"
                            views = "2.3M views"
                            timestamp = "3 days"
                            channelImage = "/images/slider-scale.jpg"
                            channel = "rawson"
                            image = "/images/joshua-rawson-harris-1.jpg"
                            channelInfo = "This is my first react-projects for bussines purpose keep our team on your prayer- Thanks"
                        />
                </div>
                <hr  style={{
                    height: .5 
                }}/>
                <div className = "wat__videos">
                    <WatchCard 
                            title = "image taken by joshua rawson in philipine"
                            views = "2.3M views"
                            timestamp = "3 days"
                            channelImage = "/images/slider-scale.jpg"
                            channel = "joshua"
                            image = "/images/joshua-rawson-harris-2.jpg"
                            channelInfo = "This is my first react-projects for bussines purpose keep our team on your prayer- Thanks"
                        />
                </div>
                <hr  style={{
                    height: .5 
                }}/>
            </div>


            <div className= "wat__content">
                <div className= "wat__content__search">
                    <input type= "text" placeholder= "Search watch history" />
                </div>
                <hr  style={{
                    height: .5 
                }}/>
                <div className= "wat__content__type">
                    <div className= "wat__content__his">
                        <p> history type </p>
                    </div>
                    <hr  style={{
                    height: .5 
                }}/>
                    <div className= "wat__content__his">
                        <p> Watch history <span> <input type= "radio" /> </span></p>
                    </div>
                    <hr  style={{
                    height: .5 
                }}/>
                    <div className= "wat__content__his">
                        <p> Community <span> <input type= "radio" /> </span></p>
                    </div>
                    <hr  style={{
                    height: .5 
                }}/>
                </div>
                <div className = "wat__content__settings">
                    <p> clear all watch history</p>
                </div>
                <div className = "wat__content__settings">
                    <p> Pause watch history</p>
                </div>
                <div className = "wat__content__settings">
                    <p> Manage all history</p>
                </div>
                <div className = "wat__content__settings">
                    <p> Comments</p>
                </div>
                <div className = "wat__content__settings">
                    <p> Live chat</p>
                </div>
            </div>
        </div>
    )
}

export default Wacthlist
