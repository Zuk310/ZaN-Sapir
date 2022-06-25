import {UserShowInfo, UserShowInfoTitle } from './user-info.styles'

const UserInfoComponent = ({Icon, label}) =>{
  return(
    <UserShowInfo>
      <Icon style={{fontSize: "16px !important"}}/>
      <UserShowInfoTitle>{label}</UserShowInfoTitle>
    </UserShowInfo>
  )
};
export default UserInfoComponent;