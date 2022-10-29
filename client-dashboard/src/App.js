import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import MovieList from "./pages/movieList/MovieList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import NewMovie from "./pages/newMovie/NewMovie";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// import './components/style/dark.scss';
import Movie from "./pages/movie/Movie";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {/* <Route path="login" element={<Login />} /> */}
            <Route path="user">
              <Route index element={<UserList />} />
              <Route path=":userId" element={<User />} />
              <Route path="createUser" element={<NewUser />} />
            </Route>
            <Route path="movie">
              <Route index element={<MovieList />} />
              <Route path=":movieId" element = {<Movie />} />
              <Route path="createMovie" element={<NewMovie />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
