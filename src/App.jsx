import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ProtectedRoute } from "./private/PrivateRoutes";
import { Loader } from "./componentsOld/loader/Loader";
import { Soon } from "./componentsOld/global/404/Soon";
import { Toaster } from "react-hot-toast";
import { Home } from "./components/pages/home";
import { InstallFirstFiles } from "./private/InstallFirstFiles";
import Cookies from "js-cookie";
import { LoginPage } from "./components/pages/login";
import { Navbar } from "./components/static/Navbar";
import { useState, useEffect } from "react";
import { CompleteLogin } from "./components/pages/LoginComplete";
import { Title } from "./components/static/Title";
import Settings from "./components/settings/Settings";
import { InstancesPage } from "./components/pages/instances";
import { TimelinePage } from "./components/pages/timeline";
import { CollabPage } from "./components/pages/collabs";

function App() {

  //if (isLoading) return <Loader reason='Espera un momento...' />;
  const userJSON = Cookies.get('user')

  return (

    <Router>
      <Navbar />
      <Title />
      <InstallFirstFiles>
        <Routes>

          <Route
            path="/"
            element={
              <ProtectedRoute isAuthenticated={userJSON}>
                <Home></Home>
              </ProtectedRoute>
            }
          />

          <Route
            path="/timeline"
            element={
              <ProtectedRoute isAuthenticated={userJSON}>
                <TimelinePage></TimelinePage>
              </ProtectedRoute>
            }
          />

          <Route
            path="/colab"
            element={
              <ProtectedRoute isAuthenticated={userJSON}>
                <CollabPage></CollabPage>
              </ProtectedRoute>
            }
          />

          <Route
            path="/settings"
            element={
              <ProtectedRoute isAuthenticated={userJSON}>
                <Settings></Settings>
              </ProtectedRoute>
            }
          />

<Route
            path="/instances"
            element={
              <ProtectedRoute isAuthenticated={userJSON}>
                <InstancesPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="*"
            element={
              <ProtectedRoute isAuthenticated={userJSON}>
                <Soon />
              </ProtectedRoute>
            }
          />

          <Route
            path="/login/complete"
            element={
              <ProtectedRoute isAuthenticated={userJSON}>
                <CompleteLogin />
              </ProtectedRoute>
            }
          />



          <Route path="/login" element={<LoginPage />} />

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
