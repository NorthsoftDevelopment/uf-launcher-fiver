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
import { CompleteLogin } from "./components/login/Complete";
import { Instance2 } from "./components/Launcher/Instances/Extra/Instance2";
import { Instance4 } from "./components/Launcher/Instances/Extra/Instance4";
import { LoaderCreator } from "./components/Creator/Loader";
import { Layout } from "./components/Creator/Layout/Layout";
import { HomeCreator } from "./components/Creator/Home/Home";

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

          <Route path="/creator" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <HomeCreator />
          </ProtectedRoute>} />

          <Route path="/launch/vanilla" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
           <LaunchVanilla />
          </ProtectedRoute>} /> 

          <Route path="/launch/forge" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
           <LaunchForge />
          </ProtectedRoute>} /> 

          <Route path="/launch/1" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
           <LaunchFakeland />
          </ProtectedRoute>} /> 

          <Route path="/launch/2" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
           <Instance2 />
          </ProtectedRoute>} /> 

          <Route path="/launch/3" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
           <GamershipInstanceNetworkBeta />
          </ProtectedRoute>} /> 

        <Route path="/launch/4" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
           <Instance4 />
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
