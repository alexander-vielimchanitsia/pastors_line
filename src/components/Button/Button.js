import React from 'react';


const Button = ({ className, children, ...restProps }) => (
  <button type="button" className={`btn ${className}`} {...restProps}>{children}</button>
);

export default Button;
