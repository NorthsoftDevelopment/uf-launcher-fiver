import { useAuth0 } from "@auth0/auth0-react";
import "../static/css/layout.css";
import axios from "axios";

export const Login = () => {
  const apiUrl = "http://localhost:3000/test";
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  const data = { test: "test" };

  const fetchDataFromApi = async () => {
    axios
      .put(apiUrl, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="test">
      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
      <button onClick={() => loginWithRedirect()}>logeate</button>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
      <button onClick={fetchDataFromApi}>test</button>
    </div>
  );
};
