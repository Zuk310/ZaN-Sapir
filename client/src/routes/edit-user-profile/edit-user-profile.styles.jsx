import styled from "styled-components"
import { device } from "../../utils/responsive-ui/responsive"

export const UserUpdateForm = styled.form`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    flex-direction: column;
    margin: 10px 20px;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    @media ${device.tablet} {
      flex-direction: row;
    }
    
    
`

export const UserUpdateItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    align-items: center;
    justify-content: start;
`
export const Label = styled.label`
    margin-bottom: 5px;
    font-size: 14px;
`
export const Input = styled.input`
    border: none;
    width: 250px;
    height: 30px;
    border-bottom: 1px solid gray;
    padding: 1px 2px;
`
export const UserUpdateUpload = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media ${device.laptop} {
      flex-direction: row;
      justify-content: space-around;
    }
    
`
export const UserUpdateImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
`
export const UploadLabel = styled.label`

`

export const UserUpdateRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`
export const UserUpdateButton = styled.button`
    width: 150px;
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: darkblue;
    color: white;
    font-weight: 600;
    align-self: center;

`
export const UserUpdateLeft = styled.div`

`

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 200px;
  
`