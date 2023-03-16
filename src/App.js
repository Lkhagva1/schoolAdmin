import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Cookies from "js-cookie";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Auth/Login";
import { useContext } from "react";
import UserContext from "./context/UserContext";
import AuthContext from "./hooks/UseAuth";
import Students from "./pages/Students/Students";
import StudentAdd from "./pages/Students/StudentAdd";
import Calendar from "./pages/Calendar/Calendar";
import Teacher from "./pages/Teacher/Teacher";
import TeacherAdd from "./pages/Teacher/TeacherAdd";
function App() {
  const token = Cookies.get("token");
  const isLog = Cookies.get("isLoggedIn");
  const user = useContext(AuthContext);
  return (
    <Router>
      {!token ? (
        <Main>
          <Switch>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/students">
              <Students />
            </Route>
            <Route exact path="/students/add">
              <StudentAdd />
            </Route>
            <Route exact path="/teachers">
              <Teacher />
            </Route>
            <Route exact path="/teachers/add">
              <TeacherAdd />
            </Route>
            <Route exact path="/calendar">
              <Calendar />
            </Route>
            <Redirect to="/dashboard" />
          </Switch>
        </Main>
      ) : (
        <Auth>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Redirect to="/login" />
          </Switch>
        </Auth>
      )}
    </Router>
  );
}

export default App;
