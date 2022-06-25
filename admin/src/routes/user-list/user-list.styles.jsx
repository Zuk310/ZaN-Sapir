import styled from 'styled-components';

export const UserListContainer = styled.div`
  flex: 4;
  padding: 20px;
  flex-direction: column;
  display: flex;
  min-height: 600px;
  height: 90vh;
`
export const UserListUser = styled.div`
  display: flex;
  align-items: center;
`
export const UserListImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`
export const UserListEdit = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3b9eb0;
    color: white;
    cursor: pointer;
    margin-right: 20px;
`

export const AddUser = styled.button`
  align-self: flex-end;
  width: 120px;
  border: none;
  padding: 5px;
  margin: 10px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`