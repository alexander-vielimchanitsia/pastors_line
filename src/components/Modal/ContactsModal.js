import React from 'react';

import Modal from './Modal';


const ContactsModal = ({ children, ...restProps }) => (
  <Modal {...restProps}>
    <div className="modal-body">
      {children}
    </div>
    <div className="modal-footer justify-content-start">
      <div className="checkbox justify-content-start">
        <input type="checkbox" className="mr-1" id="onlyEvenCheckbox" />
        <label htmlFor="onlyEvenCheckbox">Only even</label>
      </div>
    </div>
  </Modal>
);

export default ContactsModal;
