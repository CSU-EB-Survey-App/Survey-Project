import "./dashboard.css"
import axios from "axios"
import React, {Fragment, useEffect, useState} from "react"
import {useNavigate, Link} from "react-router-dom";
// Material UI Imports
import { Grid } from '@mui/material';

// Imports
import PostCarousel from "./postCarousel";

function Dashboard(props) {
    const [user, setUser]=useState({});
    const [ratings, setRatings]=useState([]);
    const [polls, setPolls]=useState([]);

    useEffect(() => {
        const fetchUser = async() => {
            let token = localStorage.getItem("token");
            const user = await axios.post("http://localhost:8080/api/v1/auth/user", {
                token
            })
            console.log("USER: ", user);
            props.handleuser(user.data.user);
        }
        const fetchRatings = async() => {
            const ratings = await axios.get("http://localhost:8080/api/v1/ratings/");
            console.log("RATINGS",ratings);
            setRatings([...ratings.data.ratings])
        }
        const fetchPolls = async() => {
            const polls = await axios.get("http://localhost:8080/api/v1/polls/");
            console.log("POLLS: ",polls)
            setPolls([...polls.data.polls])
        }
        fetchUser();
        fetchRatings();
        fetchPolls();
    }, [])


    return (
        <div style={{marginTop: "100px"}}>
            <Grid container spacing={1}>
                <PostCarousel url={"polls"} items={polls} emptyItemsMessage={"Get started by creating a post"}>Popular Polls</PostCarousel>
                <PostCarousel url={"ratings"} items={ratings} emptyItemsMessage={null}>Popular Ratings</PostCarousel>
            </Grid>
        </div>
    )
}

export default Dashboard;
