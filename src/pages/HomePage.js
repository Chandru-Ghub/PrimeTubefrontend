import React from 'react'
import { useState } from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import { Route, Routes } from 'react-router-dom';
import Video from './Video';
import Login from './Login';


const HomePage = ({type}) => {
    

  
  const [theme,setTheme] = useState(true)
  const [menu,setMenu] = useState(true)
  // console.log(localStorage.getItem('mytheme'));
  // console.log(type);
  return (


    <div className="App">
          <Navbar setTheme = {setTheme} theme={theme} setMenu={setMenu} menu={menu}/>
          <div className="maincon">
            <Sidebar setTheme = {setTheme} theme={theme} menu ={menu} />
        <Routes>
          <Route path='/' element={<Main setTheme = {setTheme} theme={theme} type={type} />}/>
          <Route path='/video/:id' element={<Video  setTheme = {setTheme} theme={theme}/>}/>
          <Route path='/login' element={<Login theme={theme} />}/>
        </Routes>
          </div>
    </div>
  )
}

export default HomePage;