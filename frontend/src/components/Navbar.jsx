import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import { UserContext } from '../App'
import { useContext } from 'react'

function Navbar() {
  const {state,ClearCart} = useContext(UserContext)
  return (
    <>
       <div className='container'>
        <div className='row '>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand" href="#">MarKet.Com</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to="/category" className="nav-link">Category</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
            </ul>
            <Link to='/login'><div className='profile1.png'><img src="profile1.png" alt="" /></div></Link>
            <Link to='/cartpage'><img src="download.png" alt="" /></Link>
            <span className='total_item_no'>{state.total_item}</span>
            <button className="clear_cart" onClick={()=>{ClearCart()}}>Clear Cart</button>
            </div>
        </div>
        </nav>
        </div>
       </div>
    </>
  )
}

export default Navbar