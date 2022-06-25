import styled from "styled-components";
import { device } from "../../utils/responsive-ui/responsive";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    @media ${device.tablet} {
        flex-direction: row;
    }
`;

export const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
export const Center = styled.div`
    flex:1;
    padding: 20px;
    display: none;
    @media ${device.tablet} {
        display: block;
        flex-direction: row;
    }

`;
export const Right = styled.div`
    flex:1;
    padding: 20px;
    background-color: #fff8f8;
    @media ${device.tablet} {
        background-color: white;
    }
`;

export const Logo = styled.h1`

`;

export const Description = styled.p`
    margin: 20px 0px;


`;

export const SocialContainer = styled.div`
    display: flex;

`;

export const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 20px;
`;

export const Title = styled.h3`
    margin-bottom: 30px;
`
export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap:wrap;
`
export const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`
export const ContactItem = styled.a`
margin-bottom: 20px;
display: flex;
align-items: center;
text-decoration:none;
color: black;
cursor: pointer;
`
export const Payment = styled.img`
    width: 50%;
`