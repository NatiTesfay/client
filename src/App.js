import './App.css';
import React from 'react';
import Navbar from './components/featurs/navbar.component/Navbar';
import Footer from './components/featurs/footer.components/Footer';
import RouterScreen from './routes/RouterScreen';
import Products from './components/pages/products/Products';





function App() {
  return (
    <>
      <Navbar/>    
      <RouterScreen/>
      <Products/>
      <Footer/>
    </>
  );
}

export default App;
