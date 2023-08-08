import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { HomePage } from './components/home/home'
import { Navbar } from "./components/static/navbar/Navbar";
import { Login } from "./components/login/Login";
import { ProtectedRoute } from "./private/PrivateRoutes";
import { Profile } from "./components/Profile/Profile";
import { LauncherDesigned } from "./components/Launcher/Designed/LauncherDesigned";
import { LaunchVanilla } from "./components/Launcher/Instances/Vanilla/LaunchVanilla";
import { LaunchForge } from "./components/Launcher/Instances/Forge/LaunchForge";
import { LaunchFakeland } from "./components/Launcher/Instances/Extra/Fakeland";

function App() {


  const user = null

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <ProtectedRoute user={user}>
            <HomePage />
          </ProtectedRoute>} />

        <Route path="/profile" element={
          <ProtectedRoute user={user}>
            <Profile />
          </ProtectedRoute>} />

          <Route path="/launch/vanilla" element={
          <ProtectedRoute user={user}>
           <LaunchVanilla />
          </ProtectedRoute>} /> 

          <Route path="/launch/forge" element={
          <ProtectedRoute user={user}>
           <LaunchForge />
          </ProtectedRoute>} /> 

          <Route path="/launch/extra1" element={
          <ProtectedRoute user={user}>
           <LaunchFakeland />
          </ProtectedRoute>} /> 

          

        <Route path="/login" element={<Login user={user} />} />
        
      </Routes>
    </Router>
  )
}

export default App
