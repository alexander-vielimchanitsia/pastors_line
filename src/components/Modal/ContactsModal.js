import React from 'react';

import Modal from './Modal';


const ContactsModal = ({ modalActions, contacts, ...restProps }) => {

  const [isEvenChecked, setIsEvenChecked] = React.useState(false);

  const renderAllContacts = React.useMemo(() => {
    if (!contacts) {
      return null;
    }
    return contacts.items
      .filter((contact) => {
        return !isEvenChecked || (contact.id & 1) === 0;
      })
      .map((contact) => (
        <tr key={contact.id}>
          <th scope="row">{contact.id}</th>
          <td>{contact.first_name}</td>
          <td>{contact.last_name}</td>
          <td>{contact.country && contact.country.iso}</td>
        </tr>
      ));
  }, [contacts, isEvenChecked]);

  const handleCheckboxChange = React.useCallback((event) => {
    setIsEvenChecked(event.target.checked);
  }, [setIsEvenChecked]);

  return (
    <Modal {...restProps}>
      <div className="modal-body">
        <table className="table table-hover table-sm">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Country</th>
          </tr>
          </thead>
          <tbody>
          {renderAllContacts}
          </tbody>
        </table>
        <hr/>
        {modalActions}
      </div>
      <div className="modal-footer justify-content-start">
        <div className="checkbox justify-content-start">
          <input type="checkbox" className="mr-1" value={isEvenChecked} onChange={handleCheckboxChange}/>
          <label>Only even</label>
        </div>
      </div>
    </Modal>
  );
};

export default ContactsModal;
