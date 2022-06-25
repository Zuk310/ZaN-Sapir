import styled from 'styled-components';
import { device } from '../../utils/responsive-ui/responsive';

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
  Campaign
} from "@mui/icons-material";

export const SidebarContainer = styled.div`
  display:none;
  flex: 1;
  height: calc(100vh - 50px);
  top: 50px;
  margin-top: 10px;
  padding-left: 10px;
  justify-content: center;
  @media ${device.laptopL} {
    position: sticky;
    margin-right: 20px;
    display:flex;
  };
  
`
export const SidebarWrapper = styled.div`
  display: block;
  padding: 20px;
  color: #555;
  background-color: rgb(243, 245, 255);
  border-radius: 20px;
  overflow: hidden;
  overflow: scroll;

  &::-webkit-scrollbar {
  display: none;
  };
`

export const SidebarMenu = styled.div`
  margin-bottom: 10px;
`
export const SidebarTitle = styled.h3`
  font-size: 13px;
  
`
export const SidebarList = styled.ul`
    list-style: none;
  padding: 5px;
`
export const SidebarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  text-decoration: none;

  &:hover {
    background-color: rgb(235, 235, 255);
  };

  &:active {
    background-color: rgb(225, 225, 250);
  };

  &:link{
    text-decoration: none;
  };
`

export const LineStyleIcon = styled(LineStyle)`
    margin-right: 5px;
    font-size: 20px !important;
    text-decoration: none;
`

export const TimelineIcon = styled(Timeline)`
    margin-right: 5px;
    font-size: 20px !important;
`

export const TrendingUpIcon = styled(TrendingUp)`
    margin-right: 5px;
    font-size: 20px !important;
`
export const PermIdentityIcon = styled(PermIdentity)`
    margin-right: 5px;
    font-size: 20px !important;
`
export const StorefrontIcon = styled(Storefront)`
    margin-right: 5px;
    font-size: 20px !important;
`
export const AttachMoneyIcon = styled(AttachMoney)`
    margin-right: 5px;
    font-size: 20px !important;
`
export const BarChartIcon = styled(BarChart)`
    margin-right: 5px;
    font-size: 20px !important;
`
export const MailOutlineIcon = styled(MailOutline)`
    margin-right: 5px;
    font-size: 20px !important;
`
export const DynamicFeedIcon = styled(DynamicFeed)`
    margin-right: 5px;
    font-size: 20px !important;
`
export const ChatBubbleOutlineIcon = styled(ChatBubbleOutline)`
    margin-right: 5px;
    font-size: 20px !important;
`
export const ViewCarouselIcon = styled(ViewCarousel)`
    margin-right: 5px;
    font-size: 20px !important;
`
export const CategoryIcon = styled(Category)`
    margin-right: 5px;
    font-size: 20px !important;
`
export const AutoAwesomeMosaicIcon = styled(AutoAwesomeMosaic)`
    margin-right: 5px;
    font-size: 20px !important;
`
export const CampaignIcon = styled(Campaign)`
    margin-right: 5px;
    font-size: 20px !important;
`
