import React , { useCallback, useEffect, useState } from 'react'
import Navbar from './Navbar.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";

function List({cartItems, setCartItems,favItems, setfavItems}) {
    const [filterOpt, setfilterOpt] = useState('all'); 
    const [products, setProducts] = useState([]);//useEffect
    const [display, setDisplay]=useState(products);
    console.log(products);
    //fetch api using useEffect
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        console.log(products);
    }, []);

    useEffect(() => {
        filterOpt === 'all'
        ? setDisplay(products)
        : setDisplay(products.filter((product) => product.category === filterOpt));
    }, [filterOpt,products]);

    const addcart = (product) => {
        if (cartItems.find((item) => item.id === product.id)) {
            alert('Product already in cart');
        }
        else {
            product.quantity = 1;
            setCartItems([...cartItems, product]);
    
        }
    }
    const fav = (product) => {
        if (favItems.find((item) => item.id === product.id)) {
            alert('Product already in favorites');
        }
        else {
            setfavItems([...favItems, product]);
        }
    }

  return (
    <div>
        <Navbar filterOpt={filterOpt} setfilterOpt={setfilterOpt}/>
        <div className='items'>
            {display.map((product) => (
                <div key={product.id} className='card'>
                    <img src={product.image} alt={product.title} className='img' />
                    <h2 className='title'>{product.title}</h2>
                    <p className='price'>₹{product.price}</p>
                    <div className='but'>
                        <button onClick={() => addcart(product)} className=''>Add to Cart</button>
                        <button onClick={() => fav(product)} className=''><FontAwesomeIcon icon={faHeart} /></button>
                    </div>   
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default List  