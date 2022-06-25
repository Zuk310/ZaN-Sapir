import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import app from "../../utils/firebase.utils";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { register } from '../../redux/server-calls/server-calls';

import {
  NewUserForm,
  Label,
  Input,
  NewUserRadio,
  RadioLabel,
  RadioInput,
  UserImgUpload,
  UploadLabel,
  Button,
  NewUserProperty,
} from './new-user-form.styles';



const NewUserFormComponent = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState([]);

  const handleChange = (e) => {
    if (e.target.name !== "isAdmin") {
      setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    }
    else {
      const value = e.target.value === "true" ? true : false;
      setInputs((prev) => {
        return { ...prev, [e.target.name]: value };
      })
    };
  }

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
      case (inputs.phone === "" || inputs.phone === null || inputs.phone === undefined):
        alert("phone is bad");
        break;
      case (inputs.adress === "" || inputs.adress === null || inputs.adress === undefined):
        alert("adress is bad");
        break;
      case (inputs.city === "" || inputs.city === null || inputs.city === undefined):
        alert("city is bad");
        break;
      case (inputs.isAdmin === "" || inputs.isAdmin === null || inputs.isAdmin === undefined):
        alert("specify if the user is an admin");
        break;
      default:
        handleUpload();
    }
  }


  const fileNameHandler = () => {
    if (file === null) {
      return new Date().getTime() + inputs.img
    }
    return new Date().getTime() + file.name
  }

  const handleUpload = () => {
    const fileName = fileNameHandler();
    const storage = getStorage(app);
    const storageRef = ref(storage, `users/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    if (file === null || file === "" || file === undefined) {
      const newUser = { ...inputs};
      register(dispatch, newUser)

      alert("Update with no picture!");
      navigate(`/users`);
    }
    else {
      uploadTask.on(
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
            const newUser = { ...inputs, img: downloadURL };
            register(dispatch, newUser);
            navigate(`/users`);
          });
          alert("Update Succsesful!");
        }
      );
    }
  };


  return (
    <NewUserForm>
      <NewUserProperty>
        <Label>Username</Label>
        <Input
          type='text'
          placeholder='jhon'
          name='username'
          required
          onChange={handleChange}
        />
      </NewUserProperty>

      <NewUserProperty>
        <Label>Email</Label>
        <Input
          type='email'
          placeholder='mail@gmail.com'
          name='email'
          required
          onChange={handleChange}
        />
      </NewUserProperty>

      <NewUserProperty>
        <Label>First Name</Label>
        <Input
          type='text'
          placeholder='John Smith'
          name='fname'
          required
          onChange={handleChange}
        />
      </NewUserProperty>

      <NewUserProperty>
        <Label>Last Name</Label>
        <Input
          type='text'
          placeholder='John Smith'
          name='lname'
          required
          onChange={handleChange}
        />
      </NewUserProperty>

      <NewUserProperty>
        <Label>Password</Label>
        <Input
          type='password'
          placeholder='password'
          name='password'
          required
          onChange={handleChange}
        />
      </NewUserProperty>

      <NewUserProperty>
        <Label>Confirm Password</Label>
        <Input
          type='password'
          placeholder='password'
          name='confirm-password'
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </NewUserProperty>

      <NewUserProperty>
        <Label>Phone</Label>
        <Input
          type='text'
          placeholder='0532345678'
          name='phone'
          required
          onChange={handleChange}
        />
      </NewUserProperty>

      <NewUserProperty>
        <Label>Address</Label>
        <Input
          type='text'
          placeholder='Dizingof 8'
          name='adress'
          required
          onChange={handleChange}
        />
      </NewUserProperty>

      <NewUserProperty>
        <Label>City</Label>
        <Input
          type='text'
          placeholder='New York'
          name='city'
          required
          onChange={handleChange}
        />
      </NewUserProperty>

      <NewUserProperty>
        <Label>Date Of Birth</Label>
        <Input
          type='date'
          placeholder='dd/mm/yyyy'
          name='dateOfBirth'
          onChange={handleChange}
        />
      </NewUserProperty>

      <NewUserProperty>
        <Label>Occupation</Label>
        <Input
          type='text'
          placeholder='Worker'
          name='occupation'
          onChange={handleChange}
        />
      </NewUserProperty>

      <NewUserProperty>
        <UserImgUpload>
          <UploadLabel htmlFor='file'>
            User Photo
          </UploadLabel>
          <Input
            type='file'
            id='file'
            // style={{ display: 'none'}}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </UserImgUpload>
      </NewUserProperty>
      <NewUserProperty>
        <Label>Gender</Label>
        <NewUserRadio>
          <RadioInput
            type='radio'
            name='gender'
            id='male'
            value='male'
            onChange={handleChange}
          />
          <RadioLabel htmlFor='male'>Male</RadioLabel>
          <RadioInput
            type='radio'
            name='gender'
            id='female'
            value='female'
            onChange={handleChange}
          />
          <RadioLabel htmlFor='female'>Female</RadioLabel>
        </NewUserRadio>
      </NewUserProperty>

      <NewUserProperty>
        <Label>Admin</Label>
        <NewUserRadio>
          <RadioInput
            type='radio'
            name='isAdmin'
            id={true}
            value={true}
            onChange={handleChange}
          />
          <RadioLabel htmlFor='isAdmin'>Yes</RadioLabel>
          <RadioInput
            type='radio'
            name='isAdmin'
            id={'false'}
            value={false}
            onChange={handleChange}
          />
          <RadioLabel htmlFor='isAdmin'>No</RadioLabel>
        </NewUserRadio>
      </NewUserProperty>

      <Button onClick={handelRegister} type="submit" value="Submit" >Create</Button>
    </NewUserForm>
  );
};

export default NewUserFormComponent;
