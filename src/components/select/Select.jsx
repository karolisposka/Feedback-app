import React from "react";
import PropTypes from "prop-types";
import * as S from "./Select.styles";

const Select = ({ className, options, styles, placeholder, handleChange, handleBlur }) => {
  return (
    <S.StyledSelect
      className={className}
      options={options}
      styles={styles}
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
};

export default Select;
