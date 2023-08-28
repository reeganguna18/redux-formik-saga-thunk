import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './Components/login/SignIn';
import Signup from './Components/register/Signup';
import CounterApp from './Components/Counter/CounterApp';
import UserList from './Components/user/UserList';
import Datalist from './Components/Redux-saga-two/Datalist';
import UserListThunk from './Components/Redux-thunk/UserListThunk';


function App() {
  return <div>
   {/* <SignIn /> */}
   {/* <Signup /> */}
   {/* <CounterApp /> */}
   {/* <UserList />
   <Datalist /> */}

   <UserListThunk />

  </div>;
}

export default App;
