import React, { useEffect, useState } from "react";
import "../Doctor/EditDoctor.css";
import filtericon from "../images/filter-filled-tool-symbol.png";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditDoctor() {
  const { id } = useParams;
  const navigate = useNavigate();
  const [user, setUser] = useState({
    doctorId: 0,
    user: {
      id: 0,
      email: "",
      role: "",
    },
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
  });
  const [doctor, setDoctor] = useState([]);
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    viewDoctors();
  }, []);
  var viewDoctors = () => {
    var token = localStorage.getItem("token");
    fetch("http://localhost:5194/api/Doctor/GetAllDoctors", {
      method: "GET",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData);
        setDoctors(myData);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  var UpdateDoctorDetails = () => {
    var token = localStorage.getItem("token");
    fetch("http://localhost:5194/api/Doctor/Update", {
      method: "PUT",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ ...user }),
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData);
        setDoctors(myData);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  return (
    <div className="EditDoctor">
      <div className="EditDoctorDetails">
        <div>
          <h2>Edit Doctor Details</h2>
        </div>
        <div className="Filter">
          <span>Search By</span>
          <select
            className="doctorsFilter"
            onChange={(event) => {
              setUser({ ...user, doctorId: event.target.value });
            }}
          >
            <option>Choose Doctor</option>
            {doctors.map((item, index) => (
              <option value={item.doctorId} key={index}>
                {item.doctorId}
              </option>
            ))}
          </select>
          <div className="filterDiv">
            <img src={filtericon} />
          </div>
        </div>
        <div className="updateDetails">
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel">Name</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder="Name"
              onChange={(evet) => {
                setUser({ ...user, name: evet.target.value });
              }}
            />
          </div>
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel">Specialization</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder="Specialization"
              onChange={(evet) => {
                setUser({ ...user, specialization: evet.target.value });
              }}
            />
          </div>
        </div>
        <div className="updateDetails">
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel">Qulifications</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder="Qulifications"
              onChange={(evet) => {
                setUser({ ...user, qualifications: evet.target.value });
              }}
            />
          </div>
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel">License Number</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder="License Number"
              onChange={(evet) => {
                setUser({ ...user, licenseNumber: evet.target.value });
              }}
            />
          </div>
        </div>
        <div className="updateDetails">
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel">Experience</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder="Experience"
              onChange={(evet) => {
                setUser({ ...user, experience: evet.target.value });
              }}
            />
          </div>
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel">Address</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder="Address"
              onChange={(evet) => {
                setUser({ ...user, address: evet.target.value });
              }}
            />
          </div>
        </div>
        <div className="updateDetails">
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel">Phone Number</label>
            <input
              className="UpdateDetailsInfoInput smallLabel"
              type="text"
              placeholder="Phone Number"
              onChange={(evet) => {
                setUser({ ...user, phoneNumber: evet.target.value });
              }}
            />
          </div>
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel ">Date of Birth</label>
            <input
              className="UpdateDetailsInfoInput smallLabel"
              type="date"
              placeholder="Date of Birth"
              onChange={(evet) => {
                setUser({ ...user, dateOfBirth: evet.target.value });
              }}
            />
          </div>
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel ">Gender</label>
            <select
              className="UpdateDetailsInfoInput smallLabel"
              onChange={(evet) => {
                setUser({ ...user, gender: evet.target.value });
              }}
            >
              <option>Other</option>
              <option>Female</option>
              <option>Male</option>
            </select>
          </div>
        </div>
        <div className="updateDetails">
          <div className="UpdateDetailsInfo">
            <label className="UpdateDetailsInfolabel ">About</label>
            <input
              className="UpdateDetailsInfoInput"
              type="text"
              placeholder="About"
              onChange={(evet) => {
                setUser({ ...user, about: evet.target.value });
              }}
            />
          </div>

          <div className="UpdateDetailsInfo">
            <button
              className="deleteDoctor editDoctor submitButton"
              onClick={UpdateDoctorDetails}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditDoctor;
