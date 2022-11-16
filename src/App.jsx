import {BrowserRouter, Route ,Routes} from 'react-router-dom';

import NavBar from './components/navBar/NavBar.js';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import './App.css';
import ItemDetailContainer from './components/itemDetailContainer';
import Cart from './components/cart';
import React from 'react';
import CartProvider from './context/cartContext';







function App() {
  return (
    <BrowserRouter>
    <CartProvider>
    <div className="App">
        <nav className='NavBar'>
          <NavBar />
        </nav>
        
    </div>
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/categorias/:categoriaId" element={<ItemListContainer />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
      </Routes>
    </CartProvider>
    </BrowserRouter>
    
    
    
  
  );
}

export default App;
