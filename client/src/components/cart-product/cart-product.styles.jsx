import styled from "styled-components";
import { device } from "../../utils/responsive-ui/responsive";
export const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

export const Image = styled.img`
  width: 200px;
  object-fit: cover;
  @media ${device.tablet}{
    width: 300px;
  }
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const ProductSize = styled.span``;

export const PriceDetails = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const ProductAmount = styled.span`
    font-size:24px;
    margin: 5px;
`;

export const ProductPrice = styled.span`
    font-size: 30px;
    font-weight: 200;
`;


