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
                    <span class="material-symbols-outlined l">
                        home
                    </span><span className='pp'>Home</span>
                </li>
                <li onClick={()=>navigate('/trends')}>
                    <span class="material-symbols-outlined l">
                    explore
                    </span><span className='pp'>explore</span>
                </li>
                <li onClick={()=>navigate('/subscription')}>
                    <span class="material-symbols-outlined l">
                    subscriptions
                    </span><span className='pp'>subscriptions</span>
                </li>
        
                <>
                <hr className='sideline' style={theme?{ border: `0.5px solid ${darkTheme.lines}`} :{ border: `0.5px solid ${lightTheme.lines}`}} />
               
                <li>
                   
                    <div className="signside" onClick={()=>navigate('/login')}>
                      <p >
                      Sign in to like ,comment and subscribe
                      </p>
                        <button className='btnsignin'>
                        <span class="material-symbols-outlined l">
                    <span class="material-symbols-outlined l">
                    account_circle
                    </span>
                    </span>
                            SIGN IN</button>
                    </div>
                </li>
                </>
                <hr className='sideline' style={theme?{ border: `0.5px solid ${darkTheme.lines}`} :{ border: `0.5px solid ${lightTheme.lines}`}} />
        
                <li>
                    <span class="material-symbols-outlined l">
                    video_library
                    </span><span className='pp'>Library</span>
                </li>
                <li>
                    <span class="material-symbols-outlined l">
                    history
                    </span><span className='pp'>History</span>
                </li>

                <hr className='sideline' style={theme?{ border: `0.5px solid ${darkTheme.lines}`} :{ border: `0.5px solid ${lightTheme.lines}`}} />
                <li>
                    <span class="material-symbols-outlined l">
                    library_music
                    </span><span className='pp'>Music</span>
                </li>
                
                <li>
                    <span class="material-symbols-outlined l">
                 sports_esports
                    </span><span className='pp'>Gaming</span>
                </li>
                <li>
                    <span class="material-symbols-outlined l">
                   news
                    </span><span className='pp'>News</span>
                </li>
                <li>
                    <span class="material-symbols-outlined l">
                    smart_display
                    </span><span className='pp'>Live</span>
                </li>
                <li>
                    <span class="material-symbols-outlined l">
                   settings
                    </span><span className='pp'>Settings</span>
                </li>

                <hr className='sideline' style={theme?{ border: `0.5px solid ${darkTheme.lines}`} :{ border: `0.5px solid ${lightTheme.lines}`}} />
                <li>
                    <span class="material-symbols-outlined l">
                   report
                    </span><span className='pp'>Report</span>
                </li>
                <li>
                    <span class="material-symbols-outlined l">
                   help
                    </span><span className='pp'>Help</span>
                </li>
                <li onClick={changeTheme} className='theme'>
                    <span class="material-symbols-outlined l">
                   dark_mode
                    </span><span className='pp'>{theme?'Light':'Dark'} Mode</span>
                </li>
                
            </ul>
        </div>
        
        </div>  
    </div>
  )
}

export default Sidebar