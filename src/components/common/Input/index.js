import React from 'react';
import T from 'prop-types';

const Input = props => {
  const {
    onChange,
    value,
    type = "text",
    placeholder
  } = props;

  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
      autoFocus
      className=""
    />
  );
};

Input.propTypes = {
  type: T.string,
  placeholder: T.string,
  onChange: T.func.isRequired,
  value: T.string.isRequired,
}

export default Input;