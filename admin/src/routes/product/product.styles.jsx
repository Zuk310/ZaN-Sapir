import styled from "styled-components"
import {device} from '../../utils/responsive-ui/responsive'
export const ProductContainer = styled.div`
  flex: 4;
  padding: 20px;
  height: 180vh;
  @media ${device.mobileS}{
  height: 200vh
  }
  @media ${device.laptopL}{
  height: 130vh;
  }
`
export const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`
export const ProductTitle = styled.h1`
`
export const ProductTop = styled.div`
  display: flex;
  flex-direction: column;
  height:auto;
  flex-wrap: wrap;
  @media ${device.laptopL}{
  flex-direction: row;
  flex-wrap: wrap;
  }
`

export const ProductAddProduct = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`
export const ProductTopLeft = styled.button`
  flex: 1;
  padding: 5px;
  margin: 20px 20px 60px 20px;
  border: none;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  background-color: white;

  @media ${device.tablet}{
  padding: 20px;
  margin: 20px;
  }
`
export const ProductTopRight = styled.button`
  flex: 1;
  padding: 20px;
  margin: 20px;
  border: none;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  background-color: white;
  display: flex;
  align-items:center;
  justify-content: space-around;
  flex-direction: column;
  
  @media ${device.tablet}{
  flex-direction: row;
  }
`
export const ProductInfoTop = styled.div`
  display: flex;
  flex-direction: column;
    
`
export const ProductName = styled.span`
  padding: 10px;
  font-weight: 600;
  `

export const ProductInfoBottom = styled.div`
  margin-top: 10px;
  padding: 20px;
  
`
export const ProductInfoImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
  padding: 10px;
  
`

export const ProductBottom = styled.div`
  
  padding: 20px;
  margin: 20px ;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
    
  @media ${device.laptopL}{
  flex-direction: row;
  flex-wrap: wrap;
  }
`
export const ProductForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media ${device.laptopL}{
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  }

`

export const ProductFormLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  margin-bottom: 20px;

  @media ${device.laptopL}{
  flex-direction: column;
  padding-left: 30px;
  margin-bottom: 0px;
  }
`
export const ProductFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-right: 0px;

  @media ${device.laptopL}{
  padding-left: 30px;
  margin-bottom: 0px;
  }
`
export const ProductFormLeftLabel = styled.label`
  margin-bottom: 5px;
  color: gray;
`
export const ProductFormLeftInput = styled.input`
  margin-bottom: 30px;
  border: none;
  padding:5px;
  border-bottom: 1px solid gray;
`
export const ProductFormLeftSelect = styled.select`
  margin-bottom: 10px;
`
export const ProductFormLeftOption = styled.option`
`

export const ProductFormRightInput = styled.input`
  display:none;
`
export const ProductFormRightLabel = styled.label`
`

export const ProductUploadImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 20px;
  margin-bottom: 20px;

  @media ${device.laptopL}{
  margin-bottom: 0px;
  }
`
export const ProductUpload = styled.div`
    display: flex;
  align-items: center;
`
export const ProductButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color:white;
  font-weight: 600;
  cursor: pointer;
`
