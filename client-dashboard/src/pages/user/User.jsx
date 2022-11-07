import { useLocation } from "react-router-dom";
import { useState, useContext } from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

import "./user.scss";
import { UserContext } from "../../context/userContext/UserContext";
import { updateUser } from "../../context/userContext/apiCall";

export default function User() {
  const location = useLocation();
  const user = location.state.users;

  const [updateUserObject, setUpdateUser] = useState({});
  const { dispatch } = useContext(UserContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdateUser({
      ...updateUserObject,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user.id, updateUserObject, dispatch);
    window.location.href = "/user";
  };

  return (
    <div className="single">
      <Sidebar />
      <div className="single_container">
        <Navbar />
        <div className="single_top">
          <div className="single_top_left">
            <h1 className="edit_button">
              <button onClick={handleSubmit}>Update</button>
            </h1>
            <h1 className="title">Information</h1>
            <div className="items">
              <img
                src={
                  user.avatar ||
                  "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                }
                alt="Avatar"
                className="item_img"
              />
              <div className="details">
                <div className="detail_item">
                  <label>Fullname: </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder={user.fullname || "Empty"}
                    name="fullname"
                    onChange={handleChange}
                  />
                </div>
                <div className="detail_item">
                  <label>Email: </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder={user.email || "Empty"}
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="detail_item">
                  <label>Phonenumber: </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder={user.phoneNumber || "Empty"}
                    name="phoneNumber"
                    onChange={handleChange}
                  />
                </div>
                <div className="detail_item">
                  <label>Gender: </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder={user.gender || "Empty"}
                    name="gender"
                    onChange={handleChange}
                  />
                </div>
                <div className="detail_item">
                  <label>Country: </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder={user.location || "Empty"}
                    name="location"
                    onChange={handleChange}
                  />
                </div>
                <div className="detail_item">
                  <label>Admin: </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder={user.admin ? "True" : "False"}
                    name="admin"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="single_top_right">
            <Chart aspect={3 / 1} title="User Spend (last year)" />
          </div>
        </div>
        <div className="single_bottom">
          <h1 className="single_bottom_title">Last Access</h1>
          <Table />
        </div>
      </div>
    </div>
  );
}
