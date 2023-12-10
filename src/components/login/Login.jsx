import { useAuth0 } from "@auth0/auth0-react";
import "../static/css/layout.css";
import './login.css'
import { Loader } from "../loader/Loader";
import Cookies from "js-cookie";

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

          <h1>Bienvenido</h1>
          <div className="cards-login">
            <div>
              <img></img>
              <div>
                <h1></h1>
                <p></p>
              </div>
            </div>
          </div>

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
                onClick={Login}
              >
                Iniciar Sesion
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
