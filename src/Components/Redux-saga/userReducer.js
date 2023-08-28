// import { userData } from "./action";

// const intialValues = {
//     users: [],
//     isLoading: true,
//     error: ""
// }

// const userReducer = (state=intialValues,action) => {

//     switch (action.type) {
//         case userData:

//           return {...state, users: action.payload, isLoading: false}

//         default:
//             break;
//     }

// }

// export default userReducer;

/// chat gpt code

const initialValues = {
  users: [],
  isLoading: true,
  error: null,
};

const userReducer = (state = initialValues, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        error: null,
        isLoading: false,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case "GET_USER_FAILURE":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
