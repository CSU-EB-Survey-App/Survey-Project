import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  Box,
  ListItemAvatar,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";
import Loading from "../Loading/loading";

const Styles = {
  searchBarContainer: {
    padding: "15px",
    marginTop: "15px",
    marginBottom: "15px",
    width: "50%",
  },
  textHeaderContainer: {
    marginTop: "80px",
    padding: "15px",
  },
  scrollableContainer: {
    maxHeight: "100vh",
    overflowY: "auto",
    padding: "25px",
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
  noItemsMessage: {
    padding: "15px",
  },
  createPostMessage: {
    marginTop: "100px",
    textAlign: "center",
  },
};

const UserRatings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRatings = async () => {
      let token = localStorage.getItem("token");
      const user = await axios.post("http://localhost:8080/api/v1/auth/user", {
        token,
      });
      console.log(user.data.user.ratings);
      setFilteredItems(user.data.user.ratings);
      setItems(user.data.user.ratings);
      setLoading(false);
    };
    fetchRatings();
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

  const handleDelete = async (id) => {
    try {
      let request = await axios.delete(
        `http://localhost:8080/api/v1/ratings/${id}`
      );
      console.log(request);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
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
          <div style={Styles.textHeaderContainer}>
            <Typography variant="h4">My Ratings</Typography>
          </div>
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
              {filteredItems.length < 1 ? (
                <Typography style={Styles.noItemsMessage} variant="h5">
                  No Ratings
                </Typography>
              ) : (
                <List>
                  {filteredItems.map((item, index) => (
                    <ListItem key={index} style={Styles.listItem}>
                      <div style={{ width: "40%" }}>
                        <Link
                          key={index}
                          to={`/ratings/${item._id}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <PersonIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={item.question}
                            secondary={moment(item.createdAt).format(
                              "MMMM DD, YYYY"
                            )}
                          />
                        </Link>
                      </div>
                      <ListItemText primary={`Votes: ${item.useful}`} />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => handleDelete(item._id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              )}
            </Box>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default UserRatings;
