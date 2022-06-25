import styled from "styled-components";
import { device } from "../../utils/responsive-ui/responsive";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(255,255,255,0.5),#3f353e7f),
    url(https://res.cloudinary.com/dulyi2vmc/image/upload/v1652698370/zan_sapir_assets/register-login/EE3_8921_maxegy.jpg),
    center;
    background-size:cover;
`;  

export const Wrapper = styled.div`
    width: 75%;
    padding: 20px;
    background-color: white;
    border: 2px solid #6b0945;
    border-radius: 6px;
    @media ${device.tablet}{
        width: 40%;
    }
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

export const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

export const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

export const Button = styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color: #6b0945;
    color: white;
    cursor: pointer;
    &:hover{
        background-color: #750b4d;
    }
    &:active{
        background-color: #6b0945;
    }
`;
