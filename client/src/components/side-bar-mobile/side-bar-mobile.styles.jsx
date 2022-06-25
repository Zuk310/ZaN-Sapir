import styled from 'styled-components';

import {
  PermIdentity,
  Storefront,
  Logout,
  Diamond,
  ColorLens,
  Receipt,
  GridView,
  Close
} from "@mui/icons-material";
import { device } from '../../utils/responsive-ui/responsive';

export const SidebarContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => isOpen ? "100%" : "50%"};
  left: ${({isOpen}) => isOpen ? "0%" : "100%"};

  @media ${device.laptopL} {
    display:none;
  };
`

export const SidebarWrapper = styled.div`
  display: flex;
  padding-left: 20px;
  height: 100%;
  font-size: 2.5rem;
  background-color: #ffffff;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  overflow: scroll;

  &::-webkit-scrollbar {
  display: none;
  }
`

export const SidebarMenu = styled.div`
  margin-bottom: 25px;
`
export const SidebarTitle = styled.h3`
  font-size: 2rem;
  margin: 5px 0 0 0 !important;
`
export const SidebarList = styled.ul`
  list-style: none;
  padding: 0px 5px;
  width: 100%;
`
export const SidebarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  text-decoration: none;
  margin-bottom: 5px;
  font-size: 2rem;
  &:hover {
    background-color: rgb(255, 255, 255);
  }
  &:active {
    background-color: rgb(255, 255, 255);
  }
  &:link{
    text-decoration: none;
  }
`

export const PermIdentityIcon = styled(PermIdentity)`
    margin-right: 15px;
    font-size: 2.5rem !important;
`
export const StorefrontIcon = styled(Storefront)`
    margin-right: 15px;
    font-size: 2.5rem !important;
`
export const LogoutIcon = styled(Logout)`
    margin-right: 15px;
    font-size: 2.5rem !important;
`
export const DiamondIcon = styled(Diamond)`
    margin-right: 15px;
    font-size: 2.5rem !important;
`
export const PaintingIcon = styled(ColorLens)`
    margin-right: 15px;
    font-size: 2.5rem !important;
`
export const SalesIcon = styled(Receipt)`
    margin-right: 15px;
    font-size: 2.5rem !important;
`
export const CeramiclIcon = styled(GridView)`
    margin-right: 15px;
    font-size: 2.5rem !important;
`

export const CloseIcon = styled(Close)`
    align-self:end;
    color: #000000;
    font-size: 64px !important;
    padding: 20px;
`
