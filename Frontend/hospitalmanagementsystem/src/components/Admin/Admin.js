import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "../Admin/Admin.css";
import home from "../images/Home.svg";
import doctors from "../images/doctor-icon.png";
import edit from "../images/edit.png";
import logout from "../images/pngfind.com-black-button-png-49940.png";
import approveDoctor from "../images/Approved.png";
import user from "../images/user.png";
import 'bootstrap/dist/css/bootstrap.min.css';

import AdminHome from "./AdminHome";
import Doctors from "../Doctor/Doctors";
import Doctor from "../Doctor/Doctor";
import EditDoctor from "../Doctor/EditDoctor";
import ApproveDoctor from "../Doctor/ApproveDoctor";

function Admin() {
  return (
    <div className="container-flex">
      <div className="column Admin">
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
          <Link className="navbar-brand" to={"$/"}></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-auto">
                <Link to={"$/"} className="nav-link">
                  <img src={home} className="navImage" alt="Home" />
                  <b className="nav">Home</b>
                </Link>
              </li>
              <li className="nav-item mr-auto">
                <Link to={"$/doctorsprofile"} className="nav-link">
                  
                  <img src={doctors} className="navImage" alt="Doctors" />
                  <b className="nav">Doctor's profile</b>
                </Link>
              </li>
              <li className="nav-item mr-auto">
                
                <Link to={"$/approvedoctor"} className="nav-link">
                  <img src={approveDoctor} className="navImage" alt="Approved Doctor" />
                  <b className="nav">Approved Doctors</b>
                </Link>
              </li>
              <li className="nav-item mr-auto">
                <Link to={"$/editdoctor"} className="nav-link">
                  <img src={edit} className="navImage" alt="Edit Doctor" />
                  <b className="nav">Edit</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => {
                    localStorage.clear();
                  }}
                >
                  <img src={logout} className="navImage" alt="Logout" />
                  <b className="nav">Logout </b>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="col-10 viewBar bg-warning">
          <Routes>
            <Route path="$/" element={<AdminHome />} />
            <Route path="$/doctorsprofile" element={<Doctors />} />
            <Route path="/doctor/:id" element={<Doctor />} />
            <Route path="$/editdoctor" element={<EditDoctor />} />
            <Route path="/editdoctor/:id" element={<EditDoctor />} />
            <Route path="$/approvedoctor" element={<ApproveDoctor />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Admin;
