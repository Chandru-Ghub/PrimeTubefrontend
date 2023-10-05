import React, { useState } from 'react'
import '../styles/Sidebar.css'
import { darkTheme,lightTheme } from '../theme/Theme'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({setTheme,theme,menu}) => {

    const navigate = useNavigate();

    const changeTheme = ()=>{
        // localStorage.setItem('mytheme', theme)
        setTheme(!theme)
    }
  return (
    <div className= {menu?'sidebar' :'hidebar'}>
    <div className='scrollbar' style={{backgroundColor:theme?darkTheme.bg:lightTheme.bg, color:theme?darkTheme.text:lightTheme.text}}>
        <div className="sidetop">
            <ul className="topmenu">
                <li onClick={()=>navigate('/')}>
                    <span class="material-symbols-outlined">
                        home
                    </span><p>Home</p>
                </li>
                <li onClick={()=>navigate('/trends')}>
                    <span class="material-symbols-outlined">
                    explore
                    </span><p>explore</p>
                </li>
                <li onClick={()=>navigate('/subscription')}>
                    <span class="material-symbols-outlined">
                    subscriptions
                    </span><p>subscriptions</p>
                </li>
        
                <>
                <hr className='sideline' style={theme?{ border: `0.5px solid ${darkTheme.lines}`} :{ border: `0.5px solid ${lightTheme.lines}`}} />
               
                <li>
                   
                    <div className="signside" onClick={()=>navigate('/login')}>
                      <p >
                      Sign in to like ,comment and subscribe
                      </p>
                        <button className='btnsignin'>
                        <span class="material-symbols-outlined">
                    <span class="material-symbols-outlined">
                    account_circle
                    </span>
                    </span>
                            SIGN IN</button>
                    </div>
                </li>
                </>
                <hr className='sideline' style={theme?{ border: `0.5px solid ${darkTheme.lines}`} :{ border: `0.5px solid ${lightTheme.lines}`}} />
        
                <li>
                    <span class="material-symbols-outlined">
                    video_library
                    </span><p>Library</p>
                </li>
                <li>
                    <span class="material-symbols-outlined">
                    history
                    </span><p>History</p>
                </li>

                <hr className='sideline' style={theme?{ border: `0.5px solid ${darkTheme.lines}`} :{ border: `0.5px solid ${lightTheme.lines}`}} />
                <li>
                    <span class="material-symbols-outlined">
                    library_music
                    </span><p>Music</p>
                </li>
                
                <li>
                    <span class="material-symbols-outlined">
                 sports_esports
                    </span><p>Gaming</p>
                </li>
                <li>
                    <span class="material-symbols-outlined">
                   news
                    </span><p>News</p>
                </li>
                <li>
                    <span class="material-symbols-outlined">
                    smart_display
                    </span><p>Live</p>
                </li>
                <li>
                    <span class="material-symbols-outlined">
                   settings
                    </span><p>Settings</p>
                </li>

                <hr className='sideline' style={theme?{ border: `0.5px solid ${darkTheme.lines}`} :{ border: `0.5px solid ${lightTheme.lines}`}} />
                <li>
                    <span class="material-symbols-outlined">
                   report
                    </span><p>Report</p>
                </li>
                <li>
                    <span class="material-symbols-outlined">
                   help
                    </span><p>Help</p>
                </li>
                <li onClick={changeTheme} className='theme'>
                    <span class="material-symbols-outlined">
                   dark_mode
                    </span><p>{theme?'Light':'Dark'} Mode</p>
                </li>
                
            </ul>
        </div>
        
        </div>  
    </div>
  )
}

export default Sidebar