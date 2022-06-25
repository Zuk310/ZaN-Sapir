import styled from 'styled-components';
import { device } from '../../utils/responsive-ui/responsive';

export const CarouselContainer = styled.div`


`
export const CardsListContainer = styled.div`
  flex: 3;
  padding: 20px;
  flex-direction: column;
  display: flex;
  height: 100%;
  min-height: 600px;
`

export const CardList = styled.div`
  display: flex;
  align-items: center;
`
export const CardImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`
export const CardEdit = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3b9eb0;
    color: white;
    cursor: pointer;
    margin-right: 20px;
`

export const AddCard = styled.button`
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

export const CardColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;