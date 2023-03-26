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
import AuthContext from "./hooks/UseAuth";
import Students from "./pages/Students/Students";
import StudentAdd from "./pages/Students/StudentAdd";
import Calendar from "./pages/Calendar/Calendar";
import Teacher from "./pages/Teacher/Teacher";
import TeacherAdd from "./pages/Teacher/TeacherAdd";
import Club from "./pages/club/Club";
import ClubAdd from "./pages/club/ClubAdd";
import Complain from "./pages/Complain/Complain";
import Notice from "./pages/notice/Notice";
import NoticeAdd from "./pages/notice/NoticeAdd";
import Subject from "./pages/Subject/Subject";
function App() {
  const token = Cookies.get("jwt");
  const isLog = Cookies.get("isLoggedIn");
  return (
    <Router>
      {isLog && token ? (
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
            <Route exact path="/club">
              <Club />
            </Route>
            <Route exact path="/club/add">
              <ClubAdd />
            </Route>
            <Route exact path="/complain">
              <Complain />
            </Route>
            <Route exact path="/notice">
              <Notice />
            </Route>
            <Route exact path="/notice/add">
              <NoticeAdd />
            </Route>
            <Route exact path="/subject">
              <Subject />
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
