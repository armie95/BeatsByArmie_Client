import "./Dashboard.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return setFailedAuth(true);
    }

    // Get the data from the API
    axios
      .get("http://localhost:8080/api/users/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
        setFailedAuth(true);
      });
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setUser(null);
    setFailedAuth(true);
  };

  if (failedAuth) {
    return (
      <main className="dashboard">
        <p>You must be logged in to see this page.</p>
        <p>
          <Link to="/login">Log in</Link>
        </p>
      </main>
    );
  }

  if (user === null) {
    return (
      <main className="dashboard">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className="dashboard">
      <h1 className="dashboard__title">Dashboard</h1>

      <p>
        Welcome back, {user.first_name} {user.last_name}
      </p>

      <h2>My Profile</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address}</p>

      <button className="dashboard__logout" onClick={handleLogout}>
        Log out
      </button>
    </main>
  );
}

export default Dashboard;
