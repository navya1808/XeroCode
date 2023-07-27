import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import Link from "next/link";

interface Props {
  token: string;
}

const HomePage: React.FC<Props> = ({ token }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (token) {
      if (validateName() && validateEmail()) {
        axios
          .post(
            "http://localhost:5000/api/addFormData",
            { name: name, email: email },
            {
              headers: {
                Authorization: "Token " + token,
              },
            }
          )
          .then((res) => {
            window.alert(res.data.message);
            setName("");
            setEmail("");
          })
          .catch((err) => {
            window.alert(err.message);
          });
      } else {
        window.alert("Fields are not correct");
      }
    } else {
      window.alert("You are not Logged In");
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

  return (
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
        <div className="center">
          <input type="submit" value="Submit" />
        </div>
        <h5 style={{ textAlign: "center", color: "white" }}>
          <Link href="/login">Login</Link> /{" "}
          <Link href="/register">SignUp</Link>
        </h5>
      </form>
    </div>
  );
};

export default HomePage;
