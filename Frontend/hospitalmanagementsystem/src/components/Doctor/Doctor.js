import React, { useEffect, useState } from "react";
import "../Doctor/Doctor.css";
import DoctorImage from "../images/DoctorImage.png";
import { useNavigate, useParams } from "react-router-dom";

function Doctor() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUserDetails();
    getDoctorDetails();
  }, []);

  var getDoctorDetails = () => {
    var token = localStorage.getItem("token");
    fetch("http://localhost:5194/api/Doctor/GetDoctor?id=" + id, {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then(async (data) => {
        var myData = await data.json();
        setData(myData);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  var getUserDetails = () => {
    var token = localStorage.getItem("token");
    fetch("http://localhost:5194/api/User/GetAllUserDetails?id=+" + id, {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then(async (data) => {
        var myData = await data.json();
        setUser(myData);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  var DeleteUserDetails = () => {
    var token = localStorage.getItem("token");
    fetch("http://localhost:5194/api/Doctor/Delete?id=" + id, {
      method: "DELETE",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then(async (data) => {
        var myData = await data.json();
        alert("The user has been deleted");
        console(myData);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  return (
    <div className="Doctor">
      <div className="doctorHeader">
        <div>
          <h2>Doctor Information</h2>
        </div>
        <div>
          <button
            className="deleteDoctor editDoctor bg-primary"
            onClick={() => {
              navigate("/admin/editdoctor/" + user.id);
            }}
          >
            Edit Doctor
          </button>
          <button className="deleteDoctor bg-danger" onClick={DeleteUserDetails}>
            Delete Doctor
          </button>
        </div>
      </div>
      <div className="aboutDoctor">
        <div>
          <img src={DoctorImage} className="doctorImage" alt="Doctor" />
        </div>
        <div>
          <div className="description">
            <div></div>
            <div>
              <h3>Name - {data.name}</h3>
              <h4>About Doctor</h4>
              <p>{data.about}</p>
              <div className="doctorInfo">
                <div className="doctorInfoData">
                  <h5>Specialization</h5>
                  <span>{data.specialization}</span>
                </div>
                <div className="doctorInfoData">
                  <h5>License Number</h5>
                  <span>{data.licenseNumber}</span>
                </div>
                <div className="doctorInfoData">
                  <h5>Qualifications</h5>
                  <span>{data.qualifications}</span>
                </div>
                <div className="doctorInfoData">
                  <h5>Phone Number</h5>
                  <span>{data.phoneNumber}</span>
                </div>
                <div className="doctorInfoData">
                  <h5>Address</h5>
                  <span>{data.address}</span>
                </div>
                <div className="doctorInfoData">
                  <h5>Email</h5>
                  <span>{user.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
