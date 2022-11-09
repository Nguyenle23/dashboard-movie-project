import { useLocation } from "react-router-dom";
import { useState, useContext } from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import "./movie.scss";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { updateMovie } from "../../context/movieContext/apiCall";

export default function Movie() {
  const location = useLocation();
  const movie = location.state.movie;

  const [ updateMovieObject, setUpdateMovie ] = useState({});
  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdateMovie({ ...updateMovieObject, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovie(movie.id, updateMovieObject, dispatch);
    window.location.href = "/movie";
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
                  movie.avatar ||
                  "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                }
                alt="Avatar"
                className="item_img"
              />
              <div className="details">
                <div className="detail_item">
                  <label>Title of movie: </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder={movie.title || "Empty"}
                    name="title"
                    onChange={handleChange}
                  />
                </div>
                <div className="detail_item">
                  <label>Genre of movie: </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder={movie.genre || "Empty"}
                    name="genre"
                    onChange={handleChange}
                  />
                </div>
                <div className="detail_item">
                  <label>Release Year: </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder={movie.year || "Empty"}
                    name="year"
                    onChange={handleChange}
                  />
                </div>
                <div className="detail_item">
                  <label>Duration of movie: </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder={movie.duration || "Empty"}
                    name="duration"
                    onChange={handleChange}
                  />
                </div>
                <div className="detail_item">
                  <label>Limited age: </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder={movie.limit || "Empty"}
                    name="limit"
                    onChange={handleChange}
                  />
                </div>
                <div className="detail_item">
                  <label>Is Series? : </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder={movie.isSeries ? "Yes" : "No"}
                    name="isSeries"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="single_top_right"></div> */}
        </div>
        {/* <div className="single_bottom">
          <h1 className="single_bottom_title">Last Access</h1>
        </div> */}
      </div>
    </div>
  );
}
