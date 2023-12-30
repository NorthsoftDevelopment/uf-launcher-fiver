import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

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

  return (
    <div className="welcome scroll">
      <div className="bg-img">
        <img src={background} alt="" />
      </div>
      <div className="instances-container">
        {instances.map((instance, index) => (
            <div key={index} className="instance-item">
              <h3>{instance.title}</h3>
              <p>{instance.desc}</p>
              <img src={instance.img}></img>
              <div className="instance-play">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                <p>Jugar</p>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};
