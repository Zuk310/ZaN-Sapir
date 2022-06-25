import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarTitle,
  SidebarList,
  SidebarListItem,
  LineStyleIcon,
  TimelineIcon,
  TrendingUpIcon,
  PermIdentityIcon,
  StorefrontIcon,
  AttachMoneyIcon,
  BarChartIcon,
  MailOutlineIcon,
  DynamicFeedIcon,
  ChatBubbleOutlineIcon,
  ViewCarouselIcon,
  CategoryIcon,
  AutoAwesomeMosaicIcon,
  CampaignIcon
} from './side-bar.styles';

const Sidebar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarTitle>Dashboard</SidebarTitle>
          <SidebarList>
              <SidebarListItem onClick={()=>navigate('/')}>
                <LineStyleIcon />
                Home
              </SidebarListItem>
            <SidebarListItem>
              <TimelineIcon />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <TrendingUpIcon />
              Sales
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Quick Menu</SidebarTitle>
          <SidebarList>
              <SidebarListItem onClick={()=>navigate('/users')}>
                <PermIdentityIcon />
                Users
              </SidebarListItem>
              <SidebarListItem onClick={()=>navigate('/products')}>
                <StorefrontIcon />
                Products
              </SidebarListItem>
            <SidebarListItem>
              <AttachMoneyIcon />
              Transactions
            </SidebarListItem>
            <SidebarListItem>
              <BarChartIcon />
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Notifications</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <MailOutlineIcon />
              Mail
            </SidebarListItem>
            <SidebarListItem>
              <DynamicFeedIcon />
              Feedback
            </SidebarListItem>
            <SidebarListItem>
              <ChatBubbleOutlineIcon />
              Messages
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>

        <SidebarMenu>
          <SidebarTitle>Edit</SidebarTitle>
          <SidebarList>
              <SidebarListItem 
              // onClick={()=>navigate('/announcements')}
              >
                <CampaignIcon />
                Announcements
              </SidebarListItem>
              <SidebarListItem onClick={()=>navigate('/carousel')}>
                <ViewCarouselIcon />
                Carousel
              </SidebarListItem>
              <SidebarListItem 
              // onClick={()=>navigate('/categories')}
              >
                <CategoryIcon />
                Categories
              </SidebarListItem>
              <SidebarListItem 
              // onClick={()=>navigate('/popularProducts')}
              >
                <AutoAwesomeMosaicIcon />
                Popular Products
              </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
      {width > 1440 && <Outlet/>}
    </SidebarContainer>
  );
};

export default Sidebar;
