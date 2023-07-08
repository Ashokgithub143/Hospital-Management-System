import React from "react";
import "../Doctor/ApproveDoctor.css";
import filtericon from "../images/filter-filled-tool-symbol.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import doctor from "../images/doctor-icon.png";
import patient from "../images/patient-icon.png";

function ApproveDoctor() {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [status, setStatus] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    viewDoctors();
  }, []);

  var GetUsersByStatus = (value) => {
    var token = localStorage.getItem("token");
    console.log(value);
    if (value === "All Doctors") {
      viewDoctors();
    } else {
      fetch(
        "http://localhost:5194/api/Doctor/GetAllDoctorsByStatus?status=" +
          value,
        {
          method: "POST",
          headers: {
            accept: "text/plain",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
        .then(async (data) => {
          var myData = await data.json();
          console.log(myData);
          setData(myData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
        setData(myData);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  var ChangeStatus = (data) => {
    var token = localStorage.getItem("token");
    fetch("http://localhost:5194/api/Doctor/ChangeDoctorStatus", {
      method: "PUT",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(data),
    })
      .then(async (data) => {
        var myData = await data.json();
        GetUsersByStatus();
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  const ApproveStyle = {
    backgroundColor: "#3bb78f",
    backgroundImage: "linear-gradient(315deg, #3bb78f 0%, #0bab64 74%)",
  };

  const NotApproveStyle = {
    backgroundColor: "#c62128",
    backgroundImage: "linear-gradient(147deg, #c62128 0%, #a00000 74%)",
  };
  

  return (
    <div className="ApproveDoctor">
      <div className="container">
        <div className="row DoctorsHeader">
          <div className="col">
            <h2>Update Doctor Status</h2>
          </div>
          <div className="col-md-auto Filter">
            <span>Search By</span>
            <select
              className="form-select doctorsFilter"
              onChange={(event) => {
                GetUsersByStatus(event.target.value);
              }}
            >
              <option value="All Doctors">All Doctors</option>
              <option value="Approved">Approved Doctors</option>
              <option value="Not Approved">Not Approved Doctors</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-bordered">
              <thead>
                <tr className="headerRow">
                  <th className="smalldoc">S.NO</th>
                  <th>Doctor Name</th>
                  <th className="smalldoc">Status</th>
                  <th className="smalldoc">Edit</th>
                  <th className="smalldoc">View</th>
                  <th>Change Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="serialNo">{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.status}</td>
                    <td className="smalldoc">
                      <button
                        className="btn btn-danger deleteDoctor editDoctor userapprovalbutton editProfile"
                        onClick={() => {
                          navigate("/admin/editdoctor/" + item.doctorId);
                        }}
                      >
                        Edit Doctor
                      </button>
                    </td>
                    <td className="smalldoc">
                      <button
                        className="btn btn-primary deleteDoctor userapprovalbutton editProfile"
                        onClick={(event) => {
                          navigate("/admin/doctor/" + item.user.id);
                        }}
                      >
                        View
                      </button>
                    </td>
                    
                    <td>
                      <button
                        className="btn btn-primary profileViewButton userapprovalbutton"
                        style={
                          item.status === "Not Approved"
                            ? ApproveStyle
                            : NotApproveStyle
                        }
                        onClick={() => {
                          var userStatus =
                            item.status === "Approved"
                              ? "Not Approved"
                              : "Approved";
                          ChangeStatus({
                            doctorId: item.doctorId,
                            updatedStatus: userStatus,
                          });
                        }}
                      >
                        {item.status === "Approved" ? "Disapprove" : "Approve"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApproveDoctor;
