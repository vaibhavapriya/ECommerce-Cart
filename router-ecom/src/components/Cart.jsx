import React from 'react'
import './Modal.css'

function Cart({ closeCart, cartItems, removeFromCart }) {
  return (
    <div className='mmodal'>
            <div className='modal'>
                <button onClick={closeCart} className='close'>X</button>
                <h2 className=''>Your Cart</h2>
                {cartItems.length > 0 ? (
                    <div  className=''>
                        {cartItems.map((item) => (
                            <div key={item.id} className='mitem'>
                                <img src={item.image} alt={item.title} className='mimg' />
                                <div className='mh'>{item.title}</div>
                                <button onClick={() => removeFromCart(item.id)} className='mr'>Remove</button>
                            </div>
                        ))}
                    </div>
                ) : (<p>Your cart is empty.</p>)}
                
            </div>
    </div>
  )
}

export default Cart