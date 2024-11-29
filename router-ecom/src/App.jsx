import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Cart from './components/Cart.jsx'
import  List from './components/List.jsx'
import Fav from './components/Fav.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from './components/heart-solid.svg'

function App() {  
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setfavItems] = useState([]);

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const removeFromFav = (productId) => {
    setfavItems(favItems.filter((item) => item.id !== productId));
  };


  return (
    <Router>
      <div className="hhead">
      <div className="head">
                <h1><Link to="/">SHOPPERS</Link></h1>
                <h2>
                    <button><Link to="/cart"><FontAwesomeIcon icon={faCartShopping} />:{cartItems.length}</Link></button>
                    <button className="icon"><Link to="/favorites"><FontAwesomeIcon icon={faHeart} /></Link></button>
                </h2>
      </div>    
      </div>
      
      <Routes>
        <Route path="/" element={<div>
          <List cartItems={cartItems} setCartItems={setCartItems} favItems={favItems} setfavItems={setfavItems}/>
          </div>}>
        </Route>
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}></Route>
        <Route path="/favorites" element={<Fav favItems={favItems}  removeFromFav={removeFromFav} />}></Route>
      </Routes>
    </Router>

  )
}

export default App
