import MainArea from "./components/main/MainArea";
import './App.css';
import { Switch, Link, Route, Redirect } from "react-router-dom";
import Playmusic from "./components/music/Playmusic";
import BodyContent from "./components/main/BodyContent";
import Register from "./components/Authentification/Register"
import Login from "./components/Authentification/Login"
import {auth} from './actions/index';
import {useSelector,useDispatch} from "react-redux"
import {useEffect} from "react"
import Letters from "./components/letters/Letters";
import Stories from "./components/stories/Stories";
import {SlideData,SliderTwo} from "./components/stories/SliderData";
import Shapes from "./components/shapes/Shapes";
import {ShapesData} from "./components/shapes/ShapesData";
import Storytwo from "./components/stories/Storytwo";
import SellerCard from "./components/main/SellerCard";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import {SensesData} from './components/senses/SensesData';
import Senses from "./components/senses/Senses"
import { FramerAnimation} from "./components/colors/framerAnimation";
import  MotionAnimation from "./components/colors/motionAnimation";
import SpringAnimation from "./components/colors/springAnimation";
import Yello from "./components/colors/yello";
import Orange from "./components/colors/orange";
import Violet from "./components/colors/violet";
import Brown from "./components/colors/brown";
import Game from "./components/game/Game";
import Admin from "./components/admin/Admin";
import MainTitle from "./components/main/MainTitle"
import About from "./components/about/About";
import ContactSection from "./components/main/ContactSection";
function App() {
    const isAuth=useSelector(state=>state.userReducer.isAuth)
    const dispatch=useDispatch()
  useEffect(() => {
    dispatch(auth())
  }, [dispatch])
  const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 4em;
  padding: 3em;
  background-color: white;
`;
  return (
    <div className="App">
      <Switch>
        
        <Route exact path="/">
          <MainArea/>
          <About/>
          <ContactSection/> 
        </Route>
        <Route path='/Register'>
        <Redirect  to ='/Register'/>
          <Register/>               
        </Route>
        <Route path ="/main">
            <MainArea/>
            <BodyContent/>
          </Route>  
        <Route path='/login'>
          {isAuth?<Redirect  to='/main'/>:<div>
          <Login/>       
          </div>} 
          </Route>
                 
          <Route path="/Playmusic">      
          <div>
            <Playmusic/>
          </div>
        </Route>
        <Route path="/hourouf">      
        <Shapes slides={ShapesData}/>
        </Route>
        <Route path="/Senses">      
        <Senses slides={SensesData}/>
        </Route>
        <Route path="/Letters">      
          <div>
            <Letters/>
          </div>
        </Route>
        <Route path="/Stories">      
          <div className="Story">
            <Stories slides={SlideData}/>
            <Storytwo slides={SliderTwo} />     
          </div>
        </Route>
        <Route path="/SellerCard">      
          <div className="sellercards">
            <SellerCard/>
            <SellerCard/> 
            <SellerCard/>      
          </div>
        </Route>
        <Route path="/Colors">
          <Navigation/>
          <div ClassName="Content">
          <h2>Let's Play With Colors</h2>
          <div ClassName="haya">
        <Content>
        <FramerAnimation />
        <SpringAnimation />
        <MotionAnimation />
        <Yello/>
        <Orange/>
        <Violet />
        <Brown />
        </Content>
        </div>
          </div>
        </Route>
        <Route path="/Games">      
          <div>
            <Game/>
          </div>
        </Route>
        <Route path="/admin">      
          <div>
            <Admin/>
          </div>
        </Route>
      </Switch>
    </div>
  );
}
export default App;
