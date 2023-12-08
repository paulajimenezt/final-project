import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        {/* Your login form */}
        <Link to="/horse-admin">Go to Horse Admin</Link>
      </div>
    );
  }
}

export default LoginPage;
