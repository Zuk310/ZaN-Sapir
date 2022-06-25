import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';

import {device} from '../../utils/responsive-ui/responsive';

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
  width: 100%;
  height: 80px;
  z-index: 1;
  max-width: 1100px;
`
export const Nav = styled.nav`
  background: rgb(255, 255, 255);
  height: 80px;
  /* margin-top: -80px; */
  /* width:100vw;/ */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top:0;
  z-index: 10;


  @media ${device.laptop} {
    transition: 0.8s all ease;
  }
`

export const NavLogo = styled(LinkRouter)`
  color: #00318b;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items:center;
  /* margin-left: 24px; */
  font-weight: bold;
  text-decoration: none;
`
export const MobileIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;

  @media ${device.laptopL} {
     display:none;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 22px;
  display:none;
  @media ${device.laptopL} {
    display:block;
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 22px;
  }
`

export const NavItem = styled.li`
  height: 80px;

`
export const NavLink = styled(LinkScroll)`
  color: #00318b;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 500;

  &.action{
    border-bottom: 3px solid #01bf71;
  };
`
export const MenuBars = styled(MenuIcon)`
  color: #00318b;
`
export const NavButton = styled.nav`
    display: flex;
    align-content: center;
    justify-content: center;
    text-align: center;
    display: none;
    font-weight: 500;
  @media ${device.laptopL} {
    display: block;
  }

`
export const NavButtonLink = styled.div`
  border-radius: 24px;
  background: #00318b;
  white-space: nowrap;
  padding: 10px 28px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover{
    transition: all 0.3s ease-in-out;
    background: #0b41a5;
    color: #ffffff;
  }
  &:active{
    transition: all 0.3s ease-in-out;
    background: #0b398d;
    color: #ffffff;
  }
  `
