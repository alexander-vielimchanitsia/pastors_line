import React from 'react';

import AllContactsModal from '../Modal/AllContactsModal';
import USContactsModal from '../Modal/USContactsModal';
import Button from '../Button/Button';
import './Content.sass';


const Content = () => {
  const modalActions = React.useMemo(() => {
    return (
      <div className="d-flex justify-content-end">
        <Button className="Button_all-contacts m-1" data-dismiss="modal" data-toggle="modal" data-target="#allContactsModal">
          All Contacts
        </Button>
        <Button className="Button_us-contacts m-1" data-dismiss="modal" data-toggle="modal" data-target="#usContactsModal">
          US Contacts
        </Button>
        <button type="button" className="Modal__Button_close btn btn-secondary m-1" data-dismiss="modal">Close</button>
      </div>
    );
  }, []);

  return (
    <>
      <div className="Content d-flex align-items-center justify-content-center">
        <Button className="Button_all-contacts m-1" data-toggle="modal" data-target="#allContactsModal">All Contacts</Button>
        <Button className="Button_us-contacts m-1" data-toggle="modal" data-target="#usContactsModal">US Contacts</Button>
      </div>

      <AllContactsModal modalActions={modalActions} />
      <USContactsModal modalActions={modalActions} />
    </>
  );
};

export default Content;
