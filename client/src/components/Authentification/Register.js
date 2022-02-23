import React,{useState} from 'react'
import{useDispatch} from "react-redux"
import {register} from '../../actions/index';
import Navigation from '../Navigation'
import  './Register.css' ;
const Register = () => {
    const dispatch=useDispatch()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('') 
    const registerFunc=()=>{
      dispatch(register({name,email,password}))
      setName('');
      setEmail('');
      setPassword("");
      
    }
    return (

                <div className='bg_lg'>
                  <Navigation/>
      <div class="panel">
    <div class="state"><br/><i class="fa fa-unlock-alt"></i><br/><h1>Register</h1></div>
    <div class="form">
     <input placeholder='UserName' type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <input placeholder='Email' type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input placeholder='Password' type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button class="login" onClick={registerFunc}>Register</button>  
    </div>
  </div>
    </div>
  )
}
export default Register;