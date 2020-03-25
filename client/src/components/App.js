import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Home from "./pages/Home.js";
import Staff from "./pages/Staff.js";
import TourneyHome from "./pages/TourneyHome";
import TourneyStaff from "./pages/TourneyStaff";
import Rules from "./pages/Rules";
import Mappools from "./pages/Mappools";
import Players from "./pages/Players";
import Schedule from "./pages/Schedule";
import Navbar from "./modules/Navbar";

import "../utilities.css";

import { Layout } from "antd";
import "antd/dist/antd.css";
const { Footer } = Layout;

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Layout>
          <Navbar />
          <Router>
            <Home path="/" />
            <Staff path="/staff" />
            <TourneyHome path="/:tourney/home" />
            <TourneyStaff path="/:tourney/staff" />
            <Rules path="/:tourney/rules" />
            <Mappools path="/:tourney/pools" />
            <Players path="/:tourney/players" />
            <Schedule path="/:tourney/schedule" />
            <NotFound default />
          </Router>
          <Footer></Footer>
        </Layout>
      </>
    );
  }
}

export default App;
