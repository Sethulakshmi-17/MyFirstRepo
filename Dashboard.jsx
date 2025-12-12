import React from "react";

function Dashboard() {
  return (
    <div style={styles.heading}>
      <h1>Welcome Admin 🎉</h1>
    </div>
  );
}

const styles = {
  wrapper: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "60px",
    fontFamily : "Times New Roman",
    fontStyle: "italic",
    marginTop: "10px",
    color: "green",
  },
  
};

export default Dashboard;