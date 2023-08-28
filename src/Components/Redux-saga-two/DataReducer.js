const initialValues = {
  datas: [],
  loading: false,
  error: null,
};

const dataReducer = (state = initialValues, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, loading: true, error: null };

    case "GET_DATA_SUCCESS":
      return { ...state, loading: false, datas: action.payload };

    case "GET_DATA_FAILURE":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default dataReducer;
