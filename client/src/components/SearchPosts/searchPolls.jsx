import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import {
  List,
  ListItem,
  ListItemText,
  TextField,
  Box,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Loading from "../Loading/loading";

const Styles = {
  searchBarContainer: {
    padding: "15px",
    marginTop: "15px",
    marginBottom: "15px",
    width: "50%",
  },
  searchContainer: {
    marginTop: "80px",
  },
  scrollableContainer: {
    maxHeight: "100vh", // Set the maximum height for the scrollable container
    overflowY: "auto", // Add scrollbar when content overflows the container
  },
  listItem: {
    background: "#f5f5f5",
    borderRadius: "8px",
    marginBottom: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  listItemText: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  },
};

const SearchPolls = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPolls = async () => {
      const polls = await axios.get("http://localhost:8080/api/v1/polls/");
      console.log("SEARCH POLLS: ", polls);
      setFilteredItems(polls.data.polls);
      setItems(polls.data.polls);
      setLoading(false);
    };
    fetchPolls();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterItems(event.target.value);
  };

  const filterItems = (searchTerm) => {
    const filtered = items.filter((item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Filtered", filtered);
    setFilteredItems(filtered);
  };

  return (
    <Fragment>
      {loading ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Loading />
        </div>
      ) : (
        <Fragment>
          <div style={Styles.searchContainer}>
            <div style={Styles.searchBarContainer}>
              <TextField
                label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
                fullWidth
              />
            </div>
          </div>
          <div>
            <Box style={Styles.scrollableContainer}>
              <List>
                {filteredItems.map((item, index) => (
                  <Link
                    key={index}
                    to={`/polls/${item._id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <ListItem key={index} style={Styles.listItem}>
                      <ListItemAvatar>
                        <Avatar>
                          <PersonIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.user.studentID}
                        secondary={
                          <Fragment>
                            <Typography>{item.question}</Typography>
                            <Typography>
                              {moment(item.createdAt).format("MMMM DD, YYYY")}
                            </Typography>
                          </Fragment>
                        }
                      />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Box>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default SearchPolls;

/*
<ListItemText
                      primary={item.question}
                      primaryTypographyProps={{
                        style: Styles.listItemText,
                      }}
                      secondary={
                        <Fragment>
                          <span style={Styles.secondaryText}>
                            Created: {item.createdAt}
                          </span>
                          <br />
                          <span style={Styles.secondaryText}>
                            Start Date: {item.startDate}
                          </span>
                          <br />
                          <span style={Styles.secondaryText}>
                            End Date: {item.endDate}
                          </span>
                          <br />
                          <span style={Styles.secondaryText}>
                            Active: {item.active ? "Yes" : "No"}
                          </span>
                          /* Add more secondary values as needed 
                        //   </Fragment>
                        
                      
*/
