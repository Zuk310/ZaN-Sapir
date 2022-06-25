import styled from "styled-components";
import { device } from "../../utils/responsive-ui/responsive";

export const Container = styled.div`
    flex:1 0 33%; 
    margin: 3px;
    height: 55vh;
    max-height: 55vh;
    position: relative;
    width: 99%;
`

export const Image = styled.img`
    width:100%;

    height: 25vh;
    object-fit: cover;
    
    @media ${device.tablet}{
        height: 100%;
        width:100%;
    }
`
export const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    :hover{
        background-color: #00000039;
        transition: 0.3s all ease-in-out;
    };
`
export const Title = styled.h1`
    text-align: center;
    color: white;
    margin-bottom: 20px;
    mix-blend-mode: revert;
    width: 100%;
    text-shadow: 3px 3px 5px #000000;

`
export const Button = styled.button`
    border: none;
    padding: 15px;
    background-color: white;
    color: #000000;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.5s ease;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    @media ${device.tablet}{
        padding: 15px;
        font-weight: 500;
    }

    :hover{
        background-color: #dfdfdf;
        transform: scale(1.1);
    };
    :active{
        background-color: #bebebe;
        color: white;
    };

`