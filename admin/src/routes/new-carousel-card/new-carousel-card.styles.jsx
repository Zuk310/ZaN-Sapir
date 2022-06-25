import styled from "styled-components"

export const NewCardContainer = styled.div`
  display: flex;
  flex: 4;
  flex-direction:column;
  margin-inline: 30px;
  padding: 20px;
  justify-self: center;
  align-items:center;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

`

export const NewCardTitle = styled.h1`
   
`
export const NewCardForm = styled.form`
   margin-top: 10px;
  display: flex;
  flex-direction:column;
  justify-self: center;
  align-items:center;
`
export const NewCardItem = styled.div`
  width: 250px;
  display: flex;  
  flex-direction: ${props=> props.color ? "row" : "column"};
  margin-top: ${props=> props.color ? "25px" : "0x"};
  margin-bottom: 15px;

  `
export const Input = styled.input`
  padding: 10px;
`
export const Label = styled.label`
  padding: 10px;
`
export const InputColor = styled.input`
	-webkit-appearance: none;
	border: none;
	width: 45px;
	height: 45px;
  &::-webkit-color-swatch-wrapper {
    padding: 5px;
  }
  &::-webkit-color-swatch {
	border: none;
  }
`
export const Option = styled.option`
  
`
export const Button = styled.button`
  align-self:center;
  margin-top: 10px;
  padding: 7px 10px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`