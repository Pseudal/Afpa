import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from './components/admin/Create';
import Login from './components/admin/Login';
import Home from './components/Public/Home';
import Navi from './components/Public/Navi';
import Error from './components/404';
import Foot from './components/Public/Foot';
import Register from './components/Public/Register';
import RegisterA from './components/admin/RegisterA';
import PrivateRoute from "./components/admin/PrivateRoute";
import Produits from './components/Public/Produits';
import Dash from './components/admin/Dashboard.js';
import AddProduct from './components/admin/AddProduct';
import ModProduct from './components/admin/ModProduct';
import Mention from './components/Public/Mention';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>    
          <Route element={<Navi />}>
              <Route path="Login" element={<Login />} />
              <Route path="Register" element={<Register />} />
              <Route path="Mention%20Légale" element={<Mention />} />
              <Route path="New%20User" element={<PrivateRoute><RegisterA /></PrivateRoute>} />
              <Route path="AddProduct" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
              <Route path="ModProduct" element={<PrivateRoute><ModProduct /></PrivateRoute>} />
              <Route path="Dashboard" element={<Dash/>} />
            <Route element={<Foot />}>
              <Route path="Produits" element={<Produits/>} />
              <Route path="/" element={<Home />} />
            </Route>
          </Route>
            <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;