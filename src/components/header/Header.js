import React from 'react'
//imports icon from material icons
import HomeIcon from '@material-ui/icons/Home';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import StarBorderSharpIcon from '@material-ui/icons/StarBorderSharp';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import { Link } from 'react-router-dom';

//import style from header css

import './Header.css' 
function Header() {
    return (
        <div className = "header">
            {/* <div className ="toggler__menu__size"> <BurgerMenu /> </div> */}
            <Link to= {'/'}  className= "Link" > <img className = "logo" src = "/images/pixarlog.png" alt = "Logo"  /> </Link>
            <nav>
                <ul className = "header__nav">
                    <li className = "menu__items"> <button className = "menu__button"> <HomeIcon className= "menu__logo" /> <span className ="menu__span"> <Link to= {'/'}  className= "Link" > Home </Link> </span> </button> </li>
                    <li className = "menu__items"> <button className = "menu__button"> <LibraryAddIcon className= "menu__logo" /> <span className ="menu__span"> <Link to= {'/watchlist'} className= "Link"> watchlist </Link> </span> </button> </li>
                    <li className = "menu__items"> <button className = "menu__button"> <StarBorderSharpIcon className= "menu__logo" /> <span className ="menu__span"> <Link to= {'/'}  className= "Link" > premium </Link> </span> </button> </li>
               </ul>  
               <div className= "search__icon">
                    <input type= "text" placeholder= "search" />
                    <SearchOutlinedIcon className= "input__button" />  
                </div>    
            </nav>
            <Link to = {'/login'} className = "Link"> <p className= "sign__up" > Sign Up </p> </Link>
            <Link to= {'/login'} className= "Link">
             <PersonOutlineRoundedIcon className = "user__logo"  />
            </Link>            
        </div>
    )
}

export default Header
