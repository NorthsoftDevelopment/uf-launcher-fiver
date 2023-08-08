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
        src="https://newsonline.com.ar/wp-content/uploads/2022/12/lionel-messi-copa-del-mundo.png"
        alt=""
      />
      <div className="left-side">
        <button
          className="button-general-log"
          onClick={() => loginWithRedirect()}
        >
          logeate
        </button>
        <button
          className="button-general-log"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      </div>
    </div>
  );
};
