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
function App() {
  const accessToken = Cookies.get("accessToken");
  const isLog = Cookies.get("isLoggedIn");
  return (
    <Router>
      {isLog && accessToken ? (
        <Main>
          <Switch>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/dashboard/test">
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
