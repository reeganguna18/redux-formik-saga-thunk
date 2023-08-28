export const getData = () => ({
    type: "GET_DATA",
});

export const getDataSuccess = (data) => ({
    type: "GET_DATA_SUCCESS",
    payload: data,
});

export const getDataFailure = (error) => ({
    type: "GET_DATA_FAILURE",
    payload: error,
});