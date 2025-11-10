import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {["Home", "About", "Contact", "Login"].map((menu) => (
        <Link
          key={menu}
          to={menu === "Home" ? "/" : `/${menu.toLowerCase()}`}
          style={{
            color: "white",
            margin: "0 15px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          {menu}
        </Link>
      ))}
    </nav>
  );
}
