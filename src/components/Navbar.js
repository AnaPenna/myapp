//ANA LUIZA LOPES PENNA-2023000060
//WALQUIRIA MAFADO-2022009098
import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink,} from './NavbarElements';

const Navbar = () => {
  return (
    
    <>
      <Nav>
        <Bars />
        
        <NavMenu>
         
          <NavLink to='/PA' activeStyle>
            HOME
          </NavLink>
          <NavLink to='/NOF' activeStyle>
            CRIAR OFERTA
          </NavLink>
          <NavLink to='/OFE' activeStyle>
            OFERTAS EXISTENTES
          </NavLink>
          <NavLink to='/REP' activeStyle>
            REPÚBLICAS
          </NavLink>
        </NavMenu>

        <NavMenu>
        <NavBtn>
          <NavBtnLink to='/Signup'>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              <button type='button' class="btn"><i class="fa fa-user"></i></button>
          </NavBtnLink>
        </NavBtn>

        </NavMenu>

      </Nav>
    </>
  );
};
  
export default Navbar;

