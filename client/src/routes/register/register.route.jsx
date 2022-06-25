import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/server-functions/server-functions';
import {Container, Wrapper, Title, Form, Input, Agreement, Button} from './register.styles';

const RegisterPage = () =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
      setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      }); 
  };


  const handelRegister = (e) => {
    e.preventDefault();
    handleInputs();
  }

  const handleInputs = () =>{
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
        register(dispatch, inputs);
    }
  }

  return(
    <Container>
      <Wrapper>
        <Title>
          CREATE AN ACCOUNT
        </Title>
        <Form onSubmit={handelRegister}>
          <Input placeholder="user name" onChange={handleChange} name="username"/>
          <Input placeholder="email" onChange={handleChange} name="email"/>
          <Input placeholder="name" onChange={handleChange} name="fname"/>
          <Input placeholder="last name" onChange={handleChange} name="lname"/>
          <Input placeholder="password" type="password" onChange={handleChange} name="password"/>
          <Input placeholder="confirm password" type="password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
          <Agreement>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit recusandae sapiente vel quaerat similique quo fugit consectetur reiciendis
          </Agreement>
          <Button>
              SUBMIT
          </Button>
        </Form>
      </Wrapper>
    </Container>
  )
};

export default RegisterPage;