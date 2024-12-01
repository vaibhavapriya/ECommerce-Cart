import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter} from "@fortawesome/free-solid-svg-icons";

function Navbar({filterOpt,setfilterOpt}) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const openCart = () => {
    setIsCartOpen(true);
  };
  const submit=(e) => {
    setIsCartOpen(false);
    setfilterOpt(e.target.value);
  };

  return (
    <div className='close'>
      {
      isCartOpen && (
        <label name='form'>
        <select name="type" value={filterOpt} onChange={submit} required>
          <option value="all">All</option>
          <option value="electronics">electronics</option>
          <option value="jewelery">jewelery</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
        </select>
        </label>
      )
     }
     <button className='fil' onClick={openCart}><FontAwesomeIcon icon={faFilter} /></button>
    </div>
  )
}

export default Navbar