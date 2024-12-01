import React, {useState,useCallback,useEffect} from 'react'

function Quantity({item,cartItems,setCartItems}) {
  let [quantity,setquantity]= useState(item.quantity);

  const ChangeQ = (e) =>{
    const newQuantity = Number(e.target.value.trim());
    setquantity(newQuantity);
    const updatedCartItems = cartItems.map((citem) =>
      citem.id === item.id ? { ...citem, quantity: newQuantity } : citem
    );
    setCartItems(updatedCartItems);;
  }
  const addOne= () =>{
    const newQuantity = quantity + 1;
    setquantity(newQuantity);
    const updatedCartItems = cartItems.map((citem) =>
      citem.id === item.id ? { ...citem, quantity: newQuantity } : citem
    );
    setCartItems(updatedCartItems);
  }
  const subOne= () =>{
    if(quantity>1){
      const newQuantity = quantity - 1;
      setquantity(newQuantity);
      const updatedCartItems = cartItems.map((citem) =>
        citem.id === item.id ? { ...citem, quantity: newQuantity } : citem
      );
      setCartItems(updatedCartItems);
    }
    else{
      alert('remove the product');
    }
    
  }
  return (
    <div>
        <button onClick={subOne}>-</button>
        <input className='in' type='number'min={1} value={quantity} onChange={ChangeQ}></input>
        <button onClick={addOne}>+</button>
    </div>
  )
}

export default Quantity