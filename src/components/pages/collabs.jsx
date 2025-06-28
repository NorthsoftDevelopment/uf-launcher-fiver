import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export const CollabPage = () => {
  useEffect(() => {
  }, []);

  const background = Cookies.get("background");

  return (
    <div className="welcome scroll content">
      <div className="container-idk">



        <div className="bg-img">
          <img src={background} alt="" />
        </div>

<img className="mid-screen-img" src='https://cdn.discordapp.com/attachments/1384427550171988061/1387894542409138196/ACTORES_DE_VOZ.png?ex=68605284&is=685f0104&hm=5369220076391160e597ee6a3f7303fadb39584a84062325232be920870cd671&'></img>
        <div className="instances-container">
          
        </div>

      </div>
    </div>
  );
};
