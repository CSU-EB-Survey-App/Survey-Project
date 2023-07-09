// Package Imports
import { Routes, Route } from 'react-router-dom';

// Components
import Home from "./components/Home/home";
import Login from "./components/Login/login";
import Register from "./components/Register/register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}



export default App;
