import styled from "styled-components"
import { device } from "../../utils/responsive-ui/responsive";

export const Container = styled.div`
    flex: 4;
    height: 100vh;
`


export const HomeWidgets = styled.div`
    display: flex;
    margin: 20px 20px 20px 20px;
    flex-direction:column;

    @media ${device.laptopL} {
    flex-direction:row;
    };
`