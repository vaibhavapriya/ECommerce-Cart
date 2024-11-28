import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Cart from './components/Cart.jsx'
import  List from './components/List.jsx'
import Fav from './components/Fav.jsx'
import logo from './components/heart-solid.svg'

function App() {  const [cartItems, setCartItems] = useState([]);
  const [favItems, setfavItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavOpen,setIsFavOpen]=useState(false);
  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };
  const openFav = () => {
    setIsFavOpen(true);
  };

  const closeFav = () => {
    setIsFavOpen(false);
  };
  const removeFromFav = (productId) => {
    setfavItems(favItems.filter((item) => item.id !== productId));
  };


  return (
    <Router>
      <nav>
        <div><Link to="/">Shoppers</Link></div>
        <div><Link to="/cart"></Link>cart</div>
        <div><Link to="/favorites"></Link>fav</div>
      </nav>
      <Routes>
        <Route path="/" element={<div>
          <Navbar cartCount={cartItems.length} openCart={openCart} openFav={openFav} logo={logo}/>
          <List cartItems={cartItems} setCartItems={setCartItems} favItems={favItems} setfavItems={setfavItems}/>
          </div>}>
        </Route>
        <Route path="/cart" element={<Cart cartItems={cartItems} closeCart={closeCart} removeFromCart={removeFromCart}/>}></Route>
        <Route path="/favorites" element={<Fav cartItems={cartItems} setCartItems={setCartItems} favItems={favItems} setfavItems={setfavItems}/>}></Route>
      </Routes>
    </Router>

  )
}

export default App
