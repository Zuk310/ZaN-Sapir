import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/server-functions/server-functions.js';

import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarTitle,
  SidebarList,
  SidebarListItem,
  PermIdentityIcon,
  StorefrontIcon,
  LogoutIcon,
  DiamondIcon,
  PaintingIcon,
  CeramiclIcon,
  SalesIcon,
  CloseIcon
} from './side-bar-mobile.styles.jsx';

const SidebarMobile = ({isOpen, toggle, user}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleClick = (location) =>{
    toggle();
    navigate(`${location}`);
  }

  const handleLogOut = (e) => {
    e.preventDefault();
    logout(dispatch);
    navigate(`/`);
    toggle();
  };
  

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarWrapper>
        <CloseIcon onClick={toggle}/ > 
        <SidebarMenu>
          <SidebarTitle>Quick Menu</SidebarTitle>
          <SidebarList>
              <SidebarListItem onClick={()=>handleClick('user')}>
                <PermIdentityIcon />
                 Profile
              </SidebarListItem>
              <SidebarListItem onClick={()=>handleClick('orders')}>
                <StorefrontIcon />
                Orders
              </SidebarListItem>
              {user ? 
              (
                <SidebarListItem onClick={(e)=>handleLogOut(e)}>
                  <LogoutIcon />
                  Logout
                </SidebarListItem>
              ) : 
              (
                <SidebarListItem onClick={(e)=>handleClick('login')}>
                  <LogoutIcon />
                  Login
                </SidebarListItem>
              )
              }
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Categories</SidebarTitle>
          <SidebarList>
            <SidebarListItem onClick={()=>handleClick('/products/jewelry')}>
              <DiamondIcon />
              Jewelry
            </SidebarListItem>
            <SidebarListItem onClick={()=>handleClick('/products/ceramic-jewelry')}>
              <DiamondIcon />
              Ceramic Jewelry
            </SidebarListItem>
            <SidebarListItem onClick={()=>handleClick('/products/silver-jewelry')}>
              <DiamondIcon />
              Silver Jewelry
            </SidebarListItem>
            <SidebarListItem onClick={()=>handleClick('/products/paintings')}>
              <PaintingIcon />
              Paintings
            </SidebarListItem>
            <SidebarListItem onClick={()=>handleClick('/products/ceramic')}>
              <CeramiclIcon />
              Ceramic
            </SidebarListItem>
            <SidebarListItem onClick={()=>handleClick('/products/sale')}>
              <SalesIcon />
              Sales
            </SidebarListItem>
            <SidebarListItem onClick={()=>handleClick('/products/ceramic-sale')}>
              <SalesIcon />
              Ceramic Sales
            </SidebarListItem>
            <SidebarListItem onClick={()=>handleClick('/products/silver-sale')}>
              <SalesIcon />
              Silver Sales
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SidebarMobile;
