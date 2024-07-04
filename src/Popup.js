import React from 'react';

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <div
          className="navbar-swal"
          style={{ borderBottom: '1px solid var(--text)', padding: '10px 0' }}
        >
          <h5>EasyConvertKit</h5>
        </div>
        <div className="row p-0 m-0">
          {/* ... The rest of your content goes here ... */}
        </div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
