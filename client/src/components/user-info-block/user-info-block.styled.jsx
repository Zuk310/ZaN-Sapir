import styled from "styled-components"
import { device } from "../../utils/responsive-ui/responsive"


export const UserAddButton = styled.button`
  margin: 5px;
  width: 100px;
  border: none;
  padding: 10px;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
    &:hover{
    background-color: #008a8a;
  }
  &:active{
    background-color: teal;
  }
`
export const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
      width: 450px;
  }
`
export const UserShowTop = styled.div`
  display: flex;
  align-items: center;
  
`
export const UserShowImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  `

export const UserShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`
export const UserShowUsername = styled.span`
  font-weight: 600;
`
export const UserShowUserTitle = styled.span`
  font-weight: 300;
`
export const UserShowBottom = styled.div`
 margin-top: 20px;
`
export const UserShowTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgb(175, 170, 170);
`
export const UserUpdateTitle = styled.span`
    font-size: 24px;
    font-weight: 600;
`
  
export const UserButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  
    @media ${device.tablet} {
      flex-direction: row;
    }
`
  
export const UserUpdateButton = styled.button`
  margin: 5px;
  width: 100px;
  border: none;
  padding: 10px;
  background-color: #000074;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  &:hover{
    background-color: darkblue;
  }
  &:active{
    background-color: #000074;
  }
`
