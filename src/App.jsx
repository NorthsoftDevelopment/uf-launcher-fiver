import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./componentsOld/home/home";
import { ProtectedRoute } from "./private/PrivateRoutes";
import { Loader } from "./componentsOld/loader/Loader";
import { Soon } from "./componentsOld/global/404/Soon";
import { Toaster } from "react-hot-toast";
import { Home } from "./components/pages/home";

function App() {

  //if (isLoading) return <Loader reason='Espera un momento...' />;

  return (
    <Router>

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
      <Toaster
        position="bottom-right"
        containerClassName="notification"
        containerStyle={{}}
        toastOptions={{
          style: {
            padding: "12px",
            color: "white",
            background: "black",
            paddingRight: "150px",
            borderRadius: 0,
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
