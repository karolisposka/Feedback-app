import React from "react";
import * as S from "./EditSuggestionForm.styles";
import Input from "../input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "../select/Select";
import { Categories, status } from "../select/selectConfig";

const EditSuggestionForm = ({ suggestionTitle }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      status: "",
      description: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required(),
      category: Yup.string().required(),
      status: Yup.string().required(),
      description: Yup.string().max(249).required(),
    }),
    onSubmit: (value) => {
      console.log(value);
      formik.resetForm();
    },
  });

  const handleReset = () => {
    formik.resetForm();
  };

  return (
    <>
      <S.Container>
        <S.Form onSubmit={formik.handleSubmit}>
          <S.Title>Editing {suggestionTitle} </S.Title>
          <Input
            name="title"
            error={formik.errors.title && formik.touched.title ? formik.errors.title : null}
            type="text"
            label="Feedback Title"
            comment="Add a short, descriptive headline"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
          <Input
            label="Category"
            error={formik.errors.category && formik.touched.category ? formik.errors.category : null}
            comment="Choose a category for your feedback"
          >
            <Select
              name="category"
              placeholder="Choose category"
              options={Categories}
              handleChange={(value) => {
                formik.setFieldValue("category", value);
              }}
              handleBlur={() => {
                formik.setFieldTouched("category");
              }}
            />
          </Input>
          <Input
            label="Update Status"
            comment="Choose feature state"
            error={formik.errors.status && formik.touched.status ? formik.errors.status : null}
          >
            <Select
              name="status"
              options={status}
              placeholder="Choose status"
              handleChange={(value) => {
                formik.setFieldValue("status", value);
              }}
              handleBlur={() => {
                formik.setFieldTouched("status");
              }}
            />
          </Input>
          <Input
            label="Update Status"
            comment="Choose feature state"
            error={formik.errors.description && formik.touched.description ? formik.errors.description : null}
          >
            <S.Textarea
              name="description"
              onChange={formik.handleChange}
              error={formik.errors.description}
              onBlur={formik.handleBlur}
            />
          </Input>
          <S.ButtonsWrapper>
            <S.SubmitBtn type="submit">Submit</S.SubmitBtn>
            <S.CancelBtn
              type="reset"
              handleClick={() => {
                handleReset();
              }}
            >
              Cancel
            </S.CancelBtn>
            <S.DeleteBtn type="button"> Delete </S.DeleteBtn>
          </S.ButtonsWrapper>
        </S.Form>
      </S.Container>
    </>
  );
};

export default EditSuggestionForm;
