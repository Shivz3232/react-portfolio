import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Post from './components/Post'
import Posts from './components/Posts'
import Project from './components/Project'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Post} path="/posts/:slug" />
        <Route component={Posts} path="/posts" />
        <Route component={Project} path="/project" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
