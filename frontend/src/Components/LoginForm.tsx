import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import Link from "next/link";
import { useRouter } from 'next/router';
import {API_URL} from "../Constants"

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateEmail() && validatePassword()) {
    axios
      .post(`${API_URL}/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        setToken(res.data.token);
        router.push({
          pathname: '/', 
          query: { token: res.data.token },
        })
        setPassword("");
        setEmail("");
        
      })
      .catch((err) => {
        window.alert(err.message);
      });
    }else{
      window.alert("Fields are not correct");
    }
  };

    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const validatePassword = () => {
      const nameRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
      return nameRegex.test(password);
    };

  return (
    <div className="center" style={{ flexDirection: "column" }}>
      <h1 style={{ textAlign: "center", color: "white" }}>Login Form</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
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
            Don't have account? <Link href="/register"> Signup</Link>
          </h5>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
