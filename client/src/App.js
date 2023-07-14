// Package Imports
import { Routes, Route } from 'react-router-dom';

// -Components-

// Handles showing navbar
import NavbarHandler from './components/NavbarHandler/navbarHandler';
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import Rating from "./components/Rating/rating";

function App() {
  return (
    <>
      <NavbarHandler>
        <Navbar />
      </NavbarHandler>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/rating" element={<Rating />}/>

        {/* Not Found Route */}
        <Route path="*" element={<NotFound />}/>

      </Routes>
    </>
  );
}

const NotFound = ({ children }) => {
  return (
    <div>Not Found</div>
  );
};

export default App;
