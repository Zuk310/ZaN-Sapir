import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to bottom, #ffffff99 30%,#0a042299 100%), url('https://firebasestorage.googleapis.com/v0/b/zan-sapir.appspot.com/o/general%2FEE3_8959.JPG?alt=media&token=f208f496-387e-47ec-b211-a7100a57a182');
  background-repeat:   no-repeat;
  background-size: cover;
  background-position: center center;
`
export const LoginBox = styled.div`
  padding: 50px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  background-color: #ffffffc7;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  border: 1px solid #000080;
  border-radius: 6px;
`
export const LoginLabel = styled.label`
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 500;
  color: #000080;
`
export const LoginInput = styled.input`
padding: 10px;
margin-bottom: 20px;
border: 1px solid #000080;
border-radius: 4px;
`
export const LoginButton = styled.button`
padding: 10px;
width: 100px;
border: none;
border-radius: 4px;
color: white;
background-color: #000080;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
transition: all 0.2s ease-in-out;
&:hover{
    background-color: #1c1ca5;
    transform: scale(1.02);
}
&:active{
    background-color: #0e0e81;
    transform: scale(1.02);
}
`
