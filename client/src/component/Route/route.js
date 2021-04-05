import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from "../Admin/Login/Login";
import Home from "../Home/home";
import { Register } from "../Register/register";
import AppFaq from "../Faq/faq";
import Parking from "../Parking/parking";
import {AdminArtist} from "../Admin/Artist/Artist";
import {AdminBillet} from "../Admin/Billet/Billet";
import {AdminConcert} from "../Admin/Concert/Concert";
import {AdminLocation} from "../Admin/Location/Location";
import {AdminRestaurant} from "../Admin/Restaurant/Restaurant";

const Routing = () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/faq">
                <AppFaq />
            </Route>
            <Route exact path="/parking">
                <Parking />
            </Route>
            <Route exact path="/admin/login">
                <Login />
            </Route>
            <Route exact path="/register">
                <Register />
            </Route>
            <Route exact path="/admin/artist">
                <AdminArtist />
            </Route>
            <Route exact path="/admin/billet">
                <AdminBillet />
            </Route>
            <Route exact path="/admin/concert">
                <AdminConcert />
            </Route>
            <Route exact path="/admin/location">
                <AdminLocation />
            </Route>
            <Route exact path="/admin/restaurant">
                <AdminRestaurant />
            </Route>
    </Switch>
    )
}

export default Routing;