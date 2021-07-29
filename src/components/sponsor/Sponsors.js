import React from 'react'
import { Link } from 'react-router-dom';


import './Sponsors.css'

function viewers() {
    return (
        <div className = "sps__container">
            <div className = "sps__image"> 
               <Link to = {'https://www.bloomberg.com/asia.bloomberg.com/'}> <img className= "viewer__img" src = "/images/bbcn.webp" alt= ""/> </Link>
            </div>
            <div className = "sps__image"> 
                <img className= "viewer__img" src = "/images/dsd.jpg" alt= ""/>
            </div>
            <div className = "sps__image"> 
                <img className= "viewer__img" src = "/images/jamuna_tv.png" alt= ""/>
            </div>
            <div className = "sps__image"> 
                <img className= "viewer__img" src = "/images/espn.jpg" alt= ""/>
            </div>
            <div className = "sps__image"> 
                <img className= "viewer__img" src = "/images/blm.png" alt= ""/>
            </div>
            
        </div>
    )
}

export default viewers
