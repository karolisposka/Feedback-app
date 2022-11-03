import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../store/selectors";
import { errorRecieved, messageRecieved } from "../store/slices/userSlice";
import RegisterForm from "../components/registerForm/RegisterForm";
import FormContainer from "../components/formContainer/FormContainer";
import BackBtn from "../components/backButton/BackBtn";

const Register = () => {
  const dispatch = useDispatch();
  const { error, message } = useSelector(userSelector);

  const handleRegistration = async (inputs) => {
    const formData = new FormData();
    formData.append("username", inputs.username);
    formData.append("name", inputs.name);
    formData.append("password", inputs.password);
    inputs.image && formData.append("file", inputs.image);

    try {
      const response = await axios({
        baseURL: process.env.REACT_APP_BASE_URL,
        url: "v1/users/register",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      });
      if (response.data.err) {
        return dispatch(errorRecieved(response.data.err));
      }
      if (response.data.msg) {
        return dispatch(messageRecieved(response.data.msg));
      } else {
        return alert("something went wrong. Please try again later");
      }
    } catch (err) {
      if (err.response.data.err) {
        return dispatch(errorRecieved(err.response.data.err));
      }
    }
  };

  return (
    <FormContainer>
      <BackBtn />
      <RegisterForm
        error={error ? error : null}
        message={message ? message : null}
        handleSubmit={(values) => {
          handleRegistration(values);
        }}
      />
    </FormContainer>
  );
};

export default Register;
