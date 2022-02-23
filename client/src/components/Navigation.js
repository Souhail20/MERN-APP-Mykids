import React from 'react'
import styled from 'styled-components';
import tunis from './img/tunis.png';
import { Link,Redirect } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import Login from './Authentification/Login'
function Navigation() {
    const dispatch = useDispatch()
    const logoutFunc=()=>{
        localStorage.removeItem('token');
        dispatch({type:'logout'})
    }
    const isAuth=useSelector(state=>state.userReducer.isAuth)
    return (
        <NavigationStyled>
            
            <div className="logo">
                <img src={tunis} alt="" />
            </div>
            <ul className="nav-items">
                <li>
                {isAuth?<Link  to='/main'>Home</Link>:<div>      
                </div>} 
                </li>
                <li>
                <Link to="/login" >sign in</Link>
                </li>
                <li>
                {isAuth?<Link to="/" onClick={logoutFunc}>Log Out</Link>: <div>
                </div>}
                </li>               
            </ul>
           
        </NavigationStyled>
    )
}
const NavigationStyled = styled.nav`
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-items{
        display: flex;
        align-items: center;
        
        li{
            margin: 0 1.5rem;
        }
        .primary-btn{
            margin-left: 3rem;
            background-color:rgba(57, 95, 246, 0.6);
            padding: .6rem 1.3rem;
            border-radius: 70px;
            cursor: pointer;
            transition: all .4s ease-in-out;
            &:hover{
                background-color:rgba(57, 95, 246, 1);
            }
        }
    }
    .logo{
        img{
            width: 60px;
            border-radius : 50%;
            
            
        }
    }
`;
export default Navigation;