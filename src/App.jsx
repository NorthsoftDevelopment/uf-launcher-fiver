import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { HomePage } from './components/home/home'
import { Navbar } from "./components/static/navbar/Navbar";
import { Login } from "./components/login/Login";
import { ProtectedRoute } from "./private/PrivateRoutes";
import { Profile } from "./components/Profile/Profile";
import { LaunchVanilla } from "./components/Launcher/Instances/Vanilla/LaunchVanilla";

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

          <Route path="/test" element={
          <ProtectedRoute user={user}>
           <LaunchVanilla />
          </ProtectedRoute>} /> 

          

        <Route path="/login" element={<Login user={user} />} />
        
      </Routes>
    </Router>
  )
}

export default App
