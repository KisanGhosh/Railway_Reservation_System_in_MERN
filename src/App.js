import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Login from './components/Log In/Login';
import Register from './components/Register/Register';
import Title from './components/Title';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <div>
        <Title/> 
        <Menu/>
        {/* <Home/> */}
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
