import "./userList.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import UserTable from "../userTable/UserTable";

export default function UserList() {
  return (
    <div className="list">
      <Sidebar />
      <div className="list_container">
        <Navbar />
        <div className="list_content">
          <UserTable />
        </div>
      </div>
    </div>
  );
};

