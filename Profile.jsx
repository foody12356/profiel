// import React from 'react'
import "../Style/profile.css";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
const Profile = () => {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };
  return (
    <div style={{ marginBottom: "30px" }}>
      <div className="ScriptHeader">
        <div className="rt-container">
          <div className="col-rt-12">
            <div className="rt-heading">
              <h1
                style={{
                  color: "rgb(37 99 235)",
                  fontSize: "6rem",
                  marginLeft: "400px",
                }}
              >
                INTERN PROFILE
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="rt-container">
        <div class="col-rt-12">
          <div class="Scriptcontent">
            <div class="student-profile py-4">
              <div class="container">
                <div class="row">
                  <div className="col-lg-4">
                    <div class="card shadow-sm" style={{ margin: "30px",marginRight:"50px", boxSizing:"600px"}}>
                      <div className="card-header bg-transparent text-center">
                        <img
                          className="profile_img"
                          src="https://source.unsplash.com/600x300/?student"
                          alt="student dp"
                        />
                        <h3>xyz</h3>
                      </div>

                      <div className="card-body">
                        <p className="mb-0">
                          <strong className="pr-1">Intern ID:</strong>--
                        </p>
                        <p className="mb-0">
                          <strong className="pr-1">Team:</strong>4
                        </p>
                        <p className="mb-0">
                          <strong className="pr-1">Department:</strong>--
                        </p>
                      </div>
                      
                    </div>
                    <Calendar value={dateState} onChange={changeDate}  />
                      <p>
                        Current selected date is{" "}
                        <b>{moment(dateState).format("MMMM Do YYYY")}</b>
                      </p>
                  </div>
                  <div class="col-lg-8" style={{ marginTop: "30px" }}>
                    <div className="card shadow-sm">
                      <div className="card-header bg-transparent border-0">
                        <h3 className="mb-0">
                          <i class="far fa-clone pr-1"></i>General Information
                        </h3>
                      </div>
                    </div>
                    <div className="card-body pt-0">
                      <table className="table table-bordered">
                        <tr>
                          <th width="30%">Attendance</th>
                          <td width="2%">:</td>
                          <td>125</td>
                        </tr>
                        <tr>
                          <th width="50%">Interenship Year </th>
                          <td width="2%">:</td>
                          <td>2020</td>
                        </tr>
                        <tr>
                          <th width="30%">Gender</th>
                          <td width="2%">:</td>
                          <td>xyz</td>
                        </tr>
                        <tr>
                          <th width="30%">Techmihirinaik EmailID</th>
                          <td width="2%">:</td>
                          <td>example@gmail.com</td>
                        </tr>
                        <tr>
                          <th width="30%">Gmail</th>
                          <td width="2%">:</td>
                          <td>example@gmail.com</td>
                        </tr>
                        <tr>
                          <th width="30%">Contact Number</th>
                          <td width="2%">:</td>
                          <td>768xxxxxxx</td>
                        </tr>
                        <tr>
                          <th width="30%">Leave Taken</th>
                          <td width="2%">:</td>
                          <td>7</td>
                        </tr>
                      </table>
                      <button
                        class="inline-block bg-blue-600 px-4 py-2 rounded-full btn-primary text-white font-bold "
                        style={{ marginRight: "20px" }}
                      >
                        Check In
                      </button>
                      <button
                        class="inline-block bg-blue-600 px-4 py-2 rounded-full btn-primary text-white font-bold "
                        style={{ marginRight: "20px" }}
                      >
                        Check Out
                      </button>
                      <Link
                        to="/requestform"
                        class="inline-block bg-blue-600 px-4 py-2 rounded-full btn-primary text-white font-bold "
                      >
                        Leave
                      </Link>
                    </div>

                    <div
                      className="card shadow-sm"
                      style={{ marginBottom: "30px" }}
                    >
                      <div className="card-header bg-transparent border-0">
                        <h3 className="mb-0">
                          <i className="far fa-clone pr-1"></i>Other Information
                        </h3>
                      </div>
                      <div className="card-body pt-0" style={{marginBottom:"180px",marginTop:"50px"}}>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
