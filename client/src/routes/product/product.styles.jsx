import styled from "styled-components";
import { device } from "../../utils/responsive-ui/responsive";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-around;
  flex-direction:column;

  @media ${device.tablet} {
    flex-direction:row;
    padding: 50px;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  overflow:hidden;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 90%;
  height: 40vh;
  object-fit: cover;
  margin: 5px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  border-radius: 15px;

  @media ${device.tablet} {
    height: 35vh;
  }
`;

export const InfoContainer = styled.div`
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;

  @media ${device.tablet} {
    padding: 0px 50px;
    padding: 50px;
    justify-content:start;
    align-items: start;
  }
`;

export const Title = styled.h1`
  font-weight: 200;
`;

export const Description = styled.p`
  margin: 20px 0px;
`;

export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

export const FilterContainer = styled.div`
  width: 100%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-around;
  @media ${device.tablet} {
    width: 50%;
  }
  
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  
`;

export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  
`;

export const FilterSizeOption = styled.option`
`;

export const AddContainer = styled.div`

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media ${device.tablet} {
    width: 50%;
  }
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  
`;

export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #6b0945;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
`;

export const Button = styled.button`
  font-weight: 500;
  padding: 15px;
  border: 2px solid #6b0945;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: whitesmoke;
  }
`;
