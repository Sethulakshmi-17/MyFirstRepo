import React, { useState } from "react";
import Dashboard from "./Dashboard"; // Make sure you have this component

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (email === "admin@gmail.com" && password === "admin123") {
        setIsLoggedIn(true); // Show dashboard
      } else {
        setError("Invalid Email or Password");
        setLoading(false); // Show form again
      }
    }, 1500); // 1.5 seconds delay
  };

  if (isLoggedIn) {
    return <Dashboard />; // Render your dashboard component
  }

  return (
    <div style={styles.fullScreenContainer}>
      {loading ? (
        <h2 style={styles.loadingText}>Loading...</h2>
      ) : (
        <form style={styles.form} onSubmit={handleLogin}>
          <h2 style={styles.heading}>Thulir Admin</h2>

          {error && <p style={styles.error}>{error}</p>}

          <label style={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />

          <label style={styles.label}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.btn}>
            Admin Login
          </button>
        </form>
      )}
    </div>
  );
}

const styles = {
  fullScreenContainer: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f2f5",
  },
  form: {
    width: "400px",
    height: "450px",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "5 4px 20px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "50px",
    fontFamily: "Times New Roman",
    fontStyle: "italic",
    marginTop: "10px",
    color: "green",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: "5px",
    fontSize: "20px",
    fontFamily: "Times New Roman",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "5px",
    fontSize: "25px",
    fontFamily: "Times New Roman",
    fontStyle: "italic",
  },
  input: {
    padding: "15px",
    marginBottom: "20px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "20px",
    fontFamily: "Times New Roman",
    fontStyle: "italic",
  },
  btn: {
    padding: "12px",
    backgroundColor: "#337d10ff",
    color: "#fff",
    borderRadius: "6px",
    border: "none",
    fontSize: "25px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "50px",
    fontFamily: "Times New Roman",
    fontStyle: "italic",
  },
  loadingText: {
    fontSize: "40px",
    fontFamily: "Times New Roman",
    fontStyle: "italic",
    color: "green",
  },
};

export default Login;