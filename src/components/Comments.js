import React from 'react'
import '../styles/Video.css'
import { darkTheme,lightTheme } from '../theme/Theme'
const Comments = ({theme}) => {

    const Themes = theme?darkTheme:lightTheme
    // console.log(Themes,theme);
  return (
    <div className='command'>
         <div className="videoComments">
            <div>
                <div className='pimg'>
                    <img src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg" alt="" />
                </div>
            </div>
                <form action="">
                    <input style={{border: `2px solid ${Themes.lines}`,color:Themes.text}} type="text" placeholder='Add comments' />
                    <div className='cmtbtns
                    '>
                        <button style={{border: `2px solid ${Themes.lines}`, color: Themes.text}} >command</button>
                        <button style={{border: `2px solid ${Themes.lines}`, color: Themes.text}}>cancel</button>
                    </div>
                </form>
         </div>
         <div className="publicCommand">
               <div>
               <div className='pimg'>
                    <img src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg" alt="" />
                </div>
               </div>
                <div className="pbcmt">
                    <div className="pbdetail">
                        <h4>John dee</h4>
                        <p className='dy'>3 days ago</p>
                    </div>
                    <p className="cmt">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam veritatis dicta, laborum inventore possimus totam ex laboriosam dignissimos incidunt dolore tempore voluptatibus, aliquid fuga debitis fugit odit harum vero aperiam!
                    </p>
                </div>
         </div>
    </div>
  )
}

export default Comments