import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
 /* Link */
} from 'react-router-dom'
import Watchlist from './components/watchlist/Watchlist';
import Login from './components/login/Login';
import VideoDetails from './components/videoDetails/VideoDetails';
function App() {
  return (
    <div className="App">

      <Router>
        <Header />

        <Switch>

          <Route path= "/login">
            <Login />
          </Route>
          <Route path= "/details/:id">
            <VideoDetails />
          </Route>
          <Route path="/watchlist">
            <Watchlist />
          </Route>

          <Route path="/">
            <Home />
          </Route>

          
          
        </Switch>
      </Router>
     
      
    </div>
  );
}

export default App;
