import React from "react";
import * as S from "./NewFeedbackForm.styles";
import Input from "../input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Categories, newFeedbackCategories } from "../select/selectConfig";

const NewFeedbackForm = () => {
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
    onSubmit: () => {
      console.log(formik.values);
    },
  });

  return (
    <S.Container>
      <S.Form>
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
          />
        </Input>
        <Input
          label="Feedback Detail"
          comment="Include any specific comments on what should be improved, added, etc."
          error={formik.touched.description && formik.errors.description ? formik.errors.description : null}
        >
          <S.TextArea
            name="description"
            error={formik.errors.description}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Input>

        <S.Button type="submit">Add Feedback</S.Button>
        <S.CancelBtn type="reset">Cancel</S.CancelBtn>
      </S.Form>
    </S.Container>
  );
};

export default NewFeedbackForm;
