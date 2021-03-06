import React from 'react';
import ReactDOM from 'react-dom';

import { appContainer } from '../../constants';


const Modal = ({ title, children, dialogClass, ...restProps }) => {
  return ReactDOM.createPortal((
    <div className="modal fade" tabIndex="-1" {...restProps}>
      <div className={`modal-dialog ${dialogClass}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  ), appContainer);
};

export default Modal;
