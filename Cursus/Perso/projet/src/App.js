import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from './components/admin/Create';
import Login from './components/admin/Login';
import Home from './components/Public/Home';
import Navi from './components/Public/Navi';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;