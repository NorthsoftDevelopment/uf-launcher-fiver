import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export const InstancesPage = () => {
  const [instances, setInstances] = useState([]);
  useEffect(() => {
    takeInstances();
  }, []);

  const background = Cookies.get("background");

  const takeInstances = async () => {
    try {
      const api = "https://uf-launcher-api-fiver.vercel.app/instances";

      const profileJSON = Cookies.get("user");
      const profile = JSON.parse(profileJSON);

      const data = {
        id: profile.id,
      };

      const response = await axios.post(api, data);
      const instances = response.data;
      setInstances(instances.instances);
      console.log(instances);

      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const seleccionar = (id) => {
    console.log(id)
    Cookies.set('instance', id, { expires: 365, sameSite: 'strict' });

    // Llama a react-hot-toast con la notificación
    toast.success('Instancia Seleccionada', {
      duration: 4000, // Duración en milisegundos (opcional)
    });
  }

  

  return (
    <div className="welcome scroll content">
      <div className="container-idk">



        <div className="bg-img">
          <img src={background} alt="" />
        </div>


        <div className="instances-container">
          {instances.map((instance, index) => (
            <div key={index} className="instance-item">
              <h3>{instance.title}</h3>
              <p>{instance.desc}</p>
              <button onClick={() => seleccionar(instance.id)}>Seleccionar</button>
              <img src={instance.img}></img>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
