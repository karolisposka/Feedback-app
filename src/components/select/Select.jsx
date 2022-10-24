import React from "react";
import PropTypes from "prop-types";
import * as S from "./Select.styles";

const Select = ({ className, options, styles, placeholder, handleChange }) => {
  return (
    <S.StyledSelect
      className={className}
      options={options}
      styles={styles}
      components={{ IndicatorSeparator: () => null }}
      placeholder={placeholder}
      onChange={(e) => {
        handleChange(e);
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
};

export default Select;
