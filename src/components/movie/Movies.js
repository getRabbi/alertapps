import React from 'react'
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import VideoCard from '../videocard/VideoCard';
import './Movie.css'
import { Link } from 'react-router-dom';

function Movies() {
    return (
        <div className = "recomend__main">
            <h2>Hot<span> <WhatshotSharpIcon /> <WhatshotSharpIcon /></span> </h2>
            <div className="recomend__body" >
                <div className= "recomend__videos">
                    
                    <div className = "rec__videos">
                        <Link to = "/details/:id" className = "details__link">
                        <VideoCard 
                            
                            title = "black and white taken from ana"
                            views = "2.3M views"
                            timestamp = "3 days"
                            channelImage = "/images/slider-scale.jpg"
                            channel = "anna"
                            image = "/images/ana-itonishvili-1.jpg"
                            
                        />
                        </Link>
                    </div>
                    
                    <div className = "rec__videos">
                         <Link to = "/details/:id" className = "details__link">
                        <VideoCard 
                            
                            title = "lighting image from joshua rawson"
                            views = "2.3M views"
                            timestamp = "3 days"
                            channelImage = "/images/slider-scale.jpg"
                            channel = "js rawson"
                            image = "/images/joshua-rawson-harris-1.jpg"
                            
                        />
                        </Link>
                    </div>
                    <div className = "rec__videos">
                         <Link to = "/details/:id" className = "details__link">
                        <VideoCard 
                            
                            title = "chaina capital nice art"
                            views = ".3M views"
                            timestamp = "11 month"
                            channelImage = "/images/slider-scale.jpg"
                            channel = "joshuna"
                            image = "/images/joshua-rawson-harris-9.jpg"
                            
                        />
                        </Link>
                    </div>
                    <div className = "rec__videos">
                         <Link to = "/details/:id" className = "details__link">
                        <VideoCard 
                            
                            title = "showing traffic from phlipines"
                            views = "2.3M views"
                            timestamp = "5 days"
                            channelImage = "/images/slider-scale.jpg"
                            channel = "rawson"
                            image = "/images/joshua-rawson-harris-13.jpg"
                            
                        />
                        </Link>
                    </div>
                    <div className = "rec__videos">
                         <Link to = "/details/:id" className = "details__link">
                        <VideoCard 
                            
                            title = "train journey photo takes by joshua"
                            views = "2.3M views"
                            timestamp = "3 days"
                            channelImage = "/images/slider-scale.jpg"
                            channel = "joshua"
                            image = "/images/joshua-rawson-harris-12.jpg"
                            
                        />
                        </Link>
                    </div>
                    <div className = "rec__videos">
                         <Link to = "/details/:id" className = "details__link">
                        <VideoCard 
                            
                            title = "light work on image by joshua agian"
                            views = "2.3M views"
                            timestamp = "3 days"
                            channelImage = "/images/slider-scale.jpg"
                            channel = "joshua"
                            image = "/images/joshua-rawson-harris-3.jpg"
                            
                        />
                        </Link>
                    </div>
                    <div className = "rec__videos">
                        <Link to = "/details/:id" className = "details__link">
                        <VideoCard 
                            
                            title = "Tclassic edit photo on lake"
                            views = "2.3M views"
                            timestamp = "3 days"
                            channelImage = "/images/slider-scale.jpg"
                            channel = "rubuil"
                            image = "/images/joshua-rawson-harris-4.jpg"
                            
                        />
                        </Link>
                    </div>
                    <div className = "rec__videos">
                         <Link to = "/details/:id" className = "details__link">
                        <VideoCard 
                            
                            title = "glass work taken by joshua rawson philipine"
                            views = "2.3M views"
                            timestamp = "3 days"
                            channelImage = "/images/slider-scale.jpg"
                            channel = "rubuil"
                            image = "/images/joshua-rawson-harris-2.jpg"
                            
                        />
                        </Link>
                    </div>
                
                </div>
            </div>
            
        </div>
    )
}

export default Movies
