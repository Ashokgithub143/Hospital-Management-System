import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PatientRegister() {
  const navigate = useNavigate();
  const [patient, setUser] = useState({
    patientId: 0,
    name: "",
    gender: "",
    dateOfBirth: new Date(),
    phoneNumber: "",
    address: "",
    bloodGroup: "",
    passwordClear: "",
  });
  const [email, setEmail] = useState("");

  const register = () => {
    console.log(patient);
    fetch("http://localhost:5194/api/Patient/PatinetRegister", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...patient,
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
        navigate("/patient/$");
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
          <h2>Patient Registration</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  onChange={(event) => {
                    setUser({ ...patient, name: event.target.value });
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
                    setUser({ ...patient, address: event.target.value });
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
                    setUser({ ...patient, phoneNumber: event.target.value });
                  }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  className="form-control"
                  type="date"
                  placeholder="Date of Birth"
                  onChange={(event) => {
                    setUser({ ...patient, dateOfBirth: event.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select
                  className="form-control"
                  onChange={(event) => {
                    setUser({ ...patient, gender: event.target.value });
                  }}
                >
                  <option>Other</option>
                  <option>Female</option>
                  <option>Male</option>
                </select>
              </div>
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
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Password</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  onChange={(event) => {
                    setUser({ ...patient, passwordClear: event.target.value });
                  }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Blood Group</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Blood Group"
                  onChange={(event) => {
                    setUser({ ...patient, bloodGroup: event.target.value });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <button className="btn btn-primary" onClick={register}>
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

export default PatientRegister;
