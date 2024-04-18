import React, { useState } from 'react'
import axios from 'axios'
// import { useHistory } from "react-router-dom";
function Login() {
  // let history = useHistory();
  const [signup,setSignup] = useState('signup')
  const [name,setname] = useState('')
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')
  const [click,setclick] = useState()
  const [message,setmessage] = useState('')
  const SignHandler =(e)=>{
      e.preventDefault();
      setclick('click')
      if(name!='' && email!='' && password!=''){
        let postData = {'name':name,'email':email,'password':password}
        axios.post('http://127.0.0.1:8000',postData)
        .then((response)=>{
              if(response.data.msg==='email_invalid'){
                setmessage('Your email is Incorrect')
            }else if(response.data.msg==='password_incorrect'){
                setmessage('Your Password is incorrect')
            }else if(response.data.msg==='login'){
              console.log(response.data.msg)
              window.location.replace('http://localhost:5173')
              setemail('')
              setpassword('')
            } 
        }).catch((error)=>{
            console.log(error)
        })
      }else{
        setmessage('Please Fill all the Fields')
      }
      
  }

  const LoginHandler =(e)=>{
    setclick('click')
    e.preventDefault();
    if(email!='' && password!=''){
      let PostData = {'email':email,'password':password}
      axios.post('http://127.0.0.1:8000/login',PostData)
      .then((response)=>{
          if(response.data.msg==='email_invalid'){
              setmessage('Your email is Incorrect')
          }else if(response.data.msg==='password_incorrect'){
              setmessage('Your Password is incorrect')
          }else if(response.data.msg==='login'){
            console.log(response.data.msg)
            window.location.replace('http://localhost:5173')
            setemail('')
            setpassword('')
          }  
      }).catch((error)=>{
          console.log(error)
      })
    }else{
      setmessage('Inputs fields are empty')
    }
}

  return (
    <>
        <div className='container'>
          <div className='row justify-content-center m-5 '>
          {click=='click'?<p className='text-center text-danger'>{message}</p>:<p></p>}
              <div className="col-6 _border px-3 py-3">
              
                  <div className='row my-3 login_signup_div'>
                      <div className='col-6 text-center'>
                        <button onClick={()=>{setSignup('signup')}}>Sign Up</button>
                      </div>
                      <div className='col-6 text-center' >
                        <button onClick={()=>{setSignup('login')}}>LogIn</button>
                      </div>
                  </div>
                  {signup==='signup' ? <form class="row g-3">
                      <div class="col-md-12">
                        <label for="inputEmail4" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="inputEmail4" onChange={(e)=>setname(e.target.value)}/>
                      </div>
                      <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" onChange={(e)=>setemail(e.target.value)}/>
                      </div>
                      <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" onChange={(e)=>setpassword(e.target.value)}/>
                      </div>
                      <div class="col-12">
                        <button type="submit" class="btn btn-primary" onClick={SignHandler}>Register</button>
                      </div>
                  </form>
                  :
                  <form class="row g-3">
                      <div class="col-md-12">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4"onChange={(e)=>setemail(e.target.value)} required/>
                      </div>
                      <div class="col-md-12">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" onChange={(e)=>setpassword(e.target.value)}/>
                      </div>
                      <div class="col-12">
                        <button type="submit" class="btn btn-primary" onClick={LoginHandler}>Login</button>
                      </div>
                  </form>}
              </div>
          </div>
        </div>
    </>
  )
}
export default Login