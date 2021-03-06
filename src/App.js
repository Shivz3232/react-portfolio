import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Blogs from "./components/Blogs";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Certificates from "./components/Certificates"
import  Resume  from "./components/Resume";
import OnlyFans from "./components/OnlyFans";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Blog} path="/blogs/:slug" />
        <Route component={Blogs} path="/blogs" />
        <Route component={Project} path="/project" />
        <Route component={Certificates} path="/certificates" />
        <Route component={Resume} path="/resume" />
        <Route component={OnlyFans} path="/OnlyFans" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
