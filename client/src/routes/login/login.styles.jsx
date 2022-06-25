import styled from "styled-components";
import { device } from "../../utils/responsive-ui/responsive";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(255,255,255,0.5),#3f353e7f),
    url(https://res.cloudinary.com/dulyi2vmc/image/upload/v1652698371/zan_sapir_assets/register-login/EE3_8932_uz6hmo.jpg),
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
        width: 25%;
    }
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

export const Link = styled.a`
    margin: 10px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

export const Button = styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color: #6b0945;
    color: white;
    cursor: pointer;
    margin: 10px 0px;
    
    &:disabled{
        background-color: #6b0945a0;
        color: #aaaaaa;
        cursor: not-allowed;
    }
`;

export const Error = styled.span`
    color:red;
`
