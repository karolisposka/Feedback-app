import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as S from "./AddComment.styles";

const AddComment = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues: {
      content: "",
    },
    validationSchema: Yup.object({
      content: Yup.string().max(249, "content must be at most 250 characters").required(),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <S.Title>Add Comment</S.Title>
      <S.TextArea
        error={formik.errors.content && formik.touched.content ? formik.errors.content : null}
        name="content"
        placeholder="tap your comment here"
        maxLength={250}
        value={formik.values.content}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.content && formik.errors.content ? <S.Error>{formik.errors.content}</S.Error> : null}
      <S.ButtonWrapper>
        <span>{250 - formik.values.content.length} Characters left</span>
        <S.SubmitBtn type="submit">Post Comment</S.SubmitBtn>
      </S.ButtonWrapper>
    </S.Form>
  );
};

AddComment.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AddComment;
