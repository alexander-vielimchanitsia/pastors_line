import React from 'react';
import { connect } from 'react-redux';

import { US_COUNTRY_ID } from '../../constants';
import { fetchContacts } from '../../actions/contactAction';
import ContactsModal from './ContactsModal';


const USContactsModal = ({ modalActions, fetchContacts, contacts }) => {

  React.useEffect(() => {
    fetchContacts(US_COUNTRY_ID);
  }, [fetchContacts]);

  return (
    <ContactsModal title="US contacts" id="usContactsModal" contacts={contacts} modalActions={modalActions}/>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

export default connect(
  mapStateToProps,
  { fetchContacts },
)(USContactsModal);
