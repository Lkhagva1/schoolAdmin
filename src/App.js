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
function App() {
  const accessToken = Cookies.get("accessToken");
  const isLog = Cookies.get("isLoggedIn");
  const user = useContext(AuthContext);
  return (
    <Router>
      {user ? (
        <Main>
          <Switch>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/branch">
              <Dashboard />
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
