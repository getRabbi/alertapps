import React from 'react'
import ImageSlider from '../slider/ImageSlider'
import Sponsors from '../sponsor/Sponsors'
import Movies from '../movie/Movies'
import Recent from '../recent/Recent'

import './Home.css'

function Home() {
    return (
        <div className = "main">
           
        <ImageSlider />   
        
        <Sponsors />

        <Movies />

        <Recent />

        

        </div>
    )
}

export default Home
