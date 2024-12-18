import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart.jsx'
import  List from './components/List.jsx'
import Fav from './components/Fav.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";


function App() {  
  // const [cartItems, setCartItems] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    // Retrieve cartItems from local storage on app load
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [favItems, setfavItems] = useState(() => {
    // Retrieve cartItems from local storage on app load
    const storedFav = localStorage.getItem('favItems');
    return storedFav ? JSON.parse(storedFav) : [];
  });
  const [total, setTotal]=useState(0);
  const [fin, setFin]=useState(0);

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const removeFromFav = (productId) => {
    setfavItems(favItems.filter((item) => item.id !== productId));
    
  };
  useEffect(()=>{localStorage.setItem('favItems', JSON.stringify(favItems));},[favItems])
  useEffect(() => {
    // Update local storage whenever cartItems change
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    let totalAmount = cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
    setTotal(totalAmount.toFixed(2));
    let discount= totalAmount-(totalAmount*.1);
    setFin(discount.toFixed(2));
}, [cartItems]);

  return (
    <Router>
      <div className="hhead">
      <div className="head">
                <h1><Link to="/">SHOPPERS</Link></h1>
                <h2>
                    <Link to="/cart"><button><FontAwesomeIcon icon={faCartShopping} />:{cartItems.length}</button></Link>
                    <Link to="/favorites"><button><FontAwesomeIcon icon={faHeart} /></button></Link>
                </h2>
      </div>    
      </div>
      
      <Routes>
        <Route path="/" element={<div>
          <List cartItems={cartItems} setCartItems={setCartItems} favItems={favItems} setfavItems={setfavItems} />
          </div>}>
        </Route>
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} setCartItems={setCartItems} total={total} fin={fin} />}></Route>
        <Route path="/favorites" element={<Fav favItems={favItems}  removeFromFav={removeFromFav} />}></Route>
      </Routes>
    </Router>

  )
}

export default App
