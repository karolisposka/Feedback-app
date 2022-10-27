import React from "react";
import RegisterContainer from "../components/registerContainer/RegisterContainer";
import RegisterForm from "../components/registerForm/RegisterForm";

const Register = () => {
  return (
    <RegisterContainer>
      <RegisterForm
        handleSubmit={(values) => {
          console.log(values);
        }}
      />
    </RegisterContainer>
  );
};

export default Register;
