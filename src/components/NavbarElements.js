import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css';

export const Nav = styled.nav`
  background: #B31312; 
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;
  
export const NavLink = styled(Link)`
  color: #EEE2DE;
  font-family: monospace;
  font-size: large;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #EA906C;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  white-space: nowrap; 
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  position:absolute;
  top:5.78em;
  bottom:0;
  left:85%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  

export const NavBtnLink = styled(Link)`
  padding: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;