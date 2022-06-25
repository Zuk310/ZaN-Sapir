import styled from "styled-components";
import { device } from "../../utils/responsive-ui/responsive";

export const Container = styled.div`
    height: 60vh;
    background-color: #fcf0f8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`   
export const Title = styled.h1`
    font-size:70px;
    margin: 20px;
    text-align: center;
`
export const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    text-align: center;
    @media ${device.laptopL} {
        width: 50%;
    }
    
`
export const InputContainer = styled.div`
    width: 80%;
    height:40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;

    @media ${device.laptop} {
        width: 50%;
    }
`

export const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px
`

export const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #6b0945;
    color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        background-color: #830b55;
    };
    :active{
        background-color: #610d41;
    };
`
