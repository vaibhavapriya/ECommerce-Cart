import React from 'react'

function Cart({ cartItems, removeFromCart }) {
  return (
    <div className='mmodal'>
            <div className='modal'>
                {/* <button onClick={closeCart} className='close'>X</button> */}
                <h2 className=''>Your Cart</h2>
                {cartItems.length > 0 ? (
                    <div  className=''>
                        {cartItems.map((item) => (
                            <div key={item.id} className='mitem'>
                                <img src={item.image} alt={item.title} className='mimg' />
                                <div className='mh'>{item.title}</div> 
                                <div>
                                <input type='number' min='1' size={25}></input>
                                <button onClick={() => removeFromCart(item.id)} className='mr'>Remove</button>
                                </div> 
                            </div>
                        ))}
                    <div>Total:{}</div>
                    <div>special price:{}</div>
                    <button>buy</button>
                    </div>
                    
                ) : (<p>Your cart is empty.</p>)}
                
            </div>
    </div>
  )
}

export default Cart