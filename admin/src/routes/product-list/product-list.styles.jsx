import styled from "styled-components"

export const ProductListContainer = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  min-height: 600px;
  height: 90vh;
`
export const ProductListGraphContainer = styled.div`
  flex: 4;
  margin: 10px;
`

export const ProductListItem = styled.div`
    display: flex;
    align-items: center;
`
export const ProductListImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`
export const ProductListEdit = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3b9eb0;
    color: white;
    cursor: pointer;
    margin-right: 20px;
`
export const AddProduct = styled.button`
  align-self: flex-end;
  width: 120px;
  border: none;
  padding: 5px;
  margin: 10px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`
