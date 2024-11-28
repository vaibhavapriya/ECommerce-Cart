import React , { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";

function List({cartItems, setCartItems,favItems, setfavItems}) {
    const [products, setProducts] = useState([]);//useEffect
    console.log(products);
    //fetch api using useEffect
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        console.log(products);
    }, []);
    const addcart = (product) => {
        if (cartItems.find((item) => item.id === product.id)) {
            alert('Product already in cart');
        }
        else {
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
        <div className='items'>
            {products.map((product) => (
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