import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Home from "../components/pages/home/Home"
import Products from "../components/pages/products/Products"
import Orders from "../components/pages/orders/Order"
import Contact from "../components/pages/contact/Contact"
import {Container} from "react-bootstrap"






function RouterScreen() {
  return (
    <Container className='md-4' >
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </Container>
  )
}

export default RouterScreen