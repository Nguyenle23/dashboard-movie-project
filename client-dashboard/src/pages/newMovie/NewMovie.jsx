import "./newMovie.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { createMovie } from "../../context/movieContext/apiCall";
import { useState, useContext } from "react";

export default function NewMovie() {
  const [movie, setMovie] = useState(null);
  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
    // history.push("/movies");
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="new_container">
        <Navbar />
        <div className="new_container_top">
          <h1 className="top_tilte">Create Movie</h1>
        </div>
        <div className="new_container_bottom">
          <div className="bottom_left">
            <img
              src={
                "https://i.pinimg.com/564x/9e/46/c7/9e46c7ebe515311bf97b0d72143ae41a.jpg"
              }
              alt="avt_add"
              className="left_img"
            />
          </div>
          <div className="bottom_right">
            <form>
              <div className="formInput">
                <label>Title</label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Genre</label>
                <input
                  type="text"
                  placeholder="Genre"
                  name="genre"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Year</label>
                <input
                  type="text"
                  placeholder="Year"
                  name="year"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Limit</label>
                <input
                  type="text"
                  placeholder="Limit"
                  name="limit"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Duration</label>
                <input
                  type="text"
                  placeholder="Duration"
                  name="duration"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Is Serires ?</label>
                <input
                  type="text"
                  placeholder="Yes/No"
                  name="isSeries"
                  id="isSeries"
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
}
