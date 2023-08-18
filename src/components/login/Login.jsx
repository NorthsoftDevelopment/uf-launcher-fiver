import { useAuth0 } from "@auth0/auth0-react";
import "../static/css/layout.css";
import { Loader } from "../loader/Loader";
import Cookies from "js-cookie";

export const Login = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  if (isLoading) {
    return <Loader />;
  }

  if (isAuthenticated) {
    const email = JSON.stringify(user.email);

    Cookies.set("email", email, { expires: 365, sameSite: "strict" });
  }

  return (
    <div className="">
      <img
        className="background-all"
        src="https://cdn.discordapp.com/attachments/1075189121783443588/1141878076402315304/background-mrpolar_1.png"
        alt=""
      />
      <div className="left-side">
        <h1>Bienvenido de vuelta!</h1>
        <p>Gracias por ser miembro de la version Beta. Porfavor inicia sesion para continuar</p>

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


          <div>

            <button
              className="button-general-log"
              onClick={() => loginWithRedirect()}
            >
              Iniciar Sesion
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
