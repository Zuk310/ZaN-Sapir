import styled from "styled-components";
import { device } from "../../utils/responsive-ui/responsive";

export const Container = styled.div`
    display: flex;
    padding: 0px;
    flex-direction: column;
    align-items: center;
    margin-top: 8px;
    @media ${device.tablet}{
        padding: 20px;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: row;
    }
`
