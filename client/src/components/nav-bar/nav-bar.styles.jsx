import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';

import {device} from '../../utils/responsive-ui/responsive';


export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: end;

  @media ${device.laptop} {
    flex: 1;
    align-items: center;
  }
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  display: none;;

  @media ${device.tablet} {
    display: block;
  }
`;


export const Logo = styled.h1`
  font-weight: bold;
  margin: 0px;
  cursor: pointer;
  font-size: 16px;
  @media ${device.mobileL} {
    font-size: 24px;
  }
`;

export const MenuItem = styled.div`
  /* color:black; */
  /* font-size: 12px; */
  cursor: pointer;
  margin-left: 10px;
  @media ${device.tablet} {
    font-size: 14px;
    margin-left: 25px;
    font-weight: 500;
  }
`;
export const MenuDropdown = styled.div`

list-style: none;
display:${({isOpen}) => isOpen ? "block" : "none"};
position: absolute;
margin-top: 65px;
margin-left: -35px;
z-index: 999;
width: 150px;
height: 200px;
border-radius: 25px;
background-color: white;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => isOpen ? "100%" : "0%"};
top: ${({isOpen}) => isOpen ? "0" : "-100%"};
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
cursor: not-allowed;
pointer-events: ${({isOpen}) => isOpen ? "auto" : "none"};
  @media ${device.tablet} {
    display: flex;
    
  };
`;

export const MenuDropdownList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  pointer-events: inherit;


  @media ${device.tablet} {
    cursor: pointer;
  };
  `;

export const MenuDropdownListItem = styled.li`
  font-size: 18px;
  pointer-events: inherit; 
  width: 93%;
  border-radius: 7px;
  &:hover{
    background-color: #e0e0e0;
    color:black;
  }
  &:active{
    background-color: #6b0945;
    color:white;
  }

`;





export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
  width: 100%;
  height: 80px;
  z-index: 1;
  max-width: 100%;
`
export const Nav = styled.nav`
  background: rgb(255, 255, 255);
  height: 60px;
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




export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 22px;
  display:none;

  @media ${device.laptop} {
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
export const NavUser = styled.div`
  display: none;
    @media ${device.laptop} {
    display: flex;
  }
`
export const NavLink = styled.span`
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
  display: block !important;
  font-size: 32px !important;
  margin-left: 10px;
  @media ${device.laptop} {
    display: none !important;
  }
`
