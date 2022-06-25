import React from "react";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

import {TopbarContainer,
TopbarWrapper,
Logo,
TopRight,
TopLeft,
TopbarIconContainer,
TopIconBadge,
TopAvatar} from './top-bar.styles.jsx';

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  const admin = useSelector(state=>state.user.currentUser);

  const navHome = () => {
    navigate("/");
  }
  return (
    <TopbarContainer>
      <TopbarWrapper>
        <TopLeft>
          <Logo  onClick={navHome}>{admin.username}</Logo>
        </TopLeft>
        <TopRight>
          <TopbarIconContainer>
            <NotificationsNone />
            <TopIconBadge>2</TopIconBadge>
          </TopbarIconContainer>
          <TopbarIconContainer>
            <Language />
            <TopIconBadge>2</TopIconBadge>
          </TopbarIconContainer>
          <TopbarIconContainer>
            <Settings />
          </TopbarIconContainer>
          <TopAvatar src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="adminImg" />
        </TopRight>
      </TopbarWrapper>
      {/* <Outlet /> */}
    </TopbarContainer>
  );
}

export default Topbar;