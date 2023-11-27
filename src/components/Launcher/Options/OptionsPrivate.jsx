import { Tooltip } from "../../ExtraComponents/Tooltips/Tooltip";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { reloadScreen } from "../../ExtraComponents/ReloadScreen";
import "./options.css";
import "../../Launcher/Designed/config.css";
import axios from "axios";
import Swal from "sweetalert2";


export const OptionsClient = ({ admin}) => {

  const email = Cookies.get("email");

  useEffect(() => {

    document.body.classList.add('no-scroll');

  }, []);


  





return (
  <div className="private-launch" id="admin">
    <div className="content-private-config">
      <div>
      <h2>Opciones de Cliente</h2>
      <div className="line"></div>
      </div>
      
      </div>
     
  </div>
);
};


