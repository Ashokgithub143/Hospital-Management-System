import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Doctors from "../Doctor/Doctors";
import Doctor from "../Doctor/Doctor";
import Approved from '../images/Approved.png';
import DoctorProfile from "../Doctor/DoctorProfile";
import PatientProfile from "../Patient/PatientProfile";
import ApprovedDoctors from "../Doctor/ApprovedDoctors";
import user from "../images/user.png";
import home from "../images/Home.svg";
import doctors from "../images/doctor-icon.png";
import logout from "../images/pngfind.com-black-button-png-49940.png";

function Patient() {
  return (
    <div className="Admin container-fluid">
      <div className="row">
        <div className="col-lg-2 sideBar">
          <div className="SideBar">
            <div className="userProfile navIcon">
              <img src={user} className="userImage" alt="User" />
            </div>
            <div>
              <Link to={"/"} className="home navIcon">
                <img src={home} className="navImage" alt="Home" />
              </Link>
              <Link to={"/approveddoctors"} className="doctors navIcon">
                <img src={doctors} className="navImage" alt="Doctors" />
              </Link>
              <Link
                className="logout navIcon"
                to={"/"}
                onClick={() => {
                  localStorage.clear();
                }}
              >
                <img src={logout} className="navImage" alt="Logout" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-10 viewBar">
          <Routes>
            <Route path={"/"} element={<PatientProfile />} />
            <Route path={"/approveddoctors"} element={<ApprovedDoctors />} />
            <Route path={"/doctorprofiles/:id"} element={<DoctorProfile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Patient;
