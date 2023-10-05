import React from 'react'
import { useParams } from 'react-router-dom'
import { darkTheme,lightTheme } from '../theme/Theme'
import '../styles/Video.css'
import '../styles/Comment.css'
import Comments from '../components/Comments'
import Main from '../components/Main'
const Video = ({theme}) => {
    const {id} = useParams()
  return (
    <div className='videopage'  style={{backgroundColor:theme?darkTheme.bg:lightTheme.bg, color:theme?darkTheme.text:lightTheme.text}}>
        {/* <p> videnum :{id}</p> */}
        <div className="videoContainer">
            <div className="vleft">
             
                   <div className="playvideo" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    {/* <iframe src="https://www.youtube.com/watch?v=dqwuNiOeyGs" frameborder="0" title='YouTube video player' allow='accelorometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe> */}
                         {/* <iframe width="100%" height="500" src="https://www.youtube.com/embed/mdBYIe9_fMo?si=OJUWAccOFmKbiyef" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                         <iframe width='260' height='420' className='iframe' src="https://www.youtube.com/embed/8KaJRw-rfn8?si=3Pz47k7ho_ogwyYD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                   </div>
                   <h2>Title of the video</h2>
                    <div className="options">
                            <div className="viewsDate">
                                50000 views jun 2023
                            </div>

                            <div className="likesandOthers">
                            
                            <span class="material-symbols-outlined">
                            thumb_up
                            </span>
                            123

                            <span class="material-symbols-outlined">
                            thumb_down
                            </span>Dislike

                            <span class="material-symbols-outlined">
                            share
                            </span>Share

                            <span class="material-symbols-outlined">
                            add_task
                            </span>Save

                            </div>
                            
                    </div>

                    <div className="channelandSub">
                        <div className="logoleft">
                            <div className='iiip'>
                            <div className='pimg'>
                                <img src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg" alt="" />
                            </div>
                            </div>
                            <div className="cnnlandsub">
                             <h4>   Kyo Tech</h4>
                                    <p className="numerofSub">185k subscribers</p>
                                    <p className="tdesc">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis laudantium, eos id eligendi non minus, cumque facilis illum pariatur cupiditate minima neque animi tenetur, voluptas recusandae quaerat voluptatum nemo temporibus!
                                    </p>
                            </div>
                        </div>

                        <div className="logoright">
                            <button className='subscribebtn'>
                                    SUBSCRIBE
                            </button>
                        </div>
                        
                    </div>
                    <hr className='cmtline' style={theme?{ border: `0.5px solid ${darkTheme.lines}`} :{ border: `0.5px solid ${lightTheme.lines}`}} />
                    <Comments theme={theme}/>

            </div>
            <div className="vright">
            <Main id={id}  theme={theme}/>

            </div>

        </div>
    </div>
  )
}

export default Video