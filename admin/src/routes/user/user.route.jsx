import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import dateFormat from "dateformat";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@mui/icons-material';

import UserFormComponent from '../../components/user-update-form/user-form.compomemt';
import UserInfoComponent from '../../components/user-info/user-info.component';

import {
  UserDiv,
  UserTitleContainer,
  UserTitle,
  UserAddButton,
  UserContainer,
  UserShow,
  UserUpdate,
  UserShowTop,
  UserShowImg,
  UserShowTopTitle,
  UserShowUsername,
  UserShowUserTitle,
  UserShowBottom,
  UserShowTitle,
  UserUpdateTitle,
  
} from './user.style';


const User = () => {

const location = useLocation();
const userId = location.pathname.split('/')[2];
const user = useSelector((state) =>
state.users.users.find((user) => user._id === userId)
);

  const [inputs, setInputs] = useState({...user});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };


  return (
    <UserDiv>
      <UserTitleContainer>
        <UserTitle>Edit User</UserTitle>
        <Link to='/newUser'>
          <UserAddButton>Create</UserAddButton>
        </Link>
      </UserTitleContainer>
      <UserContainer>
        <UserShow>
          <UserShowTop>
            <UserShowImg
              src={user.img ? (user.img) : ("https://secure.gravatar.com/avatar/8b7d16ceaa38755cec076564206a02e3?s=320&d=mm&r=g")}
              alt='userImg'
            />
            <UserShowTopTitle>
              <UserShowUsername>{`${user.fname.charAt(0).toUpperCase() + user.fname.slice(1)} ${user.lname.charAt(0).toUpperCase() + user.lname.slice(1)}` || 'Not Specified'}</UserShowUsername>
              <UserShowUserTitle>{user.occupation ? (user.occupation.charAt(0).toUpperCase() + user.occupation.slice(1)) : 'Not Specified'}</UserShowUserTitle>
            </UserShowTopTitle>
          </UserShowTop>
          <UserShowBottom>
            <UserShowTitle>Account Details</UserShowTitle>
            <UserInfoComponent Icon={PermIdentity} label={user.username}/>
            <UserInfoComponent Icon={CalendarToday} label={user.dateOfBirth ? (dateFormat(user.dateOfBirth, "mmm d, yyyy") ): 'Not Specified'}/>
            <UserShowTitle>Contact Details</UserShowTitle>
            <UserInfoComponent Icon={PhoneAndroid} label={user.phone}/>
            <UserInfoComponent Icon={MailOutline} label={user.email}/>
            <UserInfoComponent Icon={LocationSearching} label={user.adress ? (`${user.adress.charAt(0).toUpperCase() + user.adress.slice(1)} | ${user.city.charAt(0).toUpperCase() + user.city.slice(1)} `) : 'Not Specified'}/>
          </UserShowBottom>
        </UserShow>
        <UserUpdate>
          <UserUpdateTitle>Edit</UserUpdateTitle>
          <UserFormComponent id={user._id}/>
        </UserUpdate>
      </UserContainer>
    </UserDiv>
  );
}

export default User;