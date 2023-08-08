import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { HomePage } from './components/home/home'
import { Navbar } from "./components/static/navbar/Navbar";
import { Login } from "./components/login/Login";
import { ProtectedRoute } from "./private/PrivateRoutes";
import { Profile } from "./components/Profile/Profile";
import { LaunchVanilla } from "./components/Launcher/Instances/Vanilla/LaunchVanilla";
import { LaunchForge } from "./components/Launcher/Instances/Forge/LaunchForge";
import { LaunchFakeland } from "./components/Launcher/Instances/Extra/Fakeland";
import { useAuth0 } from "@auth0/auth0-react";
import Cookies from "js-cookie";

function App() {

  const username = null

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <ProtectedRoute user={username}>
            <HomePage />
          </ProtectedRoute>} />

        <Route path="/profile" element={
          <ProtectedRoute user={username}>
            <Profile />
          </ProtectedRoute>} />

          <Route path="/launch/vanilla" element={
          <ProtectedRoute user={username}>
           <LaunchVanilla />
          </ProtectedRoute>} /> 

          <Route path="/launch/forge" element={
          <ProtectedRoute user={username}>
           <LaunchForge />
          </ProtectedRoute>} /> 

          <Route path="/launch/extra1" element={
          <ProtectedRoute user={username}>
           <LaunchFakeland />
          </ProtectedRoute>} /> 

          

        <Route path="/login" element={<Login user={username} />} />
        
      </Routes>
    </Router>
  )
}

export default App
