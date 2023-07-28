import React from 'react'
import "./navbar.scss"
import { Search, Notifications, ArrowDropDown } from "@mui/icons-material"
import { useState } from 'react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true)
        return () => (Window.onscroll = null);
    }
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className='container'>
        <div className='left'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="img not there">
            </img>
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
        </div>
        <div className='right'>
            <Search className='icon'/>
            <Notifications className='icon'/>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile pic"></img>
            <div className='profile'>
                <ArrowDropDown className='icon'/>
                <div className="options">
                    <span>Settings</span>
                    <span>Log Out</span>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
