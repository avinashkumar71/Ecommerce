import React from 'react'
import Card from './Card'
import { useContext } from 'react'
import { UserContext } from '../App'
import Carausol from './Carausol'
function CardContainer() {
      const {ArrayData,particular_product} = useContext(UserContext)
    
  return (
    <>
        <Carausol/>
        <div class='container'>
            <div class="row row-cols-3 g-4 m-3">
                    {ArrayData.map((item)=>{
                            return <Card id={item.id} name={item.name} category={item.category} price={item.price} pn={particular_product}/>
                        })} 
            </div>
        </div>
    </>
  )
}

export default CardContainer