import React from "react";
import * as S from "./RegisterForm.styles";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../input/Input";
import Notification from "../notification/Notification";

const RegisterForm = ({ handleSubmit, error, message }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      password: "",
      image: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required(),
      name: Yup.string().required(),
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
      <S.Title>Register</S.Title>
      <Input
        name="username"
        type="text"
        error={formik.errors.username && formik.touched.username ? formik.errors.username : null}
        label="Username"
        value={formik.values.username}
        comment="Enter your username"
        handleBlur={formik.handleBlur}
        handleChange={formik.handleChange}
      />
      <Input
        name="name"
        type="text"
        error={formik.errors.name && formik.touched.name ? formik.errors.name : null}
        label="Name"
        value={formik.values.name}
        handleBlur={formik.handleBlur}
        comment="Enter your name"
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
      <Input
        name="image"
        type="file"
        label="Profile picture"
        comment="Picture would be visible to other users"
        handleChange={(value) => {
          formik.setFieldValue("image", value.currentTarget.files[0]);
        }}
      />
      <S.Submit type="submit">Register</S.Submit>
      <S.Reset type="reset">Cancel</S.Reset>
    </S.Form>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  message: PropTypes.string,
};

export default RegisterForm;
