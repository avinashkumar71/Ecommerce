import React from 'react'
import { UserContext } from '../App'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
function Description() {
  const {ArrayData} = useContext(UserContext)
  const param = useParams()
  const prt = ArrayData.find((item)=>item.id===Number(param.productId))
  return (
    <>
      <div className='container'>
          <div className='row justify-content-center my-5'>
              <div className='col-4'>
              <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{prt.name}</h5>
                    <h6 class="card-title">{prt.category}</h6>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <h6 class="card-title">₹ {prt.price} /-</h6>
                    <div className='card_btn'>
                        <button>Add</button>
                        <span></span>
                    </div>
                  </div>
              </div>
              </div>
          </div>
      </div> 
    </>
  )
}

export default Description