import styled from 'styled-components';
import { device } from "../../utils/responsive-ui/responsive"
import { Swiper} from 'swiper/react';

export const SwiperContainer = styled(Swiper)`
  height: 90vh;
  width: 100%;
   --swiper-theme-color: rgb(83, 83, 83);
  @media ${device.tablet} {
    height: 60vh;
  }
  @media ${device.laptopL} {
    height: 85vh;
  }
`
