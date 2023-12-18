import { useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleOverflow = () => {
      document.documentElement.style.overflow = isOpen ? 'hidden' : 'auto';
    };

    handleOverflow(); // Llama a la función cuando el componente se monta

    // Limpia el efecto al desmontar el componente
    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
   <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close">&times;</span>
        <p>Contenido del modal</p>
      </div>
    </div>
  );
};

export default Modal;