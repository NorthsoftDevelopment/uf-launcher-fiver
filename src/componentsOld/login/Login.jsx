import { useAuth0 } from "@auth0/auth0-react";
import "../static/css/layout.css";
import './login.css'
import { Loader } from "../loader/Loader";
import Cookies from "js-cookie";
import { Separate, SeparateShort } from "../ExtraComponents/Separate/Separate";

export const Login = () => {

  //Auht imports and loader
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  if (isLoading) {
    return <Loader reason='Recuperando perfil' />;
  }

  //Email add to cookie
  if (isAuthenticated) {
    const email = JSON.stringify(user.email);

    Cookies.set("email", email, { expires: 365, sameSite: "strict" });
  }


  //Login button
  const Login = () => {

    try {

      loginWithRedirect()

    } catch (error) {

    }
  }

  return (
    <div className="">
      <img
        className="background-all"
        src="https://th.bing.com/th/id/R.31e874f69613d104ea7bc249cb51be32?rik=yQ%2f4G8AwkWwhQQ&pid=ImgRaw&r=0"
        alt=""
      />
      <div className="left-side">
        <div className="content-login">

          <h1 className="title-general-bold-big">BETA</h1>
          <div className="cards-login">
            <div>
              <img></img>
              <div>
                <h3 className="title-general">El mundo en tus manos</h3>
                <p>Explora, diseña y construye un mundo inmenso de variaciones de Minecraft Java.</p>
              </div>
            </div>
            <div>
              <img></img>
              <div>
                <h3 className="title-general">Tus historias favoritas</h3>
                <p>Encuentra cientos de instancias divertidas de tus mundos favoritos y juegalas a la manera que quieras.</p>
              </div>
            </div>
            <div>
              <img></img>
              <div>
                <h3 className="title-general">Multi Launcher</h3>
                <p>Juega tus instancias favoritas de la manera que quieras, con Inhonia Launcher, Minecraft Launcher o hasta Sk Launcher</p>
              </div>
            </div>
            <div>
              <img></img>
              <div>
                <h3 className="title-general">Comparte con tus amigos</h3>
                <p>El jugar minecraft Modded con tus amigos nunca habia sido tan facil. Usa Inhonia Launcher para compartir tu instancia de mods con otros</p>
              </div>
            </div>

          </div>
          <Separate />

          <div className="center-login">
          
            <img src="https://cdn.discordapp.com/attachments/910002249651077150/1183267669366026442/inhonia-icon.png?ex=6587b6e4&is=657541e4&hm=ac15bae4af0c3e8fce0b055c33cd0bce8c45cc5c0fc5f16bddf0572b4e815800&"></img>

          </div>

          <Separate />

          {isAuthenticated ? (
            <button
              className="button-general-log"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          ) : (


            <div className="bottom-login">

              <button
                className="button-general-log"
                onClick={Login}
              >
                INICIAR SESION
              </button>
            </div>
          )}

        </div>

       <div className="copyright">
        <h1>© 2023 Inhonia </h1>
       </div>

      </div>
    </div>
  );
};
