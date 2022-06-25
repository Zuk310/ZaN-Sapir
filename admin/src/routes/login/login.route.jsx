import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/server-calls/server-calls";

import {
  LoginContainer,
  LoginBox,
LoginLabel,
LoginInput,
LoginButton} from './login.styles.jsx'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <LoginContainer>
      <LoginBox>
      <LoginLabel>Admin Login</LoginLabel>
      <LoginInput
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <LoginInput
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <LoginButton onClick={handleClick}>
        Login
      </LoginButton>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;