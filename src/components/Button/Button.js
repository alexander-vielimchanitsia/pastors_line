import React from 'react';


const Button = ({ className, children }) => (
  <button type="button" className={`btn btn-secondary ${className}`}>{children}</button>
);

export default Button;
