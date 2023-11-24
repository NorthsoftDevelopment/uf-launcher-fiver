import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { HomePage } from './components/home/home'
import { Navbar } from "./components/static/navbar/Navbar";
import { Login } from "./components/login/Login";
import { ProtectedRoute } from "./private/PrivateRoutes";
import { Profile } from "./components/Profile/Profile";
import { LaunchVanilla } from "./components/Launcher/Instances/Vanilla/LaunchVanilla";
import { LaunchForge } from "./components/Launcher/Instances/Forge/LaunchForge";

import { useAuth0 } from "@auth0/auth0-react";
import { Loader } from "./components/loader/Loader";

import { Footer } from "./components/static/Footer/footer";
import { CompleteLogin } from "./components/login/Complete";

import { ConfigCreatorInstance } from "./components/Creator/Config/Config";
import { LauncherDesigned } from "./components/Launcher/Designed/LauncherDesigned";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <Loader reason='Recuperando perfil'/>

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

          <Route path="/instance/:id" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <LauncherDesigned />
          </ProtectedRoute>} />

          <Route path="/creator/instances" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ConfigCreatorInstance />
          </ProtectedRoute>} />

          <Route path="/launch/vanilla" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
           <LaunchVanilla />
          </ProtectedRoute>} /> 

          <Route path="/launch/forge" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
           <LaunchForge />
          </ProtectedRoute>} /> 

         

          

        <Route path="/login" element={<Login />} />

        <Route path="/auth/complete" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
           <CompleteLogin />
          </ProtectedRoute>} /> 
        
      </Routes>
      
    </Router>
  )
}

export default App
