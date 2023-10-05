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
                    </span>Home
                </li>
                <li onClick={()=>navigate('/trends')}>
                    <span class="material-symbols-outlined">
                    explore
                    </span>explore
                </li>
                <li onClick={()=>navigate('/subscription')}>
                    <span class="material-symbols-outlined">
                    subscriptions
                    </span>subscriptions
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
                    </span>Library
                </li>
                <li>
                    <span class="material-symbols-outlined">
                    history
                    </span>History
                </li>

                <hr className='sideline' style={theme?{ border: `0.5px solid ${darkTheme.lines}`} :{ border: `0.5px solid ${lightTheme.lines}`}} />
                <li>
                    <span class="material-symbols-outlined">
                    library_music
                    </span>Music
                </li>
                
                <li>
                    <span class="material-symbols-outlined">
                 sports_esports
                    </span>Gaming
                </li>
                <li>
                    <span class="material-symbols-outlined">
                   news
                    </span>News
                </li>
                <li>
                    <span class="material-symbols-outlined">
                    smart_display
                    </span>Live
                </li>
                <li>
                    <span class="material-symbols-outlined">
                   settings
                    </span>Settings
                </li>

                <hr className='sideline' style={theme?{ border: `0.5px solid ${darkTheme.lines}`} :{ border: `0.5px solid ${lightTheme.lines}`}} />
                <li>
                    <span class="material-symbols-outlined">
                   report
                    </span>Report
                </li>
                <li>
                    <span class="material-symbols-outlined">
                   help
                    </span>Help
                </li>
                <li onClick={changeTheme} className='theme'>
                    <span class="material-symbols-outlined">
                   dark_mode
                    </span>{theme?'Light':'Dark'} Mode
                </li>
                
            </ul>
        </div>
        
        </div>  
    </div>
  )
}

export default Sidebar