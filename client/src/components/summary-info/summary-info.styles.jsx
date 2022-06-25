import styled from "styled-components";

export const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props =>props.type === "total" && 500};
    font-size: ${props =>props.type === "total" && "24px"}
`;
export const SummaryItemText = styled.span`
    
`;
export const SummaryItemPrice = styled.span`
    
`;