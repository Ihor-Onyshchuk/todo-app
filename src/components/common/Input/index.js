import React from 'react';
import T from 'prop-types';
import cx from 'classnames';

import './Input.scss';

const Input = props => {
  const {
    onChange,
    value,
    type = "text",
    placeholder,
    className
  } = props;

  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
      autoFocus
      className={cx('input', className)}
    />
  );
};

Input.propTypes = {
  type: T.string,
  placeholder: T.string,
  onChange: T.func.isRequired,
  value: T.string.isRequired,
  className: T.string,
}

export default Input;