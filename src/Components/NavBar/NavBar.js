import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../accsets/Group 33092.png'
import CustomLInk from './CustomLInk';

const NavBar = ({children}) => {
  const menuBar=<>
  <li><CustomLInk to="/">Home</CustomLInk></li>
  <li><CustomLInk to="/ourportfolio">Our Portfolio</CustomLInk></li>
  <li><CustomLInk to="/ourteam">Our Team</CustomLInk></li>
  <li><CustomLInk to="/contactus">Contact Us</CustomLInk></li>
  <li><CustomLInk className="bg-primary btn btn-sm hover:bg-primary  text-white rounded-md h-[10px] w-[82px] " to="/login">Login</CustomLInk></li>
  </>


    return (
        <div className="drawer  drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex py-[64x] flex-col">
          <div className="w-full navbar bg-[#FFF8F5] lg:px-[135px] ">
          <div className="flex-1 px-2 mx-2"><img className='w-[127px] h-[48px]' src={logo} alt='fvn'></img></div>
            <div className="flex-none lg:hidden">
                  <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
               </label>

          
            </div> 
           
            <div className="flex-none hidden lg:block p-0">
              <ul className="menu menu-horizontal p-0">
                 {menuBar}
              </ul>
            </div>
          </div>
 
          {children}
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
 
           {menuBar}
            
          </ul>
          
        </div>
      </div>
    );
};

export default NavBar;