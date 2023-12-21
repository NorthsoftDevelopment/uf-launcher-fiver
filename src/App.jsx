import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ProtectedRoute } from "./private/PrivateRoutes";
import { Loader } from "./componentsOld/loader/Loader";
import { Soon } from "./componentsOld/global/404/Soon";
import { Toaster } from "react-hot-toast";
import { Home } from "./components/pages/home";
import { InstallFirstFiles } from "./private/InstallFirstFiles";

function App() {

  //if (isLoading) return <Loader reason='Espera un momento...' />;

  return (

    <Router>
      <InstallFirstFiles>
        <Routes>

          <Route
            path="/"
            element={
              <ProtectedRoute isAuthenticated={'nothing'}>
                <Home></Home>
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Soon />} />

        </Routes>
      </InstallFirstFiles>
      <Toaster
        position="top-right"
        containerClassName="notification"
        containerStyle={{}}
        toastOptions={{
          style: {
            padding: "12px",
            color: "white",
            background: "#252525",
            borderRadius: "20px",
            justifyItems: "left",
            justifyContent: "left",
            textAlign: "left",
            alignItems: "left",
            alignContent: "left",
          },
        }}
      />
    </Router>

  );
}

export default App;
