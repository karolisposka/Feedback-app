import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as S from "./ReplyForm.styles";

const ReplyForm = ({ handleSubmit }) => {
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
    <S.ReplyContainer onSubmit={formik.handleSubmit}>
      <S.textAreaWrapper>
        <S.TextArea
          name="content"
          placeholder="Type reply here..."
          error={formik.errors.content}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.content}
        />
        {formik.errors.content && formik.touched.content ? <S.Error>{formik.errors.content}</S.Error> : null}
      </S.textAreaWrapper>
      <S.SubmitBtn type="submit"> Post Reply </S.SubmitBtn>
    </S.ReplyContainer>
  );
};

export default ReplyForm;
