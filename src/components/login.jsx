import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // Call back-end services
    alert(`Hello, ${username}, with password ${password}`);

    console.log("Submitted at: ", new Date().toLocaleTimeString());
  };

  const handleChange = event => {
    setUsername(event.target.value);
  };
  return (
    <main className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            defaultValue={username}
            placeholder="username"
            className="form-control"
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            placeholder="password"
            className="form-control"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </main>
  );
};

export default Login;
