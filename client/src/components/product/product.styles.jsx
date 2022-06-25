import styled from "styled-components";

export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
`;

export const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  /* width: 50%; */
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f0fc;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;
export const Image = styled.img`
  height: 75%;
  max-height: 200px;
  z-index: 2;

`;
export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  
  transition: all 0.5s ease;

  :hover {
    background-color: #d1d0d0;
    transform: scale(1.1);
  }
`;
