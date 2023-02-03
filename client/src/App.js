import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './views/home/Home';
import './App.css'
import Signup from './views/Signup/Signup';
import Login from './views/login/Login';
import Errorpage from './views/Errorpage/Errorpage';
import Booktable from './views/Booktable/Booktable';
import Myorder from './views/Myorders/Myorder';
import MyList from './views/MyList/MyList';
import Profile from './views/Profile/Profile';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booktable" element={<Booktable />} />
          <Route path="/myList" element={<MyList />} />

          <Route path="/myorders" element={<Myorder />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App