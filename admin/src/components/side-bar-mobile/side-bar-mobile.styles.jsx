import styled from 'styled-components';

import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  ViewCarousel,
  Category,
  AutoAwesomeMosaic,
  Campaign,
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
  transition: 0.4s ease-in-out;
  opacity: ${({isOpen}) => isOpen ? "100%" : "50%"};
  left: ${({isOpen}) => isOpen ? "0%" : "100%"};

  @media ${device.laptopL} {
    display:none;
  };
`

export const SidebarWrapper = styled.div`
  display: flex;
  padding-left: 20px;
  color: #002774;
  height: 100%;
  font-size: 2.5rem;
  background-color: white;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  overflow: scroll;
  
  &::-webkit-scrollbar {
  display: none;
  }
`

export const SidebarMenu = styled.div`
  margin-bottom: 30px;
  width: 95%;
`
export const SidebarTitle = styled.h3`
  font-size: 2rem;
  margin: 0;
`
export const SidebarList = styled.ul`
  list-style: none;
  padding: 0px 5px;
  width: 100%;
`
export const SidebarListItem = styled.li`
  width: 100%;
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  text-decoration: none;
  font-size: 2rem;
  &:hover {
    background-color: rgb(240, 240, 255);
  }
  &:active {
    background-color: rgb(225, 225, 250);
  }
  &:link{
    text-decoration: none;
  }
`

export const LineStyleIcon = styled(LineStyle)`
    margin-right: 15px;
    font-size: 2.5rem !important;
    text-decoration: none;
`

export const TimelineIcon = styled(Timeline)`
    margin-right: 15px;
    font-size: 2.5rem !important;
`
export const TrendingUpIcon = styled(TrendingUp)`
    margin-right: 15px;
    font-size: 2.5rem !important;
`
export const PermIdentityIcon = styled(PermIdentity)`
    margin-right: 15px;
    font-size: 2.5rem !important;
`
export const StorefrontIcon = styled(Storefront)`
    margin-right: 15px;
    font-size: 2.5rem !important;
`
export const AttachMoneyIcon = styled(AttachMoney)`
    margin-right: 15px;
    font-size: 2.5rem !important;
`
export const BarChartIcon = styled(BarChart)`
    margin-right: 15px;
    font-size: 2.5rem !important;
`
export const MailOutlineIcon = styled(MailOutline)`
    margin-right: 15px;
    font-size: 2.5rem !important;
`
export const DynamicFeedIcon = styled(DynamicFeed)`
    margin-right: 15px;
    font-size: 2.5rem !important;
`
export const ChatBubbleOutlineIcon = styled(ChatBubbleOutline)`
    margin-right: 15px;
    font-size: 2.5rem !important;
`
export const ViewCarouselIcon = styled(ViewCarousel)`
    margin-right: 15px;
    font-size: 2.5rem !important;
`
export const CategoryIcon = styled(Category)`
    margin-right: 15px;
    font-size: 2.5rem !important;
`
export const AutoAwesomeMosaicIcon = styled(AutoAwesomeMosaic)`
    margin-right: 15px;
    font-size: 2.5rem !important;
`
export const CampaignIcon = styled(Campaign)`
    margin-right: 15px;
    font-size: 2.5rem !important;
`
export const CloseIcon = styled(Close)`
    align-self:end;
    color: #002774;
    font-size: 64px !important;
    padding: 20px;
`
