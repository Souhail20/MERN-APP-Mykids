import axios from 'axios'
export const register=({name,email,password})=>async(dispatch)=>{
    try {
        dispatch({type:'registerprocess'})
        await axios.post('http://localhost:5000/api/users/register',{name,email,password})
        await alert('You can go to sign in')
        dispatch({type:'registersucceeded'})
    } catch (error) {
       alert(error.response.data.msg);
        dispatch({type:'registerfailed',payload:error.response.data.msg})
    }
}
export const login=({email,password})=>async(dispatch)=>{
    try {
        dispatch({type:'loginprocess'})
        const res=await axios.post('http://localhost:5000/api/users/login',{email,password})
        await localStorage.setItem('token', res.data.token);
        dispatch({type:'loginsucceeded'})
    } catch (error) {
       alert(error.response.data.msg);
        dispatch({type:'loginfailed',payload:error.response.data.msg})
    }
}
export const auth=()=>async(dispatch)=>{
    try {
        dispatch({type:'authprocess'})
        const token= await localStorage.getItem('token');
        const res=await axios.get('http://localhost:5000/api/users/auth',
        {
            headers:{'authorization':token}
        })
        
        dispatch({type:'authsucceeded'})
    } catch (error) {
       alert(error.response.data.msg);
        dispatch({type:'authfailed',payload:error.response.data.msg})
    }
}