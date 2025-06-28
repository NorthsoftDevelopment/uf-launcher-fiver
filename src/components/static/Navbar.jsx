import React from "react";
import { Link } from "react-router-dom";
import { Logout } from "../../hooks/Auth/Logout";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Tooltip } from "react-tooltip";

export const Navbar = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userJSON = Cookies.get("user");
    if (userJSON) {
      const userProfile = JSON.parse(userJSON);
      console.log("testt", userProfile);
      setUser(userProfile);
    }
  }, []);

  function changeLocation(e) {
    document.querySelector(".navbar-item[active='1']").setAttribute("active","0")
     e.currentTarget.attributes[1].value = 1  
  }

  useEffect(() => {
    async function ChangeLoad() {
      const path = window.location.pathname

      if (path === "/"){
        document.querySelector("a[href='/'] .navbar-item").setAttribute("active","1")
      }else if(path === "/instances"){
        document.querySelector("a[href='/instances'] .navbar-item").setAttribute("active","1")
      }else if (path == "/settings") {
        document.querySelector("a[href='/settings'] .navbar-item").setAttribute("active","1")
      }
      
    }
    ChangeLoad();
  }, []);

  function action(btn) {
    const { ipcRenderer } = require("electron");
    var attr = btn.currentTarget.attributes.op.value;
    attr == "min"
      ? ipcRenderer.send("window_minimize")
      : attr == "max"
      ? ipcRenderer.send("window_maximize")
      : attr == "close"
      ? ipcRenderer.send("window_close")
      : "";
  }
  return (
    <div className="navbar drag">
      <Tooltip id="1" />
      <div className="navbar-list">
        <img className="logo" src="https://github.com/NorthsoftDevelopment/uf-launcher-fiver/releases/download/launchers/logo.final.kokorito.studios.png"></img>
        <Link to="/">
          <div onClick={changeLocation} className="navbar-item nodrag" active="0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Jugar
          </div>
        </Link>
        <Link to="/instances">
          <div
            onClick={changeLocation}
            className="navbar-item nodrag"
            active="0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
              <path d="M19 17V5a2 2 0 0 0-2-2H4" />
              <path d="M15 8h-5" />
              <path d="M15 12h-5" />
            </svg>
            Instancias
          </div>
        </Link>
        <Link to="/timeline">
          <div onClick={changeLocation} className="navbar-item nodrag" active="0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Eventos
          </div>
        </Link>
        <Link to="/colab">
          <div onClick={changeLocation} className="navbar-item nodrag" active="0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Colaboradores
          </div>
        </Link>
        <Link to="/settings">
          <div
            onClick={changeLocation}
            className="navbar-item nodrag"
            active="0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M20 7h-9" />
              <path d="M14 17H5" />
              <circle cx="17" cy="17" r="3" />
              <circle cx="7" cy="7" r="3" />
            </svg>
            Ajustes
          </div>
        </Link>
      </div>

      <div className="nav-options">
        {user ? (
          <div className="nodrag user">
            <div className="user-info">
              <span
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.name}
              >
                {user.name}
              </span>
              <img
                src={`https://api.mineatar.io/face/${
                  user.id ? user.id : "e59da3ac-76ef-4c66-9d36-54d221baa439"
                }`}
              ></img>
            </div>
            <button data-tooltip-id="my-tooltip"
                data-tooltip-content="Cerrar Sesion" onClick={Logout}>
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" x2="9" y1="12" y2="12" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="nodrag user">
            <div className="user-info">
              <span>Logueate</span>
              <img
                src={`https://api.mineatar.io/face/4e4f1367-fab1-4239-8665-d7f4d8aea219`}
              ></img>
            </div>
          </div>
        )}
        <button
          onClick={(e) => action(e)}
          className="nav-close-app nodrag"
          op="min"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z" />
          </svg>
        </button>
        <button
          onClick={(e) => action(e)}
          className="nav-close-app nodrag"
          op="max"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              stroke="none"
              fill="#999999"
              d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"
            />
          </svg>
        </button>
        <button
          onClick={(e) => action(e)}
          className="nav-close-app nodrag"
          op="close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};
