import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import Announcements from '../announcement/announcements.component.jsx';
import {
  Left,
  Right,
  Language,
  Logo,
  MenuItem,
  NavBarContainer,
  Nav,
  NavMenu,
  NavItem,
  NavLink,
  MenuBars,
  NavUser,
  MenuDropdown,
  MenuDropdownList,
  MenuDropdownListItem,
} from './nav-bar.styles.jsx';

import { logout } from '../../redux/server-functions/server-functions.js';
import { useState } from 'react';

const NavBar = ({ toggle, user }) => {
  const cart = useSelector((state) => state.cart);


  const navigate = useNavigate();
  const [jewelryDropdown, setJewelryDropdown] = useState(false);
  const [salesDropdown, setSalesDropdown] = useState(false);

  const dispatch = useDispatch();

  const handelLogOut = (e) => {
    e.preventDefault();
    logout(dispatch);
    navigate(`/`);
  };

  const toggleDropdown = (e, type) => {
    e.preventDefault();
    if (type === 'jewelry') {
      setJewelryDropdown(!jewelryDropdown);
      setSalesDropdown(false);
    }
    if (type === 'sales') {
      setSalesDropdown(!salesDropdown);
      setJewelryDropdown(false);
    }
  };

  const handelNav = (location) => {
    setSalesDropdown(false);
    setJewelryDropdown(false);
    navigate(`/${location}`);
  };

  return (
    <>
      <Announcements />
      <Nav>
        <NavBarContainer>
          <Left>
            <Logo onClick={() => handelNav(``)}>Zan Sapir</Logo>
          </Left>
          <NavMenu>
            <NavItem onClick={(e) => toggleDropdown(e, 'jewelry')}>
              <NavLink>Jewelry</NavLink>
              <MenuDropdown isOpen={jewelryDropdown}>
                <MenuDropdownList>
                  <MenuDropdownListItem
                    isOpen={jewelryDropdown}
                    onClick={() => handelNav(`products/jewelry`)}
                  >
                    All Jewelry
                  </MenuDropdownListItem>
                  <MenuDropdownListItem
                    isOpen={jewelryDropdown}
                    onClick={() => handelNav(`products/silver-jewelry`)}
                  >
                    Ceramic Jewelry
                  </MenuDropdownListItem>
                  <MenuDropdownListItem
                    isOpen={jewelryDropdown}
                    onClick={() => handelNav(`products/ceramic-jewelry`)}
                  >
                    Silver Jewelry
                  </MenuDropdownListItem>
                </MenuDropdownList>
              </MenuDropdown>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => handelNav(`products/paintings`)}>
                Paintings
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink onClick={() => handelNav(`products/ceramic`)}>
                Ceramic
              </NavLink>
            </NavItem>

            <NavItem onClick={(e) => toggleDropdown(e, 'sales')}>
              <NavLink>Sales</NavLink>
              <MenuDropdown isOpen={salesDropdown}>
                <MenuDropdownList>
                  <MenuDropdownListItem
                    isOpen={salesDropdown}
                    onClick={() => handelNav(`products/sale`)}
                  >
                    All Sales
                  </MenuDropdownListItem>
                  <MenuDropdownListItem
                    isOpen={salesDropdown}
                    onClick={() => handelNav(`products/silver-sale`)}
                  >
                    Ceramic Sales
                  </MenuDropdownListItem>
                  <MenuDropdownListItem
                    isOpen={salesDropdown}
                    onClick={() => handelNav(`products/ceramic-sale`)}
                  >
                    Silver Sales
                  </MenuDropdownListItem>
                </MenuDropdownList>
              </MenuDropdown>
            </NavItem>
          </NavMenu>
          <Right>
            <MenuItem onClick={() => navigate(`/cart`)}>
              <Badge badgeContent={cart.quantity} color='primary'>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>

            <MenuBars onClick={toggle} />

            <NavUser>
              {user ? (
                <>
                   <MenuItem onClick={() => handelNav(`user`)}>
                    {user.username}
                  </MenuItem>
                  <MenuItem onClick={handelLogOut}>Log Out</MenuItem>
                </>
              ) : (
                <>
                 <MenuItem onClick={()=>handelNav(`register`)}>
                    REGISTER
                  </MenuItem>
                  <MenuItem onClick={()=>handelNav(`login`)}>
                    SIGN IN
                  </MenuItem> 
                </>
              )}
            </NavUser>
          </Right>
        </NavBarContainer>
      </Nav>
      <Outlet />
    </>
  );
};

export default NavBar;
