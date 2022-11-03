import React from "react";
import * as S from "./LoginForm.styles";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../input/Input";
import Notification from "../notification/Notification";

const LoginForm = ({ handleSubmit, error, message }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required(),
      password: Yup.string().min(8).required(),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <S.Form onSubmit={formik.handleSubmit}>
      {error && <Notification color="#D73737">{error}</Notification>}
      {message && <Notification color="#4BB543">{message}</Notification>}
      <S.Title>Login</S.Title>
      <Input
        name="username"
        type="text"
        error={formik.errors.username && formik.touched.username ? formik.errors.username : null}
        label="Username"
        comment="Enter your username"
        value={formik.values.username}
        handleBlur={formik.handleBlur}
        handleChange={formik.handleChange}
      />
      <Input
        name="password"
        type="password"
        handleBlur={formik.handleBlur}
        handleChange={formik.handleChange}
        value={formik.values.password}
        error={formik.errors.password && formik.touched.password ? formik.errors.password : null}
        label="Password"
        comment="Password should be at least 8 characters long"
      />
      <S.Submit type="submit">Login</S.Submit>
    </S.Form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  message: PropTypes.string,
};

export default LoginForm;
