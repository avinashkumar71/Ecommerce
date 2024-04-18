import './App.css'
import CardContainer from './components/CardContainer'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react'
import { product } from './components/products'
import { useReducer } from 'react'
import { reducer } from './components/reducer'
import CartPage from './components/CartPage'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Description from './components/Description'
import Category from './components/Category'
export const UserContext = createContext()

function App() {
  const [ArrayData , setArrayData] = useState(product)
  const [particular_product,setparticular_product] = useState({})

  function RemoveDuplicate(){
      const Unique_category = []
      ArrayData.forEach((item)=>{
          Unique_category.push(item.category)
      })
      return Unique_category.filter((item,
        index) => Unique_category.indexOf(item) === index);
  }
  const category_unique = RemoveDuplicate()


  const GetlocalStorage =()=>{
    const x = JSON.parse(localStorage.getItem('stateData'))
    if(x==true){
      return {
        cart:[],
        total_item:0,
        total_price:0,
    }
  }
    return x    
  }
  const initalstate = GetlocalStorage()
 
  const [state,dispatch] = useReducer(reducer,initalstate)

  const AddToCart =(id)=>{
    const data = ArrayData.find((item)=>item.id==id)
    return dispatch({type:'add',payload:data,particular:particular_product})
  }

  const RemoveToCart =(qty,id)=>{
      const prt = ArrayData.find((item)=>{
        if(item.id===id){
            return item.price
        }
      })
      return dispatch({type:'remove',id:id,qty:qty,price:prt.price*qty})
  }

  const ClearCart=()=>{
    return dispatch({type:'clear'})
  }
  
  useEffect(()=>{
    const cart ={}
    state.cart.map((item)=>{
        if(item.id in cart){
            cart[item.id]+=1;
        }else{
          cart[item.id] = 1
        }
    })
    setparticular_product(cart)
  },[state])

  useEffect(()=>{
      localStorage.setItem('stateData',JSON.stringify(state))
  },[state])
  
  return (
    <>
      <UserContext.Provider value={{ArrayData,AddToCart,ClearCart,particular_product,state,RemoveToCart,category_unique}}>
      <BrowserRouter>
      <Navbar/>
          <Routes>
              <Route index element={<CardContainer/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/cartpage' element={<CartPage/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/category' element={<Category/>}/>
              <Route path='/description' element={<Description/>}>
                <Route path=':productId' element={<Description/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </>
  )
  }

export default App
