import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="checkbox">
          <input type="checkbox" id="onlyEvenCheckbox" />
          <label htmlFor="onlyEvenCheckbox">Only even</label>
        </div>
      </div>
    </footer>
  );
}
