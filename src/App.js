import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header></Header> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          {/* <Route path="/products">
            <Products />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
