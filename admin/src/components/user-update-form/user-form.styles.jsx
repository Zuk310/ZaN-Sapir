import styled from "styled-components"
import { device } from "../../utils/responsive-ui/responsive"

export const UserUpdateForm = styled.form`
    display: flex;
    /* justify-content: center;
    align-items: center; */
    margin-top: 20px;
    flex-direction: column;
    /* height: 100%; */
    @media ${device.laptopL} {
        flex-direction: row;
        justify-content: space-between;
        margin-top: 0px;
        height: 100%;
        
    }
`

export const UserUpdateItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    /* align-items: center; */
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
    /* margin-left: 20px; */
`
export const UserUpdateUpload = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
    @media ${device.laptopL} {
        margin-top: 0px;
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
    justify-content: space-around;
    
    
`
export const UserUpdateButton = styled.button`
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: darkblue;
    color: white;
    font-weight: 600;
`
export const UserUpdateLeft = styled.div`

`
// export const UserFormSelect= styled.select`

// `
// export const UserFormOption = styled.option`

// `
// export const PasswordContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   height: 200px;
// `