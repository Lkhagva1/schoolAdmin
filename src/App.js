import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Cookies from "js-cookie";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";
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
import Login from "./pages/Auth/Login";
// import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { onAuthStateChanged } from "firebase/auth";
import Sign from "./pages/chat/Sign";
import Chat from "./pages/chat/Chat";
import { auth, db } from "./firebase";
import { User } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { collection, onSnapshot } from "@firebase/firestore";
function App() {
  const token = Cookies.get("jwt");
  const isLog = Cookies.get("isLoggedIn");
  const [user, setUser] = useState(false);
  // const [user, loading, error] = useAuthState(auth);
  // const { user } = useContext(AuthProvider);
  // console.log("log", isLog, token);
  // window.location.reload(false);
  // const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState({});
  // const history = useHistory();
  useEffect(() => {
    const un = onAuthStateChanged(auth, (data) => {
      setUser(data);
      // setLoading(false);
      // history.push("/chats");
    });
    onSnapshot(collection(db, "Messages"), (snap) => {
      console.log(
        "ewwwwwwww",
        snap.docs.map((item) => {
          const id = item.id;
          return { id, ...item.data() };
        })
      );
    });
    return () => {
      un();
    };
  });
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
            <Route path="/students/add">
              <StudentAdd />
            </Route>
            <Route exact path="/teachers">
              <Teacher />
            </Route>
            <Route path="/teachers/add">
              <TeacherAdd />
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
            <Route exact path="/chat">
              {user ? <Route path="/chat" component={Chat} /> : <Sign />}
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
/* <Main>
<Switch>
  <Route exact path="/dashboard">
    <Dashboard />
  </Route>
  <Route exact path="/students">
    <Students />
  </Route>
  <Route path="/students/add">
    <StudentAdd />
  </Route>
  <Route exact path="/teachers">
    <Teacher />
  </Route>
  <Route path="/teachers/add">
    <TeacherAdd />
  </Route>
  <Route exact path="/club">
    <Club />
  </Route>
  <Route path="/club/add">
    <ClubAdd />
  </Route>
  <Route exact path="/complain">
    <Complain />
  </Route>
  <Route exact path="/notice">
    <Notice />
  </Route>
  <Route path="/notice/add">
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
</Main> */
