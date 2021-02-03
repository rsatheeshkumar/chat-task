import React, { useState } from "react";
import { messages, passwordRegex } from "./constants";
import "./index.scss";

export const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert(messages.email);
    } else if (!password.match(passwordRegex)) {
      alert(messages.password);
    } else {
      onLogin(true);
    }
  };
  return (
    <div className="login-ui">
      <main className="form-signin">
        <form className="card shadow-sm border-0" onSubmit={handleSubmit}>
          <div className="card-body">
            <h1 className="h2 mb-3 fw-normal text-center login-header">
              User login
            </h1>
            <label htmlFor="inputEmail" className="visually-hidden">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control mt-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              required
            />
            <label htmlFor="inputPassword" className="visually-hidden">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control mt-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className=" button mt-2 w-50 btn btn-sm btn-success"
              type="submit"
            >
              LOGIN
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
export default Login;
