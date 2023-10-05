import React from 'react'
import '../styles/Navbar.css'
import { darkTheme,lightTheme } from '../theme/Theme'
const Navbar = ({setTheme,theme,setMenu,menu}) => {


  return (
    <div className='navbar' style={{backgroundColor:theme?darkTheme.bg:lightTheme.bg, color:theme?darkTheme.text:lightTheme.text } }>

        <div className="startnav">
           <div className="burg" onClick={()=>setMenu(!menu)}>
           <span class="material-symbols-outlined">
            menu
            </span>
           </div> 
           <div className="logo">
            <img src="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg?w=360" alt="" />
      
            <div className="logoname">
                PrimeTube
            </div>
            </div>
        </div>
            <div className="midnav">
                <div className="searchbar" >
                    <input type="text" placeholder='search' style={{backgroundColor:theme?darkTheme.bg:lightTheme.bg, color:theme?darkTheme.text:lightTheme.text } } />
                    <button style={{backgroundColor:theme?darkTheme.bg:lightTheme.bg, color:theme?darkTheme.text:lightTheme.text } }>
                    <span class="material-symbols-outlined">
                    search
                    </span>
                    </button>
                </div>
            </div>
            <div className="endnav">
             
                    <div className="video">
                    <span class="material-symbols-outlined">
                    video_call
                    </span>
                    </div>
                 
             
                    <div className="navsignin">
                    <span class="material-symbols-outlined">
                    account_circle
                    </span>
                   
                    </div>
               
            </div>

    </div>
  )
}

export default Navbar