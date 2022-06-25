import styled from 'styled-components';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { device } from "../../utils/responsive-ui/responsive"


export const FeaturedContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction:column;
  justify-content: space-between;

  @media ${device.laptopL} {
      flex-direction:row;
      margin-top: 10px
  }
`

export const FeaturedItem = styled.div`
  width: auto;
  flex: 1;
  margin: 10px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

  @media ${device.laptopL} {
      margin: 0px 20px;
  }
`
export const FeaturedTitle = styled.span`

`

export const FeaturedMoneyContainer = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
`

export const FeaturedMoney = styled.span`
    font-size: 30px;
    font-weight: 600;
`

export const FeaturedMoneyRate = styled.span`
    display: flex;
    align-items: center;
    margin-left: 20px;
`

export const FeaturedSub = styled.span`
    font-size: 15px;
    color: gray;
`

export const ArrowIconDown = styled(ArrowDownward)`
font-size:14px;
margin-left: 5px;
color: red;

`
export const ArrowIconUp = styled(ArrowUpward)`

font-size:14px;
margin-left: 5px;
color: green;

`