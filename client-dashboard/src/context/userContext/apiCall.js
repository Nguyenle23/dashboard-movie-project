import {
    updateUserFailure,
    updateUserSuccess,
    updateUserStart,
    deleteUserFailure,
    deleteUserSuccess,
    deleteUserStart,
    getUserFailure,
    getUserSuccess,
    getUserStart
} from "./UserAction";
import { fetchAllUser, upgradeUser, removeUser } from '../../actions/index'

//get all users registered
export const getUsers = async(dispatch) => {
    dispatch(getUserStart());
    try {
        fetchAllUser().then((res) => {
            dispatch(getUserSuccess(res.data));
        })
    } catch (err) {
        dispatch(getUserFailure());
    }
};

//update user
export const updateUser = async(id, user, dispatch) => {
    dispatch(updateUserStart());
    try {
        upgradeUser(id, user).then((res) => {
            dispatch(updateUserSuccess(res.data))
        })
    } catch (err) {
        dispatch(updateUserFailure());
    }
};

//delete user
export const deleteUsers = async(id, dispatch) => {
    dispatch(deleteUserStart());
    try {
        await removeUser(id);
        dispatch(deleteUserSuccess(id));
    } catch (err) {
        dispatch(deleteUserFailure());
    }
};