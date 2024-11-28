import { useState } from 'react'
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
    <>
      <Navbar cartCount={cartItems.length} openCart={openCart} openFav={openFav} logo={logo}/>
      {
            isCartOpen && (
              <Cart cartItems={cartItems} closeCart={closeCart} removeFromCart={removeFromCart} />
            )
      }
      {
            isFavOpen && (
              <Fav favItems={favItems} closeFav={closeFav} removeFromFav={removeFromFav} />
            )
      }
      <List cartItems={cartItems} setCartItems={setCartItems} favItems={favItems} setfavItems={setfavItems}/>
    </>
  )
}

export default App
