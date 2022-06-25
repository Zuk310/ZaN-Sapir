import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/server-calls/server-calls';
import {
  NavBarContainer,
  Nav,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  MenuBars,
  NavButton,
  NavButtonLink,
} from './nav-bar.styles';

const NavBar = ({toggle}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  const admin = useSelector((state) => state.user.currentUser);

  const hendleRefresh = () => {
    window.location.reload();
  };

   const handelLogOut = (e) => {
    e.preventDefault();
    logout(dispatch);
    navigate('/login');
  }

  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to='/' onClick={hendleRefresh}>
            Zan Sapir
          </NavLogo>

          <MobileIcon>
            <MenuBars 
            onClick={toggle} 
            />
          </MobileIcon>

          <NavMenu>
           {/* ready to be used */}
            {/* <NavItem>
              <NavLink to='carousel'>Somewhere</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/'>Somewhere</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/'>Somewhere</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/'>Somewhere</NavLink>
            </NavItem> */}
          </NavMenu>

          <NavButton>
            {admin ? (
              <NavButtonLink onClick={handelLogOut}>Logout</NavButtonLink>
            ) : (
              <NavButtonLink to='/carousel'>Sing In</NavButtonLink>
            )}
          </NavButton>
        </NavBarContainer>
      </Nav>
      {width < 1440 && <Outlet />}
    </>
  );
};

export default NavBar;
