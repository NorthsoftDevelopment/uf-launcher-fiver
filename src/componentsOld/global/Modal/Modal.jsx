import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Modal.css';
import { LoaderMin } from '../../loader/Loader';
import { instancesGet } from '../../../hooks/Users/InstancesUser';
import { UserAddInstannce } from '../../../hooks/Users/InstanceAdd';

const Modal = ({ isOpen, onClose, content, document }) => {
  const [contentInfo, setContentInfo] = useState({});
  const [contentData, setContentData] = useState({});
  const [instances, setInstances] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const openModal = async () => {

    try {
      const api = 'https://inhonia-launcher-api.vercel.app/instance/data';
      const data = {
        location: isOpen
      };
      const response = await axios.post(api, data);
      const instance = response.data;
      setContentInfo(instance.datos);
      setContentData(instance.launch)
      setIsLoading(false)
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    if (isOpen) {
      const GetuserInstances = async () => {
        try {
          const instances = await instancesGet();
          setInstances(instances)
          openModal()
        } catch (error) {
          console.error("Error al obtener datos:", error);
        }
      };
      GetuserInstances();
    } else {
      setContentInfo({});
      setContentData({});
      setInstances([]);
    }
  }, [isOpen, document]);

  const handleClose = (e) => {
    if (e.target.classList.contains('modal')) {
      onClose();
      setIsLoading(true)
    }
  };

  const AlreadySave = instances.some(arrayItem => {
    return arrayItem.datos.id === isOpen;
});

const saveInstanceUser = () => {

  UserAddInstannce(isOpen)

}

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} onClick={handleClose}>

      {isLoading ? (
        <div className='modal-content'>
          <div className='modal-content-loading'>
            <LoaderMin reason='Recuperando Informacion' />
          </div>
        </div>
      ) : (
        <div className="modal-content">
          <div className='modal-info'>
            <img src={contentInfo.img} className='modal-info-img'></img>
            <div className='modal-info-text'>
              <h2>{contentInfo.title}</h2>
              <p className='autor-modal'>{contentInfo.autor}</p>
              <h3>Descripcion de la instancia:</h3>
              <p className='modal-info-text-desc'>{contentInfo.desc}</p>
              <h3>Datos de la instancia:</h3>
              <div className='modal-info-text-datos'>
                <p>Version actual: {contentData.versionInstance}</p>
                <p>Version de Minecraft: {contentData.version.number}</p>
                <p>Tipo de instancia: {contentData.type}</p>
                <p>Recursos recomendados: {contentData.memory.min} de RAM</p>
              </div>
              <div className='model-info-bottom'>
              {AlreadySave ? (
                <button>GUARDADO</button>
            ) : (
              <button onClick={saveInstanceUser}>GUARDAR</button>
            )}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
