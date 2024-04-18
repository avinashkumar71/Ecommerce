import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../App'
import { NavLink,Link } from 'react-router-dom'
function Card({id,name,category,price,pn}) {
  const {ArrayData,AddToCart,ClearCart} = useContext(UserContext)
  return (
    <>
        <div className='col'> 
          <div class="card">
            <div class="card-body">
                <Link to ={`/description/${id}`} className='description'>
                  <div>
                    <h5 class="card-title">{name}</h5>
                    <p class="card-subtitle">{category}</p>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </Link>
                <h6 class="card-title">₹ {price} /-</h6>
                <div className='card_btn'>
                    <button onClick={()=>{AddToCart(id)}}>Add</button>
                    <span>{pn[id]}</span>
                </div>
            </div>
          </div>
          
        </div>
    </>
  )
}

export default Card