import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SecondPage from './Pages/SecondPage';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Switch>
          <Route path="/secondPage">
            <SecondPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
