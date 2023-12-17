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
import { register } from "swiper/element/bundle";
import { Following } from "../global/Friends/Following";
import { RpcState } from "../../hooks/Electron/RpcState";

register();


export const HomePage = () => {
  useEffect(() => {

    RpcState('Explorando el menu principal')

  }, []);

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
    toast.success(notificationContent, {
      duration: 40000000, // Duración en milisegundos (opcional)
    });
  };

  return (
    <ConnectMinecraft>
      <div className="page">





     <div className="content-height">

          <h3 className="title-general-bold">NOSOTROS RECOMENDAMOS</h3>
          <swiper-container
            centeredSlides="true"
            speed="500"
            loop="true"
            autoplay="true"
            slides-per-view="3"
            space-between="5"
            autoplay-delay="5000"

          >
            <swiper-slide >
              <CardBig
                img="https://cdn.discordapp.com/attachments/1075189121783443588/1136772108769312839/image.png"
                title="Gamership Network"
                desc="1.20 Vanilla | Conoce a tus creadores de contenido favoritos y participa en sus torneos dentro de Gamership Network"
                id="oEFiPXiavEfQlfHQ0mgC"
                buttonName='Jugar'
                icon='https://th.bing.com/th/id/OIP.LCbdnJVNxdPMiwni1muecgHaHa?w=181&h=181&c=7&r=0&o=5&pid=1.7'
              />
            </swiper-slide>
            <swiper-slide>
              <CardBig
                img="https://www.dropbox.com/scl/fi/qc7fyk8cj6x4pmhf897bt/notice-home-slider1.png?rlkey=rau5ktexs3y5m1wca7enhmn4n&dl=1"
                title="Fakeland"
                desc="1.18.2 Forge | Participa en el nuevo servidor de creadores de contenido de Gamership"
                buttonName='Ver'
                icon='https://lh3.googleusercontent.com/a/ACg8ocJgBE-JaOPnkzHgy247fqwQ7PKVZlZdNNSdkcrQOY5rnwk=s96-c'
              />
            </swiper-slide>
            <swiper-slide>
              <CardBig
                img="https://cdn.discordapp.com/attachments/1075189121783443588/1166925811929059349/image.png?ex=6567f2d9&is=65557dd9&hm=64439ecf7a98d7d57ad9cf374dbae2a1555a463deeda9c38fc55be4cdfbe4fa0&"
                title="Minecraft Vanilla"
                desc="Cerrado por ahora."
                buttonName='Ver'
                icon='https://lh3.googleusercontent.com/a/ACg8ocJgBE-JaOPnkzHgy247fqwQ7PKVZlZdNNSdkcrQOY5rnwk=s96-c'
              />
            </swiper-slide>
            <swiper-slide>
              <CardBig
                img="https://cdn.discordapp.com/attachments/1075189121783443588/1166925811929059349/image.png?ex=6567f2d9&is=65557dd9&hm=64439ecf7a98d7d57ad9cf374dbae2a1555a463deeda9c38fc55be4cdfbe4fa0&"
                title="AMinecraft Vanilla"
                desc="Cerrado por ahora."
                buttonName='Jugar'
                icon='https://lh3.googleusercontent.com/a/ACg8ocKo2wqkJeP3PNWj_IDF74DhouG6SmFPbdX1FLFljaJeLfw=s96-c'
              />
            </swiper-slide>
            <swiper-slide>
              <CardBig
                img="https://cdn.discordapp.com/attachments/1075189121783443588/1166925811929059349/image.png?ex=6567f2d9&is=65557dd9&hm=64439ecf7a98d7d57ad9cf374dbae2a1555a463deeda9c38fc55be4cdfbe4fa0&"
                title="AMinecraft Vanilla"
                desc="Cerrado por ahora."
                buttonName='Ver'
                icon='https://lh3.googleusercontent.com/a/ACg8ocKOrNqDUXCDFAjoleTgYQEcpoXImk5KSGOa95fuZzfSLHk=s96-c'
              />
            </swiper-slide>
          </swiper-container>



          <SeparateShort />
          <div className="home-flex">

            <div className="news-div">
              <h3 className="title-general-bold">ACTUALIZACIONES RECIENTES</h3>
              <div className="cards-50">
                <CardLarge
                  img='https://www.dropbox.com/scl/fi/fqzt1axo7tcgujbon3myi/notice-slide4.png?rlkey=pubah96fkyczhgxoq4cev2ar3&dl=1'
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
                <CardLarge
                  img="https://www.dropbox.com/scl/fi/fqzt1axo7tcgujbon3myi/notice-slide4.png?rlkey=pubah96fkyczhgxoq4cev2ar3&dl=1"
                  title="Nuevo Menu 2.0"
                  autor="Inhonia Studios"
                  desc="Presentamos el Home 2.0 para diciembre del Inhonia Launcher"
                />
                <CardLarge
                  img="https://www.dropbox.com/scl/fi/fqzt1axo7tcgujbon3myi/notice-slide4.png?rlkey=pubah96fkyczhgxoq4cev2ar3&dl=1"
                  title="Nuevo Menu 2.0"
                  autor="Inhonia Studios"
                  desc="Presentamos el Home 2.0 para diciembre del Inhonia Launcher"
                />
                <CardLarge
                  img="https://www.dropbox.com/scl/fi/fqzt1axo7tcgujbon3myi/notice-slide4.png?rlkey=pubah96fkyczhgxoq4cev2ar3&dl=1"
                  title="Nuevo Menu 2.0"
                  autor="Inhonia Studios"
                  desc="Presentamos el Home 2.0 para diciembre del Inhonia Launcher"
                />
              </div>
            </div>
            <div className="friends-div-home">
              <h3 className="title-general-bold">FRIENDS</h3>
              <div className="friends-div-home-text">
                <Following />
              </div>
            </div>
          </div>
        </div>

      </div>
    </ConnectMinecraft>
  );
};
