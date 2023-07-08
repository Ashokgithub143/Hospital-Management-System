import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DoctorRegister() {
  const navigate = useNavigate();
  const [doctor, setUser] = useState({
    doctorId: 0,
    name: "",
    gender: "",
    dateOfBirth: new Date(),
    phoneNumber: "",
    address: "",
    specialization: "",
    qualifications: "",
    licenseNumber: "",
    experience: 0,
    about: "",
    status: "",
    passwordClear: "",
  });
  const [email, setEmail] = useState();

  const register = () => {
    console.log(doctor);
    fetch("http://localhost:5194/api/Doctor/DoctorRegister", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...doctor,
        user: {
          id: 0,
          email: email,
          role: "",
        },
      }),
    })
      .then(async (data) => {
        const myData = await data.json();
        localStorage.setItem("id", myData.id);
        localStorage.setItem("role", myData.role);
        localStorage.setItem("token", myData.token);
        navigate("/doctor/$/");
        console.log(myData);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  return (
    <div className="container">
      <div className="EditDoctor">
        <div className="EditDoctorDetails">
          <h2>Doctor Registration</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  onChange={(event) => {
                    setUser({ ...doctor, name: event.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Specialization</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Specialization"
                  onChange={(event) => {
                    setUser({ ...doctor, specialization: event.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Qualifications</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Qualifications"
                  onChange={(event) => {
                    setUser({ ...doctor, qualifications: event.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label>License Number</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="License Number"
                  onChange={(event) => {
                    setUser({ ...doctor, licenseNumber: event.target.value });
                  }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Experience</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Experience"
                  onChange={(event) => {
                    setUser({ ...doctor, experience: event.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Address"
                  onChange={(event) => {
                    setUser({ ...doctor, address: event.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Phone Number"
                  onChange={(event) => {
                    setUser({ ...doctor, phoneNumber: event.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  className="form-control"
                  type="date"
                  placeholder="Date of Birth"
                  onChange={(event) => {
                    setUser({ ...doctor, dateOfBirth: event.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select
                  className="form-control"
                  onChange={(event) => {
                    setUser({ ...doctor, gender: event.target.value });
                  }}
                >
                  <option>Other</option>
                  <option>Female</option>
                  <option>Male</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Email</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>About</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="About"
                  onChange={(event) => {
                    setUser({ ...doctor, about: event.target.value });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setUser({ ...doctor, passwordClear: event.target.value });
              }}
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <button
                className="btn btn-primary"
                onClick={register}
              >
                Register
              </button>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  navigate("/");
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorRegister;
