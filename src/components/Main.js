import React, { useState } from 'react'
import '../styles/Main.css'
import {Link } from 'react-router-dom';
import { darkTheme,lightTheme } from '../theme/Theme'
// import axios from 'axios'
// import {format} from 'timeago.js'
const Main = ({theme,id}) => {

    const [card] = useState([
        {id:1},{id:2},{id:3}, {id:1},{id:2},{id:3}, {id:1},{id:2},{id:3}, {id:1},{id:2},{id:3},
        {id:1},{id:2},{id:3}, {id:1},{id:2},{id:3}, {id:1},{id:2},{id:3}, {id:1},{id:2},{id:3},
    ])
   


  return (
    <div className='main' style={{backgroundColor:theme?darkTheme.bg:lightTheme.bg, color:theme?darkTheme.text:lightTheme.text}}>
        
        
        {
        card.map(a=>

            <Link key={a._id} style={{backgroundColor:theme?darkTheme.bg:lightTheme.bg, color:theme?darkTheme.text:lightTheme.text}} to={`/video/${a.id}`}>
            
                <div className="cards" style={{ display: id? 'flex' : null, width: id? '320px' : '280px'}}>
                    <div className="topcard">
                        <img style={id?{ width:'160px',height:'90px'}:null} src="https://kinsta.com/wp-content/uploads/2021/07/how-to-become-a-web-developer-1024x512.jpg" alt="" />
                    </div>
                    <div className="videodesc" style={{padding:id?'0' : '15px 5px'}}>
                        <div className="channelogo" style={id?{ display:'none'}:null}>
                        <div>
                            <img  src='https://velog.velcdn.com/images/zueon/post/443674ed-b521-495d-8ea6-11062f973e88/image.jpeg' alt="" />
                        </div>
                        </div>
                        <div className="videotitle">

                            
                            <p className="videoname">
                              Become a expert in MERN stack
                            </p>
                        

                            <p className="channelname">
                                MERN stack
                            </p>
                            <div className="viewanddate" style={{fontSize:'10px'}}>
                            <p>0 views</p>
                            {/* <p>{format('2023-10-03T11:17:46.157+00:00')}</p> */}
                            <p>2 hours ago</p>
                            </div>
                        </div>
                    </div>
                </div>
         </Link>
        )}
    </div>
  )
}

export default Main