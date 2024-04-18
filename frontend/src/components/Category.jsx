import React, { useEffect, useState } from 'react'
import { UserContext } from '../App'
import { useContext } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
function Category() {
    const {ArrayData,category_unique} = useContext(UserContext)
    const [variable,setvariable] = useState('Laptop')
    const [text,settext] = useState('')
    const [filterData,setfilterData] = useState([])
    // const Handler =(e)=>{
    //     e.preventDefault()
    //     let lowertext = text.toLowerCase();
    //     const y = ArrayData.filter((item)=>{
    //             return item.desc.toLowerCase().includes(text)
    //     })
    //     setfilterData(y)
    // }
    useEffect(()=>{
        let lowertext = text.toLowerCase();
        const y = ArrayData.filter((item)=>{
                return item.desc.toLowerCase().includes(text)
        })
        setfilterData(y)
    },[text])

    useEffect(()=>{
        const x = ArrayData.filter((item)=>{
            return item.category===variable
        })
        setfilterData(x)
    },[variable])
    
  return (
    <>
        <div className='container'>
            <div className='row my-5'>
                <div className='col-3 py-4'>
                    <div className='row row-cols-1 g-3 my-3 px-4 py-4 border'>
                        {category_unique.map((item)=>{
                            return(
                                <div className='col _border text-center h5 px-2 py-2' onClick={()=>setvariable(item)}>{item}</div>
                            )
                        })}
                         
                    </div>
                </div>
                <div className='col-9'>
                    <div className='row my-5'>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{settext(e.target.value)}} />
                    </form>
                    </div>
                    <div className='row row-cols-3 g-4'>
                        {
                           filterData.map((item)=>{
                                return(
                                    <div className="col">
                                        <div class="card">
                                            <div class="card-body">
                                            <Link to ={`/description/${item.id}`}            className='description'>
                                                <h5 class="card-title">{item.name}</h5>
                                                <h6 class="card-title">{item.category}</h6>
                                                <p class="card-text">{item.desc}</p>
                                               </Link> 
                                                <h6 class="card-title">₹ {item.price} /-</h6>
                                                <div className='card_btn'>
                                                    <button>Add</button>
                                                    <span>1</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                )
                           }) 
                        } 
                    </div>
                </div>
                    
            </div>
        </div>
    </>
  )
}

export default Category