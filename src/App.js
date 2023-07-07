import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import {  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Login from './Component/Login';
import ProductAll from './Component/ProductAll';
import ProductDetail from './Component/ProductDetail';
import { useEffect, useState } from 'react';
import PrivateRouter from './Component/PrivateRouter';
import NormalMall from './Component/NormalMall';
import GraduationMall from './Component/GraduationMall';


function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log("login", authenticate)
  }, [authenticate])

  return (
    <div>
      <Header authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path='/' element={<ProductAll/>} />
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path='/products/:id' element={<PrivateRouter authenticate={authenticate}/>} />
        <Route path='/normal' element={<NormalMall />} />
        <Route path='/graduation'element={<GraduationMall />} />
      </Routes>
    </div>
  );
}

export default App;
