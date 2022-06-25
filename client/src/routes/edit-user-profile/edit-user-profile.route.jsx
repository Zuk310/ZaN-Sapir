import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Publish } from '@mui/icons-material';

import app from "../../utils/firebase/firebase.utils";
import { updateUser } from '../../redux/server-functions/server-functions';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import {
  UserUpdateForm,
  UserUpdateItem,
  Label,
  Input,
  UserUpdateUpload,
  UserUpdateImg,
  UploadLabel,
  UserUpdateRight,
  UserUpdateLeft,
  UserUpdateButton,
  PasswordContainer,
} from './edit-user-profile.styles.jsx';




const EditUserProfile = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) =>
    state.user.currentUser
  );

  const [inputs, setInputs] = useState({ ...user });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => {
      if(e.target.name === "isAdmin"){
        const value = e.target.value ? true : false;
      setInputs((prev) => {
        return { ...prev, [e.target.name]: value};
      })}
      else if(e.target.value){
      return { ...prev, [e.target.name]: e.target.value };}
      else{
        return { ...prev, [e.target.name]: user[e.target.name] };
      }
    });
  };



  const handelRegister = (e) => {
    e.preventDefault();
    inputValidation();
  }

  const inputValidation = () => {
    switch (true) {
      case (inputs.password !== confirmPassword):
        alert("password do not match");
        break;
      case (inputs.password === "" || inputs.password === null || inputs.password === undefined):
        alert("password is bad");
        break;
      case (inputs.username === "" || inputs.username === null || inputs.username === undefined):
        alert("username is bad");
        break;
      case (inputs.email === "" || inputs.email === null || inputs.email === undefined):
        alert("email is bad");
        break;
      case (inputs.fname === "" || inputs.fname === null || inputs.fname === undefined):
        alert("fname is bad");
        break;
      case (inputs.lname === "" || inputs.lname === null || inputs.lname === undefined):
        alert("lname is bad");
        break;
      default:
        handleUpload();
    }
  }

  const fileNameHandler = () => {
    if(file === null){
      return new Date().getTime() + user.img
    }
    return new Date().getTime() + file.name
  }

  const handleUpload = () => {
    const fileName = fileNameHandler();
    const storage = getStorage(app);
    const storageRef = ref(storage, `users/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    if(file === null || file === "" || file === undefined){
      const updatedUser = { ...inputs};
      updateUser(user._id ,updatedUser, dispatch);
      alert("Update with no picture!");
      navigate(`/user`, { replace: true });
    }
    else{uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
            case "running":
              console.log("Upload is running");
              break;
          default:
          }
        },
      (error) => {
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const updatedUser = { ...inputs, img: downloadURL};
          updateUser(user._id ,updatedUser, dispatch);
          navigate(`/user`, { replace: true });
        });
        alert("Update Succsesful!");
      }
    );}
  };

  return (
    <UserUpdateForm>
      <UserUpdateLeft>
        <UserUpdateItem>
          <Label>Username</Label>
          <Input
            type='text'
            placeholder={user.username}
            onChange={handleChange}
            name='username'
          />
        </UserUpdateItem>
        <UserUpdateItem>
          <Label>First Name</Label>
          <Input
            type='text'
            placeholder={user.fname}
            onChange={handleChange}
            name='fname'
          />
        </UserUpdateItem>
        <UserUpdateItem>
          <Label>Last Name</Label>
          <Input
            type='text'
            placeholder={user.lname}
            onChange={handleChange}
            name='lname'
          />
        </UserUpdateItem>
        <UserUpdateItem>
          <Label>Email</Label>
          <Input
            type='text'
            placeholder={user.email}
            onChange={handleChange}
            name='email'
          />
        </UserUpdateItem>
          </UserUpdateLeft>
          <UserUpdateLeft>
        <UserUpdateItem>
          <Label>Date Of Birth</Label>
          <Input
            type='date'
            onChange={handleChange}
            name='dateOfBirth'
          />
        </UserUpdateItem>
        <UserUpdateItem>
          <Label>Adress</Label>
          <Input
            type='text'
            placeholder={user.adress}
            onChange={handleChange}
            name='adress'
          />
          </UserUpdateItem>
        <UserUpdateItem>
          <Label>City</Label>
          <Input
            type='text'
            placeholder={user.city}
            onChange={handleChange}
            name='city'
          />
        </UserUpdateItem>
        <UserUpdateItem>
          <Label>Phone</Label>
          <Input
            type='number'
            placeholder={user.phone}
            onChange={handleChange}
            name='phone'
          />
        </UserUpdateItem>
      </UserUpdateLeft>
      <UserUpdateRight>
        <UserUpdateUpload>
          <UserUpdateImg
            src={user.img || "https://secure.gravatar.com/avatar/8b7d16ceaa38755cec076564206a02e3?s=320&d=mm&r=g"}
            alt='userImg'
          />
          <UploadLabel htmlFor='file'>
            <Publish style={{ cursor: 'pointer', padding: 20, fontSize: 30  }} />
          </UploadLabel>
          <Input type='file' id='file' 
          style={{ display: 'none'}} 
          onChange={(e) => setFile(e.target.files[0])}/>
        </UserUpdateUpload>
        <PasswordContainer>
        <UserUpdateItem>
          <Label>Password</Label>
          <Input
            type='password'
            placeholder='Enter your password'
            onChange={handleChange}
            name='password'
            />
        </UserUpdateItem>
        <UserUpdateItem>
          <Label>Confirm Password</Label>
          <Input
            type='password'
            placeholder='Confirm password'
            onChange={(e)=>setConfirmPassword(e.target.value)}
            name='confirm-password'
            />
        </UserUpdateItem>
        </PasswordContainer>

        <UserUpdateButton onClick={handelRegister}>Update</UserUpdateButton>
      </UserUpdateRight>
    </UserUpdateForm>
  );
};
export default EditUserProfile;
