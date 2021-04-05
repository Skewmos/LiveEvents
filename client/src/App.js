import React from "react"
import {
  BrowserRouter as Router
} from "react-router-dom";
import Routing from "./component/Route/route";
import Nav from "./component/Nav/nav";
import Banner from "./component/BannerInformation/bannerInformation";
import background from './images/bg1.svg';
import background2 from './images/bg.svg';
import Footer from './component/Footer/footer';
import './App.scss';
import './component/utilities.scss';

import Axios from "axios";

function App() {
  Axios({
    method: "GET",
    url: "http://localhost:8000/api",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data);
  });

  let backgroundImg;

if (window.location.pathname === '/' || window.location.pathname === '/home' ) {
    backgroundImg = background;
} else {
  backgroundImg = background2;
}


  return (
      <Router>
          <div className="container-fluid p-0">
              <Banner/>
              <div className="app" style={{ backgroundImage: `url(${backgroundImg})`  }}>
                  <Nav />
                  <Routing/>
                  <Footer/>
              </div>
          </div>
      </Router>
  );
}

export default App;
