import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export const TimelinePage = () => {
  useEffect(() => {
  }, []);

  const background = Cookies.get("background");

  return (
    <div className="welcome scroll content">
      <div className="container-idk">



        <div className="bg-img">
          <img src={background} alt="" />
        </div>

<img className="mid-screen-img" src='https://cdn.discordapp.com/attachments/1384427550171988061/1388358556574547978/timeline.png?ex=6860b12a&is=685f5faa&hm=bdf9a277f354f38f11a5bacb5a7465e46d43696b8e8caf8b0a9939d401b48d78&'></img>
        <div className="instances-container">
          
        </div>

      </div>
    </div>
  );
};
