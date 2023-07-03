import React from "react";
import "../Admin/Admin.css";
import home from "../images/Home.svg";
import doctors from "../images/doctor-icon.png";
import logout from "../images/pngfind.com-black-button-png-49940.png";
import approveDoctor from "../images/approved-icon-png.jpg";
import user from "../images/user.png";
import { Link, Routes, Route } from "react-router-dom";
import Doctors from "../Doctor/Doctors";
import Doctor from "../Doctor/Doctor";
import DoctorProfile from "../Doctor/DoctorProfile";
import PatientProfile from "../Patient/PatientProfile";
import ApprovedDoctors from "../Doctor/ApprovedDoctors";

function Patient() {
  return (
    <div className="Admin">
      <div className="sideBar">
        <div className="SideBar">
          <div className="userProfile navIcon">
            <img src={user} className="userImage" />
          </div>
          <div>
            <Link to={"$/"} className="home navIcon">
              <img src={home} className="navImage" />
            </Link>
            <Link to={"$/approveddoctors"} className="doctors navIcon">
              <img src={doctors} className="navImage" />
            </Link>
            <Link
              className="logout navIcon"
              to={"/"}
              onClick={() => {
                localStorage.clear();
              }}
            >
              <img src={logout} className="navImage" />
            </Link>
          </div>
        </div>
      </div>
      <div className="viewBar">
        <Routes>
          <Route path="$/" element={<PatientProfile />} />
          <Route path="$/approveddoctors" element={<ApprovedDoctors />} />
          <Route path="/doctorprofiles/:id" element={<DoctorProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default Patient;
