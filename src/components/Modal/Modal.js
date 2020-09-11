import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');


const Modal = ({ title, children, ...restProps }) => {
  return ReactDOM.createPortal((
    <div className="modal fade" tabIndex="-1" {...restProps}>
      <div className="modal-dialog">
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
  ), rootElement);
};

export default Modal;
