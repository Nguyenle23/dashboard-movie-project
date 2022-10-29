import { useLocation } from "react-router-dom";
import { useState, useContext } from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Table from "../../components/table/Table";

import "./movie.css";
import { MovieContext } from "../../context/movieContext/MovieContext";
// import { updateMovie } from "../../context/movieContext/apiCall";
import { upgradeMovie } from "../../actions/index";

export default function Movie() {
  const location = useLocation();
  const movie = location.state.movie;

  console.log(movie);

  const [updateMovieObject, setUpdateMovie] = useState(null);
  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdateMovie({ ...updateMovieObject, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    upgradeMovie(movie._id, updateMovieObject, dispatch);
    // .then((res) => {
    //     console.log(res)
    // //     dispatch({
    // //         type: "UPDATE_USER_SUCCESS",
    // //         payload: dataUser,
    // //     });
    // })
    window.location.href = "/movies";
  };

  return (
    <div className="single">
      <Sidebar />
      <div className="single_container">
        <Navbar />
        <div className="single_top">
          <div className="single_top_left">
            {/* <h1 className='edit_button'>Edit</h1> */}
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
                <h1 className="detail_name">{movie.title || "Empty"}</h1>
                <div className="detail_item">
                  <span className="detail_Key">Genre:</span>
                  <span className="detail_Value">{movie.genre || "Empty"}</span>
                </div>
                <div className="detail_item">
                  <span className="detail_Key">Year:</span>
                  <span className="detail_Value">
                    {movie.year || "Empty"}
                  </span>
                </div>
                <div className="detail_item">
                  <span className="detail_Key">Duration:</span>
                  <span className="detail_Value">
                    {movie.duration || "Empty"}
                  </span>
                </div>
                <div className="detail_item">
                  <span className="detail_Key">Series:</span>
                  <span className="detail_Value">
                    {movie.isSeries ? "Yes" : "No"}
                  </span>
                </div>
                <div className="detail_item">
                  <span className="detail_Key">Limit:</span>
                  <span className="detail_Value">
                    {movie.limit || "Empty"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single_bottom">
          <h1 className="single_bottom_title">Last Access</h1>
          <Table />
        </div>
      </div>
    </div>
  );

  // return (
  //     <div className="product">
  //     <div className="productTitleContainer">
  //         <h1 className="productTitle">Movie</h1>
  //         <Link to="/newproduct">
  //             <button className="productAddBtn">Create</button>
  //         </Link>
  //         <button className="productBtn" onClick={handleSubmit}>Update</button>
  //     </div>
  //     <div className="productTop">
  //         {/* views performance */}
  //         <div className="productTopLeft">
  //             <Chart data={productData} dataKey="Sales" title="Views Performance"/>
  //         </div>

  //         <div className="productTopRight">
  //             <div className="productInfoTop">
  //                 <img className="productInfoImg" src={movie.img} alt={movie.title} />
  //                 <span className="productName">{movie.title}</span>
  //             </div>
  //             <div className="productInfoBottom">
  //                 <div className="productInfoItem">
  //                     <span className="productInfoKey">Id:</span>
  //                     <span className="productInfoValue">{movie._id}</span>
  //                 </div>
  //                 <div className="product-infoItem">
  //                     <span className="productInfoKey">Genres:</span>
  //                     <span className="productInfoValue">{movie.genre}</span>
  //                 </div>
  //                 <div className="product-infoItem">
  //                     <span className="productInfoKey">Year:</span>
  //                     <span className="productInfoValue">{movie.year}</span>
  //                 </div>
  //                 <div className="product-infoItem">
  //                     <span className="productInfoKey">Limit:</span>
  //                     <span className="productInfoValue">+{movie.limit}</span>
  //                 </div>
  //                 <div className="product-infoItem">
  //                     <span className="productInfoKey">Duration:</span>
  //                     <span className="productInfoValue">{movie.duration}</span>
  //                 </div>
  //             </div>
  //         </div>
  //     </div>
  //     <div className="productBottom">
  //         <form className="productForm">
  //             <div className="productFormLeft">
  //                 <label>Movie Title</label>
  //                 <input className="form-input" type="text" placeholder={movie.title} name="title" onChange={handleChange}/>
  //                 <label>Description</label>
  //                 <input className="form-input" type="text" placeholder={movie.description} name="description" onChange={handleChange}/>
  //                 <label>Year</label>
  //                 <input className="form-input" type="text" placeholder={movie.year} name="year" onChange={handleChange}/>
  //                 <label>Genre</label>
  //                 <input className="form-input" type="text" placeholder={movie.genre} name="genre" onChange={handleChange}/>
  //                 <label>Limit</label>
  //                 <input className="form-input" type="text" placeholder={movie.limit} name="limit" onChange={handleChange}/>
  //                 <label>Duration</label>
  //                 <input className="form-input" type="text" placeholder={movie.duration} name="duration" onChange={handleChange}/>
  //                 <label>Series</label>
  //                 <select className="form-select" name="isSeries" id="isSeries" onChange={handleChange} >
  //                     {/* <option value="false">No</option>
  //                     <option value="true">Yes</option> */}
  //                     {movie.isSeries === true ?
  //                     <>
  //                         <option value={true}>Yes</option>
  //                         <option value={false}>No</option>
  //                     </>
  //                     :
  //                     <>
  //                         <option value={false}>No</option>
  //                         <option value={true}>Yes</option>
  //                     </>}
  //                 </select>
  //                 <label>Trailer</label>
  //                 <input className="form-input" type="text" placeholder={movie.trailer} name="trailer" onChange={handleChange}/>
  //                 <label>Video</label>
  //                 <input className="form-input" type="text" placeholder={movie.video} name="video" onChange={handleChange}/>
  //             </div>
  //             <div className="product-img-container">
  //                 <div className="product-imgs">
  //                     <span className="product-img-title">Cover image</span>
  //                     <img src={movie.img} alt="" className="product-img" />
  //                     <input className="product-img-input" type="text" id="img" name="img" placeholder={movie.img} onChange={handleChange} />
  //                 </div>
  //                 <div className="product-imgs">
  //                     <span className="product-img-title">Cover text</span>
  //                     <img src={movie.imgTitle} alt="" className="product-img" />
  //                     <input className="product-img-input" type="text" id="imgTitle" name="imgTitle" placeholder={movie.imgTitle} onChange={handleChange} />
  //                 </div>
  //                 <div className="product-imgs">
  //                     <span className="product-img-title">Thumbnail</span>
  //                     <img src={movie.thumbnail} alt="" className="product-img" />
  //                     <input className="product-img-input" type="text" id="thumbnail" name="thumbnail" placeholder={movie.thumbnail} onChange={handleChange} />
  //                 </div>
  //             </div>
  //         </form>
  //     </div>
  //     </div>
  // );
}
