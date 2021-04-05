import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from "../Admin/Login/Login";
import Home from "../Home/home";
import { Register } from "../Register/register";
import AppFaq from "../Faq/faq";

const Routing = () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/faq">
                <AppFaq />
            </Route>
            <Route exact path="/admin/login">
                <Login />
            </Route>
            <Route exact path="/register">
                <Register />
            </Route>
    </Switch>
    )
}

export default Routing;