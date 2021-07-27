import Login from './components/Login'
import Sidebar from "./components/Sidebar/sidebar";
import Topbar from "./components/Topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
            <Route exact path="/" component={Login} />
         <div>
            <Route path='/Topbar' component={Topbar} />    
            <div className="container">
              <Sidebar />
              < Home />
            </div>
         </div>
      </Switch> 
    </Router>
  );
}

export default App;
