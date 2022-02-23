const initialState={isAuth:false}
const userReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case 'registerprocess':
        case 'loginprocess':
        case 'authprocess':
            return({...state})
        case 'registersucceeded':
            return({...state})
        case 'loginsucceeded':
        case 'authsucceeded':
            return({...state,isAuth:true})
        case 'registerfailed':
        case 'loginfailed':
        case 'authfailed':
            return({...state,isAuth:false,error:payload})
        case 'logout':
            return({...state,isAuth:false})
            
        default:
            return(state)
    }
}
export default userReducer;