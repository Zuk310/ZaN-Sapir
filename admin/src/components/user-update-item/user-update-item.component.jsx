import {UserUpdateItem, Label, Input} from './user-update-item.styles';

const UserUpdateItemComponent = ({label, type, placeholder}) =>{
  return(
    <UserUpdateItem>
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
      />
    </UserUpdateItem>
  )
};
export default UserUpdateItemComponent;