import { useState } from 'react'
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom';
import Product from './Components/Product';
import Navbar from './Components/Navbar';
import One from './Components/One';
import MainItem from './Components/MainItem';
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <MainItem />
    <Routes>
      <Route path='/' element={<h1>Home</h1>}></Route>
     <Route path='/product' element={<Product/>} />
     <Route path='/one' element={<One/>}/>
    </Routes>
    </BrowserRouter>
    
     
     
         </>
  )
}

export default App
