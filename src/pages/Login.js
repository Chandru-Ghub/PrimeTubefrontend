import React, { useState } from 'react'
import '../styles/Login.css'
import { darkTheme,lightTheme } from '../theme/Theme'
import { useNavigate } from 'react-router-dom'
const Login = ({theme}) => {

    const Themes = theme?darkTheme:lightTheme
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    // const navigate = useNavigate()
    function handleLogin(e){
        e.preventDefault()

    }

    function handleRegister(e){
        console.log(name,email,password);
        e.preventDefault()

    }

  return (
    <div className='loginPage' style={{backgroundColor:Themes.bg}}>
        <div className="logincon" style={{backgroundColor:Themes.bg,color:Themes.text, border: `1px solid ${Themes.soft}`}}>
            <h2>Sign in</h2>
            <p className="londes">to continue to PrimeTube</p>

            <form action="" className='signin sinp' >
                <input type="text" placeholder='username' onChange={(e)=>setName(e.target.value)} style={{color:Themes.text}}/>
                <input type="text" placeholder='password' onChange={(e)=>setPassword(e.target.value)} style={{color:Themes.text}}/>
               <p><button onClick={handleLogin} style={{backgroundColor:Themes.bg,color:Themes.text, border: `1px solid ${Themes.soft}`}}>Sign in</button></p>
            </form>
            <h2>or</h2>

            <form action="" className='signup sinp'>
                <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='username' style={{color:Themes.text}} />
                <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder='email' style={{color:Themes.text}} />
                <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder='password' style={{color:Themes.text}} />
               <p> <button onClick={handleRegister} style={{backgroundColor:Themes.bg,color:Themes.text, border: `1px solid ${Themes.soft}`}}>Sign up</button></p>
            </form>
        </div>
        <div className="lhns">
            <p className="eng">
                English(USA)
            </p>
            <ul className="ft">
                <li>Help</li>
                <li>Privacy</li>
                <li>Terms</li>
            </ul>
        </div>
    </div>
  )
}

export default Login