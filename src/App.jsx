import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { HomePage } from './components/home/home'
import { Navbar } from "./components/static/navbar/Navbar";
import { Login } from "./components/login/Login";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
