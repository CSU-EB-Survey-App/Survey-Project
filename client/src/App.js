// Package Imports
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

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
import Dashboard from "./components/Dashboard/dashboard";
import Poll from "./components/Poll/poll";
import SinglePoll from "./components/PollDisplay/displayPoll";
import SingleRating from "./components/SingleRating/SingleRating";
import SearchPolls from "./components/SearchPosts/searchPolls";
import SearchRatings from "./components/SearchPosts/searchRatings";
import AccountPage from "./components/Account/account";
import UserPolls from "./components/UserPosts/myPolls";
import UserRatings from "./components/UserPosts/myRatings";
import NotFound from "./components/NotFound/notFound";

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
          <Route element={<AccountPage />} path="/settings" exact />
          <Route
            element={<Dashboard handleuser={handleUser} />}
            path="/dashboard"
            exact
          />
          {/* <Route> element = {}</Route> */}
          <Route element={<Poll user={user} />} path="/new/poll" exact />
          <Route element={<Rating user={user} />} path="/new/rating" exact />

          <Route element={<SingleRating />} path="/ratings/:id" exact />
          <Route element={<SinglePoll />} path="/polls/:id" exact />
          {/* Search Routes */}
          <Route element={<SearchPolls />} path="/search/polls" exact />
          <Route element={<SearchRatings />} path="/search/ratings" exact />
          <Route element={<UserPolls />} path="/account/polls" exact />
          <Route element={<UserRatings />} path="/account/ratings" exact />
        </Route>
        {/* Unprotected routes go here */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
