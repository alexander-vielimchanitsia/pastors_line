import React from 'react';


const Button = ({ className, children, ...restProps }) => (
  <button type="button" className={`btn btn-secondary ${className}`} {...restProps}>{children}</button>
);

export default Button;
