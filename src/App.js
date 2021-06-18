import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllProjects from "./Components/AllProjects";
import ProductDetails from "./Components/ProductDetails";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/allProjects">All Projects</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/allProjects">
              <AllProjects></AllProjects>
            </Route>
            <Route path="/productDetails/:para">
              <ProductDetails></ProductDetails>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
