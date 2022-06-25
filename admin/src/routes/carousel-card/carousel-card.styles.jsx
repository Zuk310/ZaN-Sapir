import styled from "styled-components"
import { Publish, DeleteForever } from '@mui/icons-material';

import { device } from "../../utils/responsive-ui/responsive";

export const CarouselCardContainer = styled.div`
  flex: 4;
  padding: 20px;
`
export const CardTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const CardTitle = styled.h1`

`
export const CardAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`
export const ProductInfoImg = styled.img`

  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
  padding: 10px;
`

export const CardEdit = styled.div`

  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  @media ${device.laptop} {
    justify-content: space-around;
    flex-direction: row;
  }
`
export const CardForm = styled.form`
  width:250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const CardFormLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`
export const CardFormLabel = styled.label`
  margin-bottom: 5px;

  color: gray;
`
export const CardFormInput = styled.input`
  margin-bottom: 30px;
  border: none;
  padding:5px;
  border-bottom: 1px solid gray;

`
export const CardFormInputColor = styled.input`
	border: none;
	width: 45px;
	height: 45px;
  margin-bottom: 15px;
  &::-webkit-input-placeholder {
    color: red;
  }
`

export const CardUploadInput = styled.input`
  display:none;
`
export const CardUploadLabel = styled.label`
`

export const CardImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  margin: 0px 10px;
`
export const CardImgUpload = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ProductButton = styled.button`
  align-self: center;
  width: 80px;
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color:white;
  font-weight: 600;
  cursor: pointer;
`
export const CardPreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
  @media ${device.laptop} {
    margin-bottom: 0px;
  }
`
export const PreviewContainerTitle = styled.span`
  font-size: 18px;
  padding: 10px;
  font-weight: 600;
  `
export const PreviewContainer = styled.div`
  width: 320px;
  height: 180px;
  background-color: ${props => props.bg};
  display: flex;
  justify-content: center;
`
export const PreviewImg = styled.img`
  object-fit: cover;
  width: 40%;
  flex: 1;
`
export const PreviewContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex: 1;
`

export const PreviewButton = styled.button`
    padding: 4px 7px;
    font-size: 5px;
    background-color: transparent;
    width: 35%;
    border: 0.2em solid black;
`
export const PreviewTitle = styled.span`
font-size: 10px;
margin-bottom: 8px;
`
export const PreviewDescription = styled.span`
font-size: 5px;
margin-bottom: 14px;
`
export const DeleteForeverIcon = styled(DeleteForever)`
  color: #b43e3e;
`
export const PublishIcon = styled(Publish)`
  color: #42a347;
`
