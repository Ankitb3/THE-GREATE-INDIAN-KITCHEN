import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './views/home/Home';
import Signup from './views/Signup/Signup';
import Login from './views/login/Login';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App