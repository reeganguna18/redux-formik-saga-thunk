import axios from "axios";

export const getUserData = () => ({
  type: "GET_USER",
});
export const getUserDataSuccess = (data) => ({
  type: "GET_USER_SUCCESS",
  payload: data
});
export const getUserDataFailure = (error) => ({
  type: "GET_USER_FAILURE",
  payload: error
});

export const fetchSomeData = () => {
  return (dispatch) => {
    dispatch(getUserData());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        dispatch(getUserDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getUserDataFailure(error.essage));
      });
  };
};
