import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Login from "../Admin/Login/Login";
import Home from "../Home/home";

const Routing = () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/admin/login">
                <Login />
            </Route>
      </Switch>
    )
}

export default Routing;