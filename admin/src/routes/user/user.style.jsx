import styled from "styled-components"
import {device} from '../../utils/responsive-ui/responsive'


export const UserDiv = styled.div`
  flex: 4;
  padding: 20px;
  height: 100vh;
  `

export const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  `
export const UserTitle = styled.h1`

`
export const UserAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  `

export const UserContainer = styled.div`
    display: flex;
    margin-top: 20px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${device.laptopL} {
      flex-direction: row;
    }
    
`
export const UserShow = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-bottom: 20px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.laptopL} {
      margin-bottom: 0px;
      flex: 1;
      padding: 20px;
      max-width: 220px;
      height: 40vh;
  }
`
export const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.laptopL} {
    margin-left: 20px;
    display: block;
    height: 40vh;
    width: 100%;
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





