import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import UserList from "./pages/userList/UserList";
import MovieList from "./pages/movieList/MovieList";
import Single from "./pages/single/Single";
import User from "./pages/user/User";
import New from "./pages/new/New";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './components/style/dark.scss';

function App() {
  const MONTH = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="user">
              <Route index element={<UserList />} />
              <Route path=":userId" element={<User />} />
              {/* <Route path="new" element={<New />} /> */}
            </Route>
            <Route path="movie">
              <Route index element={<MovieList />} />
              {/* <Route path=":productId" element = {<Single />} /> */}
              {/* <Route path="new" element={<New />} /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
