import styled from "styled-components";

export const UserOrdersContainer = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
`
export const OrderListGraphContainer = styled.div`
  flex: 4;
  margin: 10px;
`
export const ProductListGraphContainer = styled.div`
  flex: 4;
  margin: 10px;
`

export const OrderListItem = styled.div`
    display: flex;
    align-items: center;
`
export const OrderListImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`

export const ViewOrderButton = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3b9eb0;
    color: white;
    cursor: pointer;
    margin-right: 20px;
    align-self:center;
`