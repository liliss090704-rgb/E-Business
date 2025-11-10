import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username === "admin" && user.password === "1234") {
      setLoggedIn(true);
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    <div>
      <h2>Halaman Login 🔑</h2>
      {!loggedIn ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      ) : (
        <h3>Selamat datang, {user.username}! 🎉</h3>
      )}
    </div>
  );
}
