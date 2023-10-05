import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/HomePage';


function App() {

  return (
    <div className="App">

      <BrowserRouter>
   {/* <Home/> */}
        <Routes>
          <Route path='*' element={   <Home type='random'/>}/>
          <Route path='/trends' element={   <Home type='trend' />}/>
          <Route path='/subscription' element={   <Home type='sub' />}/>
        </Routes>
      
      </BrowserRouter>
        
    </div>
  );
}

export default App;
