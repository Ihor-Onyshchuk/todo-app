import React from 'react';
import T from 'prop-types';

import './Input.scss';

const Input = props => {
  const {
    onChange,
    value,
    type = "text",
    placeholder,
  } = props;

  return (
    <div className="input-field">
      <input
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        autoFocus
      />
    </div>
  );
};

Input.propTypes = {
  type: T.string,
  placeholder: T.string,
  onChange: T.func.isRequired,
  value: T.string.isRequired,
}

export default Input;
