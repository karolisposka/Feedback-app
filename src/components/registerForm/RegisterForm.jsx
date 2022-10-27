import React from "react";
import * as S from "./RegisterForm.styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../input/Input";

const RegisterForm = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required(),
      name: Yup.string().required(),
      password: Yup.string().min(8).required(),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <S.Form>
      <S.Title>Register</S.Title>
      <Input
        name="username"
        type="text"
        error={formik.errors.username && formik.touched.username ? formik.errors.username : null}
        label="Username"
        comment="Enter your username"
        handleBlur={formik.handleBlur}
        handleChange={(e) => {
          console.log(e);
        }}
      />
      <Input
        name="name"
        type="text"
        error={formik.errors.name && formik.touched.name ? formik.errors.name : null}
        label="Name"
        handleBlur={formik.handleBlur}
        comment="Enter your name"
        handleChange={(e) => {
          console.log(e);
        }}
      />
      <Input
        name="password"
        type="password"
        handleBlur={formik.handleBlur}
        error={formik.errors.password && formik.touched.password ? formik.errors.password : null}
        label="Password"
        comment="Password should be at least 8 characters long"
      />
      <S.Submit type="submit">Register</S.Submit>
      <S.Reset type="reset">Cancel</S.Reset>
    </S.Form>
  );
};

export default RegisterForm;
