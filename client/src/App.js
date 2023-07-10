// Package Imports
import { Routes, Route } from 'react-router-dom';

// Components
import Home from "./components/Home/home";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import Rating from "./components/Rating/rating";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />}/>
      <Route path="/rating" element={<Rating />}/>
    </Routes>
  );
}



export default App;
