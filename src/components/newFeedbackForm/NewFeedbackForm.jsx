import React from "react";
import * as S from "./NewFeedbackForm.styles";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Categories, newFeedbackCategories } from "../select/selectConfig";
import Input from "../input/Input";

const NewFeedbackForm = ({ handleSubmit, error, message }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      description: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required(),
      category: Yup.string().required(),
      description: Yup.string().required(),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
      formik.resetForm();
    },
  });

  const resetForm = () => {
    return formik.resetForm();
  };

  return (
    <S.Container>
      {error && <S.StyledNotification color="#D73737">{error.err}</S.StyledNotification>}
      {message && <S.StyledNotification color="#4BB543">{message.msg}</S.StyledNotification>}
      <S.Form onSubmit={formik.handleSubmit}>
        <S.Title>Create New Feedback</S.Title>
        <Input
          name="title"
          type="text"
          label="Feedback Title"
          error={formik.touched.title && formik.errors.title ? formik.errors.title : null}
          comment="Add a short, descriptive headline"
          value={formik.values.title}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />
        <Input
          name="category"
          label="Category"
          comment="Choose a category for you feedback"
          error={formik.touched.category && formik.errors.category ? formik.errors.category : null}
        >
          <S.StyledSelect
            options={Categories}
            placeholder="Category"
            styles={newFeedbackCategories}
            handleChange={(value) => formik.setFieldValue("category", value)}
            handleBlur={() => {
              formik.setFieldTouched("category");
            }}
          />
        </Input>
        <Input
          label="Feedback Detail"
          comment="Include any specific comments on what should be improved, added, etc."
          error={formik.touched.description && formik.errors.description ? formik.errors.description : null}
        >
          <S.TextArea
            name="description"
            error={formik.errors.description && formik.touched.description ? formik.errors.description : null}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Input>

        <S.Button type="submit">Add Feedback</S.Button>
        <S.CancelBtn
          type="reset"
          handleClick={() => {
            resetForm();
          }}
        >
          Cancel
        </S.CancelBtn>
      </S.Form>
    </S.Container>
  );
};

NewFeedbackForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.shape({
    err: PropTypes.string.isRequired,
  }),
  message: PropTypes.shape({
    msg: PropTypes.string.isRequired,
  }),
};

export default NewFeedbackForm;
