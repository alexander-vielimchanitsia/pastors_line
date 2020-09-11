import React from 'react';

import Spinner from '../Spinner/Spinner';
import Modal from './Modal';


const ContactDetailsModal = ({ contact }) => {
  const renderContactDetails = React.useMemo(() => {
    if (!contact) {
      return <Spinner/>
    }
    return (
      <>
        <div className="row">
          <div className="col">ID:</div>
          <div className="col">{contact.id}</div>
        </div>
        <div className="row">
          <div className="col">Full name:</div>
          <div className="col">{contact.first_name} {contact.last_name}</div>
        </div>
        <div className="row">
          <div className="col">Email:</div>
          <div className="col">{contact.email}</div>
        </div>
        <div className="row">
          <div className="col">Phone number:</div>
          <div className="col">{contact.phone_number}</div>
        </div>
      </>
    )
  }, [contact]);

  return (
    <Modal title="Contact details" id="ContactDetailsModal" dialogClass="modal-sm modal-dialog-centered">
      <div className="modal-body">
        {renderContactDetails}
      </div>
      <div className="modal-footer">
        <button type="button" className="Modal__Button_close btn btn-secondary m-1" data-dismiss="modal">Close</button>
      </div>
    </Modal>
  )
};

export default ContactDetailsModal;
