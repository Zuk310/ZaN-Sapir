import styled from "styled-components";
import { mobile } from "../../utils/responsive-ui/responsive";
import { device } from "../../utils/responsive-ui/responsive";

export const Container = styled.div`
`;

export const Title = styled.h1`
  margin: 20px;
  text-transform: capitalize;

`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Filter = styled.div`
  margin: 20px;
`;

export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 0px;
  
  @media ${device.tablet} {
    margin-right: 20px;
    
  };
`;

export const Select = styled.select`
  padding: 10px;
  margin: 10px 0px;
  @media ${device.tablet} {
    margin-right: 20px;
    
  };
`;

export const Option = styled.option`
`;
