import {
  NewUserContainer,
  NewUserTitle,
} from './new-user.styles';



import NewUserFormComponent from '../../components/new-user-form/new-user-form.component';

const NewUser = () => {

  return (
    <NewUserContainer>
      <NewUserTitle>New User</NewUserTitle>
      <NewUserFormComponent/>
    </NewUserContainer>
  );
}

export default NewUser;