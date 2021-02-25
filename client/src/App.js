import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Routing from "./component/Route/route";
import Nav from "./component/Nav/nav";
import Banner from "./component/BannerInformation/bannerInformation";
import background from './images/background.svg';
import Footer from './component/Footer/footer';
import './App.scss';
import './component/utilities.scss';

import Axios from "axios";

function App() {
  Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });

  return (
   <Router>
     <Switch>
        <Route exact path="/">
          <Banner/>
        </Route>
     </Switch>
      <div className="app" style={{ backgroundImage: `url(${background})` }}>
        <Nav />
       <Routing/>
       <Footer />
      </div>
      
   </Router>
  );
}

export default App;
