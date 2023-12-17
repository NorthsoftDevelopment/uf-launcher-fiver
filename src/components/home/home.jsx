import "./home.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Cookies from "js-cookie";
import { Loader } from "../loader/Loader";
import { Card } from "../Cards/Card/Card";
import { ConnectMinecraft } from "../../private/ConnectMinecraft";
import { Separate, SeparateShort } from "../ExtraComponents/Separate/Separate";
import { CardBig } from "../ExtraComponents/global/CardBig";
import { CardLarge } from "../ExtraComponents/global/CardLarge";
import { useEffect, useState } from "react";
import { InfoCard } from "../Cards/Card/InfoCard";
import { RecentPlay } from "../global/Cards/RecentPlay";
import { Skeleton } from "../loader/Skeleton";
import toast from "react-hot-toast";
import useDownloadLauncher from "../../hooks/useDownloadLauncher";

export const HomePage = () => {
  useEffect(() => {}, []);

  //Auth AND INSTANCES STATE, imports and loader
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <Skeleton />;

  //Actualizacion del email del usuario
  if (isAuthenticated) {
    const email = [user.email];
    Cookies.set("email", email, { expires: 365, sameSite: "strict" });
    console.log("email actualizado");
  } else {
    Cookies.set("email", null, { expires: 365, sameSite: "strict" });
    console.log("no estas loegado");
  }

  const handleButtonClick = () => {
    // Configura el contenido de la notificación
    const notificationContent = (
      <div>
        <h3 className="title-notification">Menu de Instalaciones</h3>

        <h4>Descargando Fakeland</h4>
        <p>Progreso de descarga: 10%</p>
      </div>
    );

    // Llama a react-hot-toast con la notificación
    toast(notificationContent, {
      duration: 40000000, // Duración en milisegundos (opcional)
    });
  };

  return (
    <ConnectMinecraft>
      <div className="page">
        <div>
          <div className="zone-full">
            <img
              className="background-all-home"
              src="https://free4kwallpapers.com/uploads/originals/2016/11/29/edge-of-earth-from-space-4k-wallpaper.jpg"
            />
            <div className="zone-1">
              <div className="sub-zone1">
                <h3 className="title-general-bold">ULTIMAS INSTANCIAS</h3>
                <swiper-container
                  centeredSlides="true"
                  speed="500"
                  loop="true"
                  autoplay="true"
                  slides-per-view="3"
                  space-between="5"
                  width="1540"
                  autoplay-delay="5000"
                >
                  <swiper-slide>
                    <CardBig
                      img="https://cdn.discordapp.com/attachments/1075189121783443588/1136772108769312839/image.png"
                      title="Gamership Network"
                      desc="1.20 Vanilla | Conoce a tus creadores de contenido favoritos y participa en sus torneos dentro de Gamership Network"
                      id="oEFiPXiavEfQlfHQ0mgC"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <CardBig
                      img="https://www.dropbox.com/scl/fi/qc7fyk8cj6x4pmhf897bt/notice-home-slider1.png?rlkey=rau5ktexs3y5m1wca7enhmn4n&dl=1"
                      title="Fakeland"
                      desc="1.18.2 Forge | Participa en el nuevo servidor de creadores de contenido de Gamership"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <CardBig
                      img="https://cdn.discordapp.com/attachments/1075189121783443588/1166925811929059349/image.png?ex=6567f2d9&is=65557dd9&hm=64439ecf7a98d7d57ad9cf374dbae2a1555a463deeda9c38fc55be4cdfbe4fa0&"
                      title="Minecraft Vanilla"
                      desc="Cerrado por ahora."
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <CardBig
                      img="https://cdn.discordapp.com/attachments/1075189121783443588/1166925811929059349/image.png?ex=6567f2d9&is=65557dd9&hm=64439ecf7a98d7d57ad9cf374dbae2a1555a463deeda9c38fc55be4cdfbe4fa0&"
                      title="AMinecraft Vanilla"
                      desc="Cerrado por ahora."
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <CardBig
                      img="https://cdn.discordapp.com/attachments/1075189121783443588/1166925811929059349/image.png?ex=6567f2d9&is=65557dd9&hm=64439ecf7a98d7d57ad9cf374dbae2a1555a463deeda9c38fc55be4cdfbe4fa0&"
                      title="AMinecraft Vanilla"
                      desc="Cerrado por ahora."
                    />
                  </swiper-slide>
                </swiper-container>

                <SeparateShort />
                <h3 className="title-general-bold">ULTIMAS NOVEDADES</h3>
                <div className="cards-big">
                  <CardLarge
                    img="https://www.dropbox.com/scl/fi/fqzt1axo7tcgujbon3myi/notice-slide4.png?rlkey=pubah96fkyczhgxoq4cev2ar3&dl=1"
                    title="Nuevo Menu 2.0"
                    autor="Inhonia Studios"
                    desc="Presentamos el Home 2.0 para diciembre del Inhonia Launcher"
                  />
                  <CardLarge
                    img="https://cdn.discordapp.com/attachments/1075189121783443588/1166925811929059349/image.png?ex=6567f2d9&is=65557dd9&hm=64439ecf7a98d7d57ad9cf374dbae2a1555a463deeda9c38fc55be4cdfbe4fa0&"
                    autor="Team Eladina"
                    title="Lalalandia Servidor"
                    desc="Todo listo para la nueva temporada de diamante en el servidor de Lalandia"
                  />
                </div>
              </div>

              <div className="sub-zone2">
                <h3 className="title-general">Lanza Rapido</h3>
                <div className="cards">
                  <RecentPlay />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConnectMinecraft>
  );
};
