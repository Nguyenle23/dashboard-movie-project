import "./table.scss";
import * as React from "react";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import Pagination from '@mui/material/Pagination';

function Table() {
  const [pageSize, setPageSize] = React.useState(5);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 130,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 160,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 160,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 130,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "method",
      headerName: "Method",
      description: "This column has a value getter and is not sortable.",
      width: 160,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
    },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      method: "Visa",
      status: "Active",
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 45,
      method: "Mastercard",
      status: "Active",
    },
    {
      id: 3,
      lastName: "Stark",
      firstName: "Robb",
      age: 18,
      method: "Visa",
      status: "Active",
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Sansa",
      age: 18,
      method: "Visa",
      status: "Active",
    },
    {
      id: 5,
      lastName: "Stark",
      firstName: "Arya",
      age: 18,
      method: "Visa",
      status: "Active",
    },
    {
      id: 6,
      lastName: "Stark",
      firstName: "Bran",
      age: 18,
      method: "Visa",
      status: "Active",
    },
    {
      id: 7,
      lastName: "Stark",
      firstName: "Rickon",
      age: 18,
      method: "Visa",
      status: "Active",
    },
    {
      id: 8,
      lastName: "Stark",
      firstName: "Joffrey",
      age: 18,
      method: "Visa",
      status: "Active",
    },
    {
      id: 9,
      lastName: "Stark",
      firstName: "Tyrion",
      age: 18,
      method: "Visa",
      status: "Active",
    },
    {
      id: 10,
      lastName: "Stark",
      firstName: "Sandor",
      age: 18,
      method: "Visa",
      status: "Active",
    },
    {
      id: 11,
      lastName: "Stark",
      firstName: "Eddard",
      age: 18,
      method: "Visa",
      status: "Active",
    },
  ];

  function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
      <Pagination
        color= "secondary"
        count={pageCount}
        page={page + 1}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
    );
  }

  return (
    <div className="table" style={ {fontFamily:"Segoe UI"} }>
      <div style={{ height: "70vh", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          // rowsPerPageOptions={[8, 16, 24]}
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

export default Table;
