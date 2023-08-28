import axios from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { getUserDataFailure, getUserDataSuccess } from "./action";
import { getDataFailure, getDataSuccess } from "../Redux-saga-two/action";

function* fetchUserData() {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/posts"
    );
    yield put(getUserDataSuccess(response.data));
  } catch (error) {
    yield put(getUserDataFailure(error));
  }
}

function* fetchData() {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log("reegan", response);
    yield put(getDataSuccess(response.data));
  } catch (error) {
    yield put(getDataFailure(error));
  }
}

function* watchFetchUserData() {
  yield takeEvery("GET_USER", fetchUserData);
}
function* watchFetchData() {
  yield takeEvery("GET_DATA", fetchData);
}

export default function* rootSaga() {
  yield all([watchFetchUserData(), watchFetchData()]);
}
