import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

import './Nav.css'
function Navbar() {
    let navigate=useNavigate();
    function click(){
    navigate("/product");}
    function sc(){
        navigate("/one");}
  return (
    <div>
<button
  className='nav' onClick={click}
>
  Product
</button>
<button
  className='nav' onClick={sc}
>
  One
</button>
    </div>
  )
}

export default Navbar
