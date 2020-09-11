import React from 'react';

import Button from '../Button/Button';
import './Content.sass';


const Content = () => (
  <div className="Content d-flex align-items-center justify-content-center">
    <Button className="m-1">All Contacts</Button>
    <Button className="m-1">US Contacts</Button>
  </div>
);

export default Content;
