import React from 'react';
import { connect } from 'react-redux';

import { fetchContacts } from '../../actions/contactAction';
import ContactsModal from './ContactsModal';


const AllContactsModal = ({ modalActions, fetchContacts, contacts, ...restProps }) => {

  React.useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <ContactsModal title="All contacts" id="allContactsModal" contacts={contacts}
                   modalActions={modalActions} {...restProps}/>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

export default connect(
  mapStateToProps,
  { fetchContacts },
)(AllContactsModal);
