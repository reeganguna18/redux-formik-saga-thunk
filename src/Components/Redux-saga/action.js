export const getUserData = () => ({
    type: "GET_USER",
});

export const getUserDataSuccess = (data) => ({
    type: "GET_USER_SUCCESS",
    payload: data,
});

export const getUserDataFailure = (error) => ({
    type: "GET_USER_FAILURE",
    payload: error,
});

// export const fetchUser =() => ({
//     type: "FETCH_USERS"
// })
// export const fetchUserSuccess =(users) => ({
//     type: "FETCH_USER_SUCCESS",
//     payload: users
// })
// export const fetchUserFailure =(error) => ({
//     type: "FETCH_USER_FAILURE",
//     payload: error
// })