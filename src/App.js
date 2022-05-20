
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { PublicRoute } from './routes/MenuRouts';
import Home from "./Pages/Home/Home"
import ContactUs from "./Pages/ContactUs/ContactUs"
import LogIn from "./Pages/LogIn/LogIn"
import OurPortfolio from "./Pages/OurPortfolio/OurPortfolio"
import OurTeam from "./Pages/OurTeam/OurTeam"
function App() {
  return (
  
    <NavBar>
         <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/contactus' element={<ContactUs/>}></Route>
           <Route path='/ourportfolio' element={<OurPortfolio/>}></Route>
           <Route path='/ourteam' element={<OurTeam/>}></Route>
           <Route path='/login' element={<LogIn/>}></Route>
         </Routes>
    </NavBar>
  );
}

export default App;
