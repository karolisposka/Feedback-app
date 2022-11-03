import React from "react";
import * as S from "./EditSuggestionForm.styles";
import { Categories, status } from "../select/selectConfig";
import { useSelector } from "react-redux";
import { suggestionMessageSelector, suggestionErrorSelector } from "../../store/selectors";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../input/Input";
import Select from "../select/Select";
import { newFeedbackCategories } from "../select/selectConfig";

const EditSuggestionForm = ({ suggestionTitle, category, stat, description, handleSubmit, handleDelete }) => {
  const message = useSelector(suggestionMessageSelector);
  const error = useSelector(suggestionErrorSelector);
  const formik = useFormik({
    initialValues: {
      title: suggestionTitle,
      category: category,
      status: stat,
      description: description,
    },
    validationSchema: Yup.object({
      title: Yup.string().required(),
      category: Yup.string().required(),
      status: Yup.string().required(),
      description: Yup.string().max(249).required(),
    }),
    onSubmit: (value) => {
      handleSubmit(value);
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
          {error && <S.StyledNotification color="#D73737">{error.err}</S.StyledNotification>}
          {message && <S.StyledNotification color="#4BB543">{message.msg}</S.StyledNotification>}
          <S.Title>Editing '{suggestionTitle}' </S.Title>
          <Input
            name="title"
            error={formik.errors.title && formik.touched.title ? formik.errors.title : null}
            type="text"
            label="Feedback Title"
            comment="Add a short, descriptive headline"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.title}
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
              styles={newFeedbackCategories}
              defaultValue={{ label: category, value: category }}
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
              defaultValue={{ label: stat, value: stat }}
              placeholder="Choose status"
              styles={newFeedbackCategories}
              handleChange={(value) => {
                formik.setFieldValue("status", value);
              }}
              handleBlur={() => {
                formik.setFieldTouched("status");
              }}
            />
          </Input>
          <Input
            label="Description"
            comment="Short description"
            error={formik.errors.description && formik.touched.description ? formik.errors.description : null}
          >
            <S.Textarea
              name="description"
              onChange={formik.handleChange}
              error={formik.errors.description}
              onBlur={formik.handleBlur}
              value={formik.values.description}
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
            <S.DeleteBtn type="button" handleClick={handleDelete}>
              Delete
            </S.DeleteBtn>
          </S.ButtonsWrapper>
        </S.Form>
      </S.Container>
    </>
  );
};

EditSuggestionForm.propTypes = {
  suggestionTitle: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  stat: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default EditSuggestionForm;
