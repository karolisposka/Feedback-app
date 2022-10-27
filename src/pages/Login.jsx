import React from "react";
import RegisterContainer from "../components/registerContainer/RegisterContainer";
import LoginForm from "../components/loginForm/LoginForm";

const Login = () => {
  return (
    <RegisterContainer>
      <LoginForm
        handleSubmit={(e) => {
          console.log(e);
        }}
      />
    </RegisterContainer>
  );
};

export default Login;
