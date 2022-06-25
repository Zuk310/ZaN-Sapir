import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/server-functions/server-functions';
import {Container, Wrapper, Title, Form, Input, Button, Link, Error} from './login.styles';

const LoginPage = () =>{
  const navigate = useNavigate();
  const dispatch = useDispatch() 
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const {isFetching, error} = useSelector(state=>state.user)

  const handelLogin = (e) => {
    e.preventDefault();
    login(dispatch, {username, password}, navigate)
  }

  return(
    <Container>
      <Wrapper>
        <Title>
          SIGN IN
        </Title>
        <Form>
          <Input placeholder="user name"  onChange={(e)=>setUsername(e.target.value)}></Input>
          <Input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}></Input>
          <Button onClick={handelLogin}
          disabled={isFetching}>
              LOG IN
          </Button>
          {error && <Error>Something Went Wrong</Error>}
          <Link>Forgot password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  )
};
export default LoginPage;