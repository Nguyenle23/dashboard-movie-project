import "./newUser.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { createNewUser } from "../../actions";

export default function NewUser() {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNewUser(user);
    window.location.href = "/users";
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="new_container">
        <Navbar />
        <div className="new_container_top">
          <h1 className="top_tilte">Create User</h1>
        </div>
        <div className="new_container_bottom">
          <div className="bottom_left">
            <img src={"https://i.pinimg.com/564x/9e/46/c7/9e46c7ebe515311bf97b0d72143ae41a.jpg"} alt="avt_add" className="left_img"/>
          </div>
          <div className="bottom_right">
            <form>
              <div className="formInput">
                <label>Your name:</label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Email:</label>
                <input
                  type="text"
                  placeholder="Your email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Phone number:</label>
                <input
                  type="text"
                  placeholder="Phone number"
                  name="phone"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Gender</label>
                <input
                  type="text"
                  placeholder="Gender"
                  name="gender"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Password:</label>
                <input
                  type="text"
                  placeholder="Your password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Is Admin</label>
                <input
                  type="text"
                  placeholder="True/False"
                  name="admin"
                  onChange={handleChange}
                />
              </div>
              <button onClick={handleSubmit}>Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

