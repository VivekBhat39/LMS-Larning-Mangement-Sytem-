import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let navigate = useNavigate();

  function handleChange(e) {
    e.preventDefault();
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
    if (e.target.id === "password") {
      setPassword(e.target.value)
    }
  }
  function submit(e) {
    e.preventDefault();
    let data = { email: email, password: password };
    console.log(data);
    axios.post("http://localhost:8081/trainer/authentication/login", data).then((result) => {
      console.log(result.data);
      if (result.data.status === "success") {
        localStorage.setItem("usertype", "trainer");
        localStorage.setItem("name", result.data.data.name);
        navigate("/dashboard");
      }
      else {
        alert("Invalid credentials");
        setEmail("");
        setPassword("");
      }
    })
  }



  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div className="row">
        <h1 className="mb-5 mt-4"> Trainer Login</h1>
        <div className="col-lg-7 my-auto">
          <img
            className="img-fluid"
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Login image"
          />
        </div>
        <div className="col-lg-5 my-auto mx-auto">
          <form className="p-5">
            <div class="mb-3 mt-5">
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <button onClick={(e) => { submit(e) }} class="btn btn-primary mt-5">
              Login
            </button>
            <br />
            <br />

            <a href="/">Forgot password</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
