import React from "react";
import PropTypes from "prop-types";
import * as S from "./Select.styles";

const Select = ({ className, options, styles, placeholder, handleChange, handleBlur, defaultValue }) => {
  return (
    <S.StyledSelect
      className={className}
      options={options}
      styles={styles}
      defaultValue={defaultValue}
      components={{ IndicatorSeparator: () => null }}
      placeholder={placeholder}
      onBlur={handleBlur}
      onChange={(e) => {
        handleChange(e.value);
      }}
    />
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  styles: PropTypes.object,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
  defaultValue: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
};

export default Select;
