import './notificacion.css';
import { useEffect, useState } from 'react';

export const Notification = ({ title, descrioption }) => {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {

    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 5500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showNotification]);

  return showNotification ? (
    <div className={`notification ${showNotification ? 'show' : ''}`}>
      <div className='notification-content'>
        <h2>{title}</h2>
        <p>{descrioption}</p>
      </div>
    </div>
  ) : null;
};
