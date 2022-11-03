import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userSelector } from "../store/selectors";
import { errorRecieved, messageRecieved, keyRecieved } from "../store/slices/userSlice";
import LoginForm from "../components/loginForm/LoginForm";
import FormContainer from "../components/formContainer/FormContainer";
import BackBtn from "../components/backButton/BackBtn";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { message, error } = useSelector(userSelector);

  const handleLogin = async (inputs) => {
    try {
      const response = await axios({
        baseURL: process.env.REACT_APP_BASE_URL,
        url: "v1/users/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: inputs,
      });
      if (response.data.err) {
        return dispatch(errorRecieved(response.data.err));
      }
      if (response.data.msg) {
        return dispatch(messageRecieved(response.data.msg));
      } else {
        dispatch(keyRecieved(response.data.token));
        return navigate("/");
      }
    } catch (err) {
      dispatch(errorRecieved(err.response.data.err));
    }
  };

  return (
    <FormContainer>
      <BackBtn />
      <LoginForm
        error={error ? error : null}
        message={message ? message : null}
        handleSubmit={(inputs) => {
          handleLogin(inputs);
        }}
      />
    </FormContainer>
  );
};

export default Login;
