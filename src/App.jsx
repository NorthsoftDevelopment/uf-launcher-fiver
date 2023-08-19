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
import { Loader } from "./components/loader/Loader";
import { GamershipInstanceNetworkBeta } from "./components/Launcher/Instances/Extra/Gamership/GamershipInstance";
import { ConnectMinecraft } from "./private/ConnectMinecraft";
import { Footer } from "./components/static/Footer/footer";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <Loader />

  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <HomePage />
          </ProtectedRoute>} />

        <Route path="/profile" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Profile />
          </ProtectedRoute>} />

          <Route path="/launch/vanilla" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
           <LaunchVanilla />
          </ProtectedRoute>} /> 

          <Route path="/launch/forge" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
           <LaunchForge />
          </ProtectedRoute>} /> 

          <Route path="/launch/extra1" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
           <LaunchFakeland />
          </ProtectedRoute>} /> 

          <Route path="/launch/gamership/net" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
           <GamershipInstanceNetworkBeta />
          </ProtectedRoute>} /> 


        <Route path="/login" element={<Login />} />
        
      </Routes>
      
    </Router>
  )
}

export default App
