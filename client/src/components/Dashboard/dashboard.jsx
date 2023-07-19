import "./dashboard.css"
import axios from "axios"
import React, {useEffect, useState} from "react"
import {useNavigate, Link} from "react-router-dom";

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
        }
        const fetchPolls = async() => {
            const polls = await axios.get("http://localhost:8080/api/v1/polls/");
            console.log("POLLS: ",polls)
        }
        fetchUser();
        fetchRatings();
        fetchPolls();
    })


    return (
        <div className="Dashboard">
            <h1>Dashboard</h1>
            


        </div>
    )
}

export default Dashboard;
