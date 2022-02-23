import React,{useState} from 'react'
import {login} from '../../actions/index';
import { useDispatch} from 'react-redux';
const Login=({handleChange})=>{

    const dispatch=useDispatch()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('') 
    const loginFunc=()=>{
      dispatch(login({email,password}))
    }
    return(
        <div className='bg_lg'>
      <div class="panel">
    <div class="state"><br/><i class="fa fa-unlock-alt"></i><br/><h1>Log in</h1></div>
    <div class="form">
      <input placeholder='Email' type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input placeholder='Password' type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button class="login" onClick={loginFunc}>Login</button>
    </div>
    </div>
    </div>
    
  )
}
export default Login;