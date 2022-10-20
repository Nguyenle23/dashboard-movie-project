import "./datatable.scss";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

function Datatable() {
  const userRows = [
    {
      id: 1,
      username: "John",
      email: "ted1804@gmail.com",
      age: "25",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      status: "active",
    },
    {
      id: 2,
      username: "Jane",
      email: "dsad@gmail.com",
      age: "25",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      status: "inactive",
    },
    {
      id: 3,
      username: "Jack",
      email: "ted1804@gmail.com",
      age: "25",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      status: "pending",
    },
    {
      id: 4,
      username: "Jill",
      email: "ted1804@gmail.com",
      age: "30",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      status: "active",
    },
    {
      id: 5,
      username: "John",
      email: "ted1804@gmail.com",
      age: "35",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      status: "active",
    },
    {
      id: 6,
      username: "Jane",
      email: "ted1804@gmail.com",
      age: "45",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      status: "active",
    },
    {
      id: 7,
      username: "John",
      email: "ted1804@gmail.com",
      age: "25",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      status: "active",
    },
    {
      id: 8,
      username: "Jane",
      email: "dsad@gmail.com",
      age: "25",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      status: "inactive",
    },
    {
      id: 9,
      username: "Jack",
      email: "ted1804@gmail.com",
      age: "25",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      status: "pending",
    },
    {
      id: 10,
      username: "Jill",
      email: "ted1804@gmail.com",
      age: "30",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      status: "active",
    },
    {
      id: 15,
      username: "John",
      email: "ted1804@gmail.com",
      age: "35",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      status: "active",
    },
    {
      id: 16,
      username: "Jane",
      email: "ted1804@gmail.com",
      age: "45",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      status: "active",
    },
    {
      id: 16,
      username: "Jane",
      email: "ted1804@gmail.com",
      age: "45",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      status: "active",
    },
    {
      id: 16,
      username: "Jane",
      email: "ted1804@gmail.com",
      age: "45",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      status: "active",
    },
    {
      id: 16,
      username: "Jane",
      email: "ted1804@gmail.com",
      age: "45",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      status: "active",
    },
    {
      id: 16,
      username: "Jane",
      email: "ted1804@gmail.com",
      age: "45",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      status: "active",
    },
  ];
  const userColumns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "User",
      headerName: "User",
      width: 200,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img
              className="cellWithImg_img"
              src={params.row.avatar}
              alt="avatar"
            />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "age",
      headerName: "Age",
      width: 100,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "status",
      headerName: "Status",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      width: 150,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 300,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/user/test" style={{ textDecoration: "none" }}>
              <div className="cellAction_view">View</div>
            </Link>
            <div className="cellAction_delete">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatable_add">
        <Link
          to="/user/new"
          style={{ textDecoration: "none" }}
          className="datatable_addnew"
        >
          ADD NEW USER
        </Link>
      </div>
      <div style={{ height: "80vh", width: "100%" }}>
        <DataGrid
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          pageSize={12}
          rowsPerPageOptions={[12]}
          pagination
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

export default Datatable;
