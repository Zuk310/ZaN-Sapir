import styled from "styled-components";
import { device } from "../../utils/responsive-ui/responsive"
  

export const Slide = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${props => {
      if(props.bg){
        return `${props.bg}`;
      }
      else{
        console.log("nope");
        return "blue";
      }
      }};

    @media ${device.laptopL} {
      flex-direction: row;
    }
`;

export const ImageContainer = styled.div`
  height: 50%;
  @media ${device.laptopL} {
    flex: 1;
      height: 100%;
  }
`;

export const Image = styled.img`
  height: 100%;
  @media ${device.laptopL} {
    flex: 1;
      height: 80%;
  }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    @media ${device.laptopL} {
      flex: 1;
      padding: 50px;
      align-items: start;
    }
`;

export const Title = styled.h1`
    font-size: 30px;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 5px;
    @media ${device.laptopL} {
      text-align: start;
      font-size: 70px;
      
    }
`
export const Description = styled.p`
    text-align: center;
    margin-bottom: 15px;
    padding: 5px 0px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 2px;

    @media ${device.laptopL} {
      text-align: start;
      margin: 50px 0px;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 2px;
    }
`
export const Button = styled.button`
    padding: 6px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    width: 35%;
    border: 2px solid black;

    @media ${device.laptopL} {
      padding: 10px;
      font-size: 20px;
    }
`