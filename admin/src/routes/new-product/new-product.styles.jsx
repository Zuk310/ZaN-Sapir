import styled from "styled-components"
import {device} from '../../utils/responsive-ui/responsive'
export const NewProductContainer = styled.div`
  flex: 4;
  margin-left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media ${device.desktopL}{
    margin-left: 100px;

  }
`

export const NewProductTitle = styled.h1`
   
`
export const NewProductForm = styled.form`
   margin-top: 10px;
`
export const NewProductItem = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`
export const Input = styled.input`
  padding: 16.5px 14px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.281);
  &:hover{
    border: 1px solid rgba(0, 0, 0, 0.87);
  };
  &:active{
    border: 1px solid blue;
  };
`
export const Label = styled.label`
  padding: 10px;
`
export const SelectInput = styled.select`
  padding: 10px;
`
export const Option = styled.option`
  
`
export const Span = styled.span`
  
`
export const Button = styled.button`
  margin-top: 10px;
  padding: 7px 10px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`

export const CheckboxsTitle = styled.span`
  padding: 10px;
`
export const ListItemColor = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 5px;
  border: 1px solid gray;
  background-color: ${(props) => props.color};
  cursor: pointer;
`
export const CheckboxItems = styled.div`

`
export const CheckboxDropdownListItemLabel = styled.label`
    display: block;
    border-bottom: 1px solid silver;
    padding: 10px;
   
    transition: all 0.2s ease-out;
    &:hover{
    background-color: #555;
    color: white;
    }
`
export const CheckboxDropdownListItem = styled.li`

`
