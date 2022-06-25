import { useEffect, useState } from 'react';
import { userRequest } from '../../utils/requests.utils';
import { useNavigate } from 'react-router-dom';
import {
  NewUsersBlockContainer,
  NewUsersBlockTitle,
  NewUsersBlockList,
  NewUsersBlockItem,
  NewUsersBlockImg,
  NewUsersBlockUser,
  NewUsersBlockUsername,
  NewUsersBlockButton,
  NewUsersBlockIcon
} from './new-users-block.styles';

const NewUsersBlock = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const handleUser = (id) => {
    navigate(`/user/${id}`);
  };

  const getUsers = async () => {
    try {
      const res = await userRequest.get('users/?new=true');
      setUsers(res.data);
    } catch (error) {
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <NewUsersBlockContainer>
      <NewUsersBlockTitle>New Join Members</NewUsersBlockTitle>
      <NewUsersBlockList>
        {users.map(
          (
            user //start move to component
          ) => (
            <NewUsersBlockItem key={user._id} onClick={() => handleUser(user._id)}>
              <NewUsersBlockImg
                src={
                  user.img ||
                  'https://secure.gravatar.com/avatar/8b7d16ceaa38755cec076564206a02e3?s=320&d=mm&r=g'
                }
                alt='userImg'
              />
              <NewUsersBlockUser>
                <NewUsersBlockUsername>{user.username}</NewUsersBlockUsername>
              </NewUsersBlockUser>
              <NewUsersBlockButton
                
              >
                <NewUsersBlockIcon/>
                Display
              </NewUsersBlockButton>
            </NewUsersBlockItem> //end
          )
        )}
      </NewUsersBlockList>
    </NewUsersBlockContainer>
  );
};

export default NewUsersBlock;
