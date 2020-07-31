import React from 'react';
import T from 'prop-types';

const Button = ({
  children,
  onClick,
  disabled,
  type = 'button',
  className,
}) => (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className=""
    >
      {children}
    </button >
  );

Button.propTypes = {
  disabled: T.bool,
  type: T.string,
  onClick: T.func,
  children: T.string.isRequired,
  className: T.string,
}

export default Button;