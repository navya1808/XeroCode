import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import Link from "next/link";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateName() && validateEmail() && validatePassword()) {
      axios
        .post("http://localhost:5000/api/register", {
          email: email,
          password: password,
          name: name,
        })
        .then((res) => {
          window.alert(res.data.message);
          setName("");
          setPassword("");
          setEmail("");
        })
        .catch((err) => {
          window.alert(err.message);
        });
    } else {
      window.alert("Fields are not correct");
    }
  };

  const validateName = () => {
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    return nameRegex.test(name);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = () => {
    const nameRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
    return nameRegex.test(password);
  };

  return (
    <div className="center" style={{ flexDirection: "column" }}>
      <h1 style={{ textAlign: "center", color: "white" }}>SignUp Form</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <br />
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <br />
          <div className="center">
            <input type="submit" value="Submit" />
          </div>

          <h5 style={{ textAlign: "center", color: "white" }}>
            Already have account? <Link href="/login">Login</Link>
          </h5>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
