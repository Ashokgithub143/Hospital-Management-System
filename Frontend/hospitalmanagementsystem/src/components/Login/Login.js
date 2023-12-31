import React, { useEffect, useState } from "react";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import loginImage from "../images/hospital-logo.png";

function Login(props) {
  useEffect(() => {
    localStorage.clear();
  }, []);
  const navigate = useNavigate();
  var [user, setUser] = useState({
    email: "",
    password: "",
  });

  var login = () => {
    fetch("http://localhost:5194/api/User/Login", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user }),
    })
      .then(async (data) => {
        var myData = await data.json();
        localStorage.setItem("id", myData.id);
        localStorage.setItem("role", myData.role);
        localStorage.setItem("token", myData.token);
        if (myData.role == "Doctor") {
          navigate("/doctor/$/");
        } else if (myData.role == "Patient") {
          navigate("/patient/$");
        } else if (myData.role == "Admin") {
          navigate("/admin/$");
        }
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  return (
    <div className="Login">
      <div className="LoginTitle">
        <h1>Login</h1>
        <p className="loginmessage">
          <b>Stay connected and improve your treatment’s efficiency together</b>
        </p>
      </div>
      <div className="loginRquestfields">
        <input
          className="inputfield"
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setUser({ ...user, email: event.target.value });
          }}
        />
        <input
          className="inputfield"
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setUser({ ...user, password: event.target.value });
          }}
        />
        <button
          className="profileViewButton userapprovalbutton loginbutton"
          onClick={login}
        >
          Login
        </button>
      </div>
      <div className="signUpButtons">
        <div>
          <button
            className="deleteDoctor editDoctor editProfile signupButton"
            onClick={() => {
              navigate("/doctorregister");
            }}
          >
            Doctor SignUp
          </button>
        </div>
        <div>
          <button
            className="deleteDoctor editDoctor editProfile signupButton"
            onClick={() => {
              navigate("/patientregister");
            }}
          >
            Patient SignUp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
