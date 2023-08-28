const initialValues = {
    user: [],
    loading: false,
    error: null,
  };
  
  const Reducer = (state = initialValues, action) => {
    switch (action.type) {
      case "GET_USER":
        return { ...state, loading: true, error: null };
  
      case "GET_USER_SUCCESS":
        return { ...state, loading: false, user: action.payload };
  
      case "GET_USER_FAILURE":
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default Reducer;
  