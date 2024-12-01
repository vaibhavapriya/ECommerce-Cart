import React ,{useState,useCallback,useEffect} from 'react'
import Quantity from './Quantity'

function Cart({ cartItems, removeFromCart,setCartItems ,total,fin}) {

  return (
    <div className='mmodal'>
            <div className='modal'>
                <h2 className=''>Your Cart</h2>
                {cartItems.length > 0 ? (
                    <div  className=''>
                        {cartItems.map((item) => (
                            <div key={item.id} className='mitem'>
                                <img src={item.image} alt={item.title} className='mimg' />
                                <div className='mh'>{item.title}</div> 
                                <div className='changes'>
                                <Quantity item={item} cartItems={cartItems} setCartItems={setCartItems}/>
                                <button onClick={() => removeFromCart(item.id)} className='mr'>Remove</button>
                                </div>

                            </div>
                        ))}
                    </div> 
                ) : (<p>Your cart is empty.</p>)}
                <h2>Total: {total}</h2>
                <h2>Special price: {fin}</h2>
                <button>BUY NOW</button>
            </div>
    </div>
  )
}

export default Cart