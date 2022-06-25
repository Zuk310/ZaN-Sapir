import {  useSelector } from 'react-redux';
import dateFormat from 'dateformat';
import { useNavigate } from 'react-router-dom';

import UserInfoComponent from '../../components/user-info/user-info.component.jsx';

import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from '@mui/icons-material';

import {
UserShow,
UserShowTop,
UserShowImg,
UserShowTopTitle,
UserShowUsername,
UserShowUserTitle,
UserShowBottom,
UserShowTitle,
UserButtonsContainer,
UserUpdateButton,
UserAddButton
} from './user-info-block.styled.jsx';


const UserInfoBlock = () => {
  const navigate = useNavigate();
  const user = useSelector((state) =>
    state.user.currentUser
  );


  return (
        <UserShow>
          <UserShowTop>
            <UserShowImg
              src={user.img || "https://secure.gravatar.com/avatar/8b7d16ceaa38755cec076564206a02e3?s=320&d=mm&r=g"}
              alt='userImg'
            />
            <UserShowTopTitle>
              <UserShowUsername>{`${user.fname.charAt(0).toUpperCase() + user.fname.slice(1)} ${user.lname.charAt(0).toUpperCase() + user.lname.slice(1)}`}</UserShowUsername>
              <UserShowUserTitle>{user.occupation ? (user.occupation.charAt(0).toUpperCase() + user.occupation.slice(1)) : ("Not Specified")}</UserShowUserTitle>
            </UserShowTopTitle>
          </UserShowTop>
          <UserShowBottom>
            <UserShowTitle>Account Details</UserShowTitle>
            <UserInfoComponent Icon={PermIdentity} label={user.username}/>
            <UserInfoComponent Icon={CalendarToday} label={dateFormat(user.dateOfBirth, "mmm d, yyyy") || "Not Specified"}/>
            <UserShowTitle>Contact Details</UserShowTitle>
            <UserInfoComponent Icon={PhoneAndroid} label={user.phone || "Not Specified"}/>
            <UserInfoComponent Icon={MailOutline} label={user.email}/>
            <UserInfoComponent Icon={LocationSearching} label={user.adress ? (`${user.adress.charAt(0).toUpperCase() + user.adress.slice(1)} | ${user.city.charAt(0).toUpperCase() + user.city.slice(1)} ` ) : ("Not Specified")}/>
          </UserShowBottom>
          <UserButtonsContainer>
              <UserAddButton onClick={()=>navigate('/orders' , { replace: true })}>View Orders</UserAddButton>
              <UserUpdateButton onClick={()=>navigate('/edit-user' , { replace: true })}>Update Info</UserUpdateButton>
          </UserButtonsContainer>
        </UserShow>
  );
};
export default UserInfoBlock;
