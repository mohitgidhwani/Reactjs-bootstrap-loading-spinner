import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';

import Products from './Products';
import { useState } from 'react';
import Home from './Home';


function App() {

  
  const [load , setLoad] = useState(false)

  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
