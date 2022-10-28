import "./movieList.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import MovieTable from "../movieTable/MovieTable";

export default function MovieList() {
  return (
    <div className="list">
      <Sidebar />
      <div className="list_container">
        <Navbar />
        <div className="list_content">
          <MovieTable />
        </div>
      </div>
    </div>
  );
};

