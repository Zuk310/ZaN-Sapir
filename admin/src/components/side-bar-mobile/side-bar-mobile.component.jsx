import {useNavigate } from 'react-router-dom';
import { logout } from '../../redux/server-calls/server-calls.js';
import { useDispatch } from 'react-redux';
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
  CampaignIcon,
  CloseIcon
} from './side-bar-mobile.styles.jsx';

const SidebarMobile = ({isOpen, toggle}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (location) =>{
    toggle();
    navigate(`/${location}`);
  }

  const handelLogOut = (e) => {
    e.preventDefault();
    logout(dispatch);
    navigate('/');
  }

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarWrapper>
        <CloseIcon onClick={toggle}/>
        <SidebarMenu> 
          <SidebarTitle>Dashboard</SidebarTitle>
          <SidebarList>
              <SidebarListItem onClick={()=>handleClick('')} >
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
              <SidebarListItem onClick={handelLogOut}>
                <AutoAwesomeMosaicIcon />
                Logout
              </SidebarListItem>
              <SidebarListItem onClick={()=>handleClick('users')}>
                <PermIdentityIcon />
                Users
              </SidebarListItem>
              <SidebarListItem onClick={()=>handleClick('products')}>
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
              // onClick={()=>handleClick('announcements')}
              >
                <CampaignIcon />
                Announcements
              </SidebarListItem>
              <SidebarListItem onClick={()=>handleClick('carousel')}>
                <ViewCarouselIcon />
                Carousel
              </SidebarListItem>
              <SidebarListItem 
              // onClick={()=>handleClick('categories')}
              >
                <CategoryIcon />
                Categories
              </SidebarListItem>
              <SidebarListItem 
              // onClick={()=>handleClick('popularProducts')}
              >
                <AutoAwesomeMosaicIcon />
                Popular Products
              </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SidebarMobile;
