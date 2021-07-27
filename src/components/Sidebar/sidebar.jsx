import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  PermIdentity,
  Storefront,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Sidebar() {
  let history = useHistory();

  function handleLogOut() {
    sessionStorage.setItem("userToken", '');
    sessionStorage.clear();
    history.push("/"); 
  }
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/Topbar" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/about" className="link">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              About
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Add images
              </li>
            </Link>
          </ul>
        </div>
        <button type="button" onClick={handleLogOut}>
           LOGOUT
        </button>
      </div>
    </div>
  );
}