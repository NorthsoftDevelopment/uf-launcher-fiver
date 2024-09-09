import React, { useState, useEffect } from "react";
import useDownloadLauncher from "../hooks/useDownloadLauncher";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import "./Private.css";
import Swal from "sweetalert2";

//Component to identify if the user has a good minecraft account

export const InstallFirstFiles = ({ children }) => {
  //take tokenmc from cookies and set loading screen
  const connectMinecraft = Cookies.get("basicInstallationComplete");
  const [isLoading, setIsLoading] = useState(false);
  const [rootUser, setRootUser] = useState();

  // Error control

  const error = {
    continue_folder: {
      msg: "Selecciona una carpeta para continuar la instalación",
    },
    folder_exist: {
      msg: "Error la carpeta seleccionada no existe",
    },
    error_install: {
      msg: "Error al intentar instalar los recursos",
    },
  };

  //When button action login take login and bugs

  const saltarLogin = () => {
    const Skip = {
      data: "null",
    };

    const SkipJSON = JSON.stringify(Skip);

    Cookies.set("tokenMC", SkipJSON, { expires: 30, sameSite: "strict" });

    window.location.href = "/";
  };
  const login = async () => {
    setIsLoading(true);

    Swal.fire({
      text: "Intentando conexion",
      showConfirmButton: false,
      allowOutsideClick: false,
      timerProgressBar: false,
      background: "#141414",
      customClass: {
        container: "title-loader",
        popup: "title-loader",
        header: "title-loader",
        title: "title-loader",
      },
      didOpen: async () => {
        Swal.showLoading();

        try {
          const { Auth, errResponse } = require("msmc");
          const authManager = new Auth("select_account");

          const xboxManager = await authManager.launch("raw");

          try {
            const token = await xboxManager.getMinecraft();

            if (token) {
              console.log("todo bien");
              setIsLoading(false);
              Swal.close();
              //window.location.href = '/'
              const mcprofile = JSON.stringify(token.profile);

              Cookies.set("tokenMC", mcprofile, {
                expires: 30,
                sameSite: "strict",
              });
            } else {
              showError("Ocurrió un error");
            }
          } catch (error) {
            showError("Error al obtener el token de Minecraft", error);
          }
        } catch (error) {
          showError("Error al iniciar la conexión", error);
        }
      },
    });
  };

  function downloadInstance() {
    const { ipcRenderer } = require("electron");
    const { app } = require("electron");
    const fs = require("fs");
    const path = require("path");
    const path_sel = document.querySelector(".input-folder input");

    ipcRenderer.on("createFolderResult", (event, result) => {
      if (result.success) {
        const Skip = {
          data: "null",
        };

        const SkipJSON = JSON.stringify(Skip);

        const folderPath = result.folderPath;

        toast.loading((t) => {
          const DEFAULT_URL =
            "https://assets.northsoft.org/inhonia-launcher/launchers.zip";
          const DEFAULT_PATH = folderPath + "\\launchers.zip";
          const root = folderPath;
          const {
            download,
            progress,
            complete,
            errorZip,
            extract,
            extractcomplete
          } = useDownloadLauncher(DEFAULT_URL, DEFAULT_PATH, root);

          const formattedProgress = progress;

          useEffect(() => {
            download();
          },[extractcomplete])
          
         
          useEffect(() => {

            console.log(DEFAULT_PATH, root)
            console.log(progress, complete);
            if (progress === 100 && complete && extractcomplete) {
              toast.success("Descarga finalizada!", { id: t.id });
              Cookies.set("basicInstallationComplete", true, {
                expires: 365,
                sameSite: "strict",
              });
              Cookies.set("instance", "hypixel", {
                expires: 365,
                sameSite: "strict",
              });
              Cookies.set("root", "C://UFLauncher//instances", {
                expires: 365,
                sameSite: "strict",
              });
              window.location.href = "/";
            }
          }, [extractcomplete]);

          return (
            <div>
              <h4>Instalando Contenido</h4>
              <p>Progreso: {formattedProgress}%</p>
            </div>
          );
        });
      } else {
        toast.error(`Error al crear la carpeta: ${result.message}`);
      }
    });
    ipcRenderer.send("createFolder");
  }

  //In case to errors
  const showError = (message, error) => {
    setIsLoading(false);
    Swal.fire({
      icon: "error",
      title: "Error al intentar conexion",
      background: "#141414",
      customClass: {
        container: "title-loader",
        popup: "title-loader",
        header: "title-loader",
        title: "title-loader",
      },
      text: message,
      footer: error ? error.toString() : "",

      didClose: () => {
        Swal.fire({
          title: "Porfavor visita este sitio y crea un perfil de Minecraft",
          text: "https://www.minecraft.net/en-us/msaprofile/mygames/editprofile",
          background: "#141414",
          customClass: {
            container: "title-loader",
            popup: "title-loader",
            header: "title-loader",
            title: "title-loader",
          },
        });
      },
    });
  };

  function ChangeRoute() {
    const { ipcRenderer } = require("electron");
    ipcRenderer.invoke("window_select_folder").then((e) => {
      setRootUser(e[0]);
      document.querySelector(".input-folder input").value = e[0];
    });
  }

  const handleButtonClick = () => {
    // Configura el contenido de la notificación

    console.log("wpw");

    const notificationContent = (
      <div>
        <h3>Instalando Contenido</h3>
        <p>Progreso: 10%</p>
      </div>
    );

    // Llama a react-hot-toast con la notificación
    toast.loading(notificationContent, {
      duration: 40000000, // Duración en milisegundos (opcional)
    });

    console.log("wpw");
  };

  if (!connectMinecraft) {
    return (
      <div className="displayAdvertence">
        <div className="content-advertence">
          <div className="content-advertence-text">
            <div>
              <h1>INSTALACION DE UF LAUNCHER</h1>
            </div>
            <div>
              <p>
                Hola, Bienvenido a UF Launcher, el launcher oficial de Unity
                Force, antes de continuar necesitamos instalar algunos archivos.
              </p>
              <ul>
                <li>+ La instalacion tiene un peso de 8MB.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="install-section">
          <button onClick={downloadInstance} className="button-general-install">
            Iniciar Instalacion
          </button>
        </div>
      </div>
    );
  } else {
    return <div className="root">{children}</div>;
  }
};
