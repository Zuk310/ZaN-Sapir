import styled from "styled-components";
import { device } from "../../utils/responsive-ui/responsive"; 

export const Container = styled.div`
  font-weight: 300;
  text-align: center;
`;

export const Wrapper = styled.div`
  padding: 10px;
  @media ${device.tablet}{
   padding: 20px;
  }
`;

export const Title = styled.h1``;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;


export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  `;


export const TopTexts = styled.div`
  display: none;
  @media ${device.tablet}{
    display: block;
  }
`;

export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  
  `;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media ${device.tablet}{
    flex-direction: row;
  }
`;

export const Info = styled.div`
  flex:3;
`;

export const Summary = styled.div`
  flex:1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

export const SummaryTitle = styled.h1`
  flex:1;
  font-weight: 200;
`;

export const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  `;

export const Hr = styled.hr`
    background-color: #eee;
    border:none;
    height: 1px;
`;