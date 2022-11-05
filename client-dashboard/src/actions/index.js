import axios from 'axios';

//--------------home-----------------

//get statistics table
export const getStat = async() => {
    const request = await axios.get(`http://localhost:5555/user/stats`)
    return request;
}

//get all new register users
export const getUser = async() => {
    const request = await axios.get(`http://localhost:5555/user?new=true`)
    return request;
}

//get all new transaction users
export const getTransaction = async() => {
    const request = await axios.get(`http://localhost:5555/user/transaction`)
    return request;
}

//check login
export const checkLogin = async(user) => {
    const request = await axios.post(`http://localhost:5555/auth/login`, user);
    return request;
}

//-----------------movie------------

//fetch all movies
export const fetchMovies = async() => {
    const request = await axios.get("http://localhost:8080/movies")
    return request;
}

//create movie
export const createNewMovie = async(data) => {
    const response = await axios.post("http://localhost:8080/movie", data);
    return response;
}

//update movie
export const upgradeMovie = async(id, data) => {
    const response = await axios.put(`http://localhost:8080/movie/update/${id}`, data)
    return response;
}

//delete solfly movie
export const removeMovie = async(id) => {
    const response = await axios.delete(`http://localhost:8080/movie/${id}`);
    return response;
}

//-----------list-----------------

//fetch all lists
export const fetchList = async() => {
    const request = await axios.get(`http://localhost:5555/list/`);
    return request;
}

//create list
export const uploadList = async(movie) => {
    const request = await axios.post(`http://localhost:5555/list/`, movie)
    return request;
}

//update list
export const upgradeList = async(id, data) => {
    const request = await axios.put(`http://localhost:5555/list/${id}`, data)
    return request;
}

//delete solfly list
export const removeList = async(id) => {
    const request = await axios.delete(`http://localhost:5555/list/${id}`);
    return request;
}

//-------------user-------------

//get all user
export const fetchAllUser = async() => {
    const response = await axios.get("http://localhost:8080/users");
    return response;
}

//create user
export const createNewUser = async(data) => {
    const response = await axios.post("http://localhost:8080/user", data);
    return response;
}

//update user
export const upgradeUser = async(id, data) => {
    const response = await axios.put(`http://localhost:8080/user/update/${id}`, data)
    return response;
}

//delete user
export const removeUser = async(id) => {
    const response = await axios.delete(`http://localhost:8080/user/${id}`);
    return response;
}