import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './views/home/Home';
import Singup from './views/singup/Singup';
import Login from './views/login/Login';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singup" element={<Singup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App