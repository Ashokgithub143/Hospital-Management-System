import React, { useEffect, useState } from "react";
import "../Admin/AdminHome.css";
import doctor from "../images/doctor-icon.png";
import patient from "../images/patient-icon.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminHome() {
  const [data, setData] = useState({
    approvedDoctorCount: 0,
    notApprovedDoctorCount: 0,
    patientCount: 0,
  });
  useEffect(() => {
    viewUsersCount();
  }, []);

  var viewUsersCount = () => {
    fetch("http://localhost:5194/api/User/GetAllUsersCount", {
      method: "GET",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData);
        setData(myData);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  return (
    <div className="container">
      <div className="AdminHome">
        <div className="adminDetails">
          <h2>Admin</h2>
          <span>Email - admin@gmail.com</span>
        </div>
        <div className="row hospitalData">
          <div className="col-md-4">
            <div className="hospitalInfo bg-light p-3 rounded">
              <div className="labelDiv bg-success rounded-circle">
                <img src={doctor} className="labelImage" alt="Doctor" />
              </div>
              <div className="hospitalValue">
                <span className="cardValue bg-warning rounded-pill p-2">
                  {data.approvedDoctorCount}
                </span>
                <span className="cardLabel">Approved Doctors</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="hospitalInfo bg-light p-3 rounded">
              <div className="labelDiv bg-danger rounded-circle">
                <img src={doctor} className="labelImage" alt="Doctor" />
              </div>
              <div className="hospitalValue">
                <span className="cardValue bg-danger rounded-pill p-2">
                  {data.notApprovedDoctorCount}
                </span>
                <span className="cardLabel">Not Approved Doctors</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="hospitalInfo bg-light p-3 rounded">
              <div className="labelDiv bg-primary rounded-circle">
                <img src={patient} className="labelImage" alt="Patient" />
              </div>
              <div className="hospitalValue">
                <span className="cardValue bg-info rounded-pill p-2">
                  {data.patientCount}
                </span>
                <span className="cardLabel">Patient Count</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
