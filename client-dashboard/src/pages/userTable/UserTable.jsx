// import "./userTable.scss";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import Pagination from "@mui/material/Pagination";

import { UserContext } from "../../context/userContext/UserContext";
import { getUsers, deleteUsers } from "../../context/userContext/apiCall";

export default function UserTable() {
  const { users, dispatch } = useContext(UserContext);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteUsers(id, dispatch);
    window.location.href = "/user";
  };

  const column = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img
              className="cellWithImg_img"
              src={
                params.row.avatar ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt="avatar"
            />
            {params.row.fullName || "Empty"}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 220,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "phonenumber",
      headerName: "Phone Number",
      width: 200,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      renderCell: (params) => {
        return (
          <div className="cellWithImg">{params.row.phoneNumber || "Empty"}</div>
        );
      },
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 120,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "destroy",
      headerName: "Is Destroy",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            {params.row.destroy ? (
              <span className="productStatus active">True</span>
            ) : (
              <span className="productStatus inactive">False</span>
            )}
          </>
        );
      },
    },
    {
      field: "admin",
      headerName: "Is Admin",
      width: 100,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      renderCell: (params) => {
        return (
          <>
            {params.row.admin ? (
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
      width: 150,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={{ pathname: "/user/" + params.row.id}} 
              state={{ users: params.row }}
              style={{ textDecoration: "none" }}
            >
              <div className="cellAction_view">View</div>
            </Link>
            <p
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </p>
          </div>
        );
      },
    },
  ];

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
          to="/user/createUser"
          style={{ textDecoration: "none" }}
          className="datatable_addnew"
        >
          New user
        </Link>
      </div>
      <div style={{ height: "75vh", width: "100%" }}>
        <DataGrid
          rows={users.map((user) => {
            return {
              id: user._id,
              email: user.email,
              fullName: user.fullName,
              gender: user.gender,
              avatar: user.avatar,
              location: user.location,
              phoneNumber: user.phoneNumber,
              destroy: user.destroy,
              admin: user.admin,
            };
          })}
          columns={column}
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
