import React, { Component } from 'react';

class Register extends Component {
    render() {
        return(
            <div>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"/>
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname" />
                <input type="submit" value="Submit"></input>
            </div>
        );
    }
}

export default Register