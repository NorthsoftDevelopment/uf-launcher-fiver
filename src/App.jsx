import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { HomePage } from './components/home/home'
import { Navbar } from "./components/static/navbar/Navbar";
import { Login } from "./components/login/Login";
import { Profile } from "./components/login/Profile";
import { LoginComplete } from "./components/login/Complete";
import { ProtectedRoute } from "./private/PrivateRoutes";

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

        <Route path="/login" element={<Login user={user} />} />
        
      </Routes>
    </Router>
  )
}

export default App
