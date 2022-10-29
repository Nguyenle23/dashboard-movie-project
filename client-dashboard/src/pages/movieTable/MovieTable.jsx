import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";

// import "./movieTable.scss";
import { fetchMovies } from "../../actions";

export default function MovieTable() {
  const [movie, setMovie] = useState([]);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 200,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      renderCell: (params) => {
        return <div className="productListItem">{params.row.id}</div>;
      },
    },
    {
      field: "title",
      headerName: "Movie",
      width: 220,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "genre",
      headerName: "Genre",
      width: 226,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "year",
      headerName: "Year",
      width: 102,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "limit",
      headerName: "Limit",
      width: 108,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "duration",
      headerName: "Duration",
      width: 130,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "isSeries",
      headerName: "Is Series",
      width: 125,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      renderCell: (params) => {
        return (
          <>
            {params.row.isSeries ? (
              <span className="productStatus active">True</span>
            ) : (
              <span className="productStatus inactive">False</span>
            )}
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 105,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/movie/" + params.row.id }}
              state={{ movie: params.row }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    const getMovies = async () => {
      fetchMovies().then((response) => {
        setMovie(response.data);
      });
    };
    getMovies();
  }, []);

  function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
    return (
      <Pagination
        color="secondary"
        count={pageCount}
        page={page + 1}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
    );
  }

  return (
    <div className="datatable">
      <div className="datatable_add">
        <Link
          to="/movie/createMovie"
          style={{ textDecoration: "none" }}
          className="datatable_addnew"
        >
          New movie
        </Link>
      </div>
      <div style={{ height: "75vh", width: "100%" }}>
        <DataGrid
          rows={movie.map((item, index) => {
            return {
              id: index,
              title: item.title,
              genre: item.genre,
              year: item.year,
              limit: item.limit,
              duration: item.duration,
              isSeries: item.series,
            };
          })}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[12]}
          pagination
          components={{
            Pagination: CustomPagination,
          }}
          sx={{
            fontSize: "15px",
            bgcolor: "#baffc9",
            border: "3px solid #333",
            "& .super-app-theme--header": {
              color: "#000",
              fontWeight: "600",
              borderRight: " solid #333",
              borderBottom: " solid #333",
            },
            "& .super-app-theme--cell": {
              color: "#000",
              backgroundColor: "rgba(224, 183, 60, 0.55)",
              fontWeight: "600",
              borderRight: " solid #333",
              borderBottom: " solid #333",
            },
          }}
        />
      </div>
    </div>
  );
}
