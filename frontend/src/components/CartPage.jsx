import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../App'
function CartPage() {
  const {ArrayData,particular_product,state,RemoveToCart} = useContext(UserContext)
  return (
    <>
        <div className='container'>
            <div className='row m-5'>
                <div className='col'>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">product name</th>
                      <th scope="col">unit price</th>
                      <th scope="col">qty</th>
                      <th scope="col">price</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                  {ArrayData.map((item)=>{
                      if(particular_product[item.id]>0){
                            return(
                              <tr>
                                  <td className='cart_info'><img src="download.png" alt="image not found" /></td>
                                  <td>{item.name}</td>
                                  <td>₹ {item.price}</td>
                                  <td>{particular_product[item.id]}</td>
                                  <td>₹ {particular_product[item.id]*item.price} </td>
                                  <td className='wrong_mark'><span onClick={()=>RemoveToCart(particular_product[item.id],item.id)}><img src="error-wrong-mark.jpg" alt="" /></span></td>
                              </tr>
                            )
                      }
                })}
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td>Total Amount</td>
                    <td>₹ {state.total_price}</td>
                  </tr>
                  </tbody>
                </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default CartPage