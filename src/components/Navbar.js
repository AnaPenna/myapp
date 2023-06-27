import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink,} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/PA' activeStyle>
            PA
          </NavLink>
          <NavLink to='/NOF' activeStyle>
            NOF
          </NavLink>
          <NavLink to='/OFE' activeStyle>
            OFE
          </NavLink>
          <NavLink to='/REP' activeStyle>
            REP
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;

