// src/pages/ProfileScreen.js
import React from "react";

const ProfileScreen = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.header}>Account Settings</h2>
        <div style={styles.profileInfo}>
          <img
            src="https://randomuser.me/api/portraits/women/75.jpg"
            alt="Marry Doe"
            style={styles.avatar}
          />
          <div>
            <h3 style={styles.name}>Marry Doe</h3>
            <p style={styles.email}>Marry@Gmail.Com</p>
          </div>
        </div>
        <p style={styles.description}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    background: "#F7F8F9",
    width: "375px",
    height: "812px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Segoe UI', sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
  },
  header: {
    marginBottom: "20px",
    fontSize: "18px",
    color: "#333",
    fontWeight: "600",
  },
  profileInfo: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "15px",
  },
  avatar: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  name: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "600",
  },
  email: {
    margin: 0,
    fontSize: "13px",
    color: "#777",
  },
  description: {
    fontSize: "13px",
    color: "#555",
    lineHeight: "1.6",
    marginTop: "10px",
  },
};

export default ProfileScreen;
