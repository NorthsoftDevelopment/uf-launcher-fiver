import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>Contenido del modal</p>
      </div>
    </div>
  );
};

export default Modal;