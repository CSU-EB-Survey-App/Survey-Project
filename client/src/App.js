// Package Imports
import React, { useState } from "react";
import { Routes, Route, Router } from "react-router-dom";

// -Components-

// Protect HOC for authentication
import PrivateRoutes from "./components/PrivateRoutes/privateRoutes";
// Handles showing navbar
import NavbarHandler from "./components/NavbarHandler/navbarHandler";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Login from "./components/Login/login";
import Register from "./components/Home/register";
import Rating from "./components/Rating/rating";
import Dashboard from "./components/Dashboard/dashboard"
import Poll from "./components/Poll/poll"
import DisplayPoll from "./components/PollDisplay/displayPoll"
import SingleRating from "./components/SingleRating/SingleRating";

function App() {
  console.log("APP Rendered");
  const [user, setUser] = useState({});

  const handleUser = (data) => {
    setUser({ ...data });
  };
  return (
    <>
      <NavbarHandler>
        <Navbar user={user} />
      </NavbarHandler>
      <Routes>
        <Route element={<PrivateRoutes />}>
          {/* Protected routes go here */}
          {/* <Route element={<Rating />} path="/new/rating" exact /> */}
          <Route
            element={<Dashboard handleuser={handleUser} />}
            path="/dashboard"
            exact
          />
          <Route element={<Poll />} path="/new/poll" exact />
          <Route element={<DisplayPoll />} path="/polls" exact />
          {/* <Route element={<SinglePoll />} path="/poll/:id" exact /> */}
          <Route element={<SingleRating />} path="/ratings/:id" exact />
        </Route>
        {/* Unprotected routes go here */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />}/>

      </Routes>
    </>
  );
}

const NotFound = ({ children }) => {
  return <div>Not Found</div>;
};

export default App;

/*
<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/rating" element={<Rating />}/>
         
          <Route path="*" element={<NotFound />}/>
        </Routes>

*/
