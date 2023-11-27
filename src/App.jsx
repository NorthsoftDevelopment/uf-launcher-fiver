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
import { Library } from "./components/Library/Library";
import { Soon } from "./components/global/404/Soon";
import { Search } from "./components/Search/Search";
import { SkeletoMitad, Skeleton } from "./components/loader/Skeleton";
import { Toaster } from "react-hot-toast";


function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <Skeleton />

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <HomePage />
          </ProtectedRoute>} />

        <Route path="/search" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Search />
          </ProtectedRoute>} />

        <Route path="/profile" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Profile />
          </ProtectedRoute>} />

        <Route path="/library" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Library />
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

        <Route
          path="*"
          element={<Soon />}
        />

      </Routes>
      <Toaster position="bottom-right" containerClassName="notification" containerStyle={{
      }}
      
      toastOptions={{
        style: {
          padding: '12px',
          color: 'white',
          background: 'black',
          paddingRight: '150px',
          borderRadius: 0,
          justifyItems: 'left',
          justifyContent: 'left',
          textAlign: 'left',
          alignItems: 'left',
          alignContent: 'left',
        },

      }} />
    </Router>
  )
}

export default App
