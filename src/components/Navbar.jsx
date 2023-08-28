import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-options">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "navbar-pending"
              : isActive
              ? "navbar-active"
              : "navbar-pending"
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/schedule"
          className={({ isActive, isPending }) =>
            isPending
              ? "navbar-pending"
              : isActive
              ? "navbar-active"
              : "navbar-pending"
          }
        >
          SCHEDULE
        </NavLink>
        <NavLink
          to="/calendar"
          className={({ isActive, isPending }) =>
            isPending
              ? "navbar-pending"
              : isActive
              ? "navbar-active"
              : "navbar-pending"
          }
        >
          CALENDAR
        </NavLink>
        <NavLink
          to="/leaderboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "navbar-pending"
              : isActive
              ? "navbar-active"
              : "navbar-pending"
          }
        >
          LEADERBOARD
        </NavLink>
        <NavLink
          to="/sponsors"
          className={({ isActive, isPending }) =>
            isPending
              ? "navbar-pending"
              : isActive
              ? "navbar-active"
              : "navbar-pending"
          }
        >
          SPONSORS
        </NavLink>
        <NavLink
          to="/team"
          className={({ isActive, isPending }) =>
            isPending
              ? "navbar-pending"
              : isActive
              ? "navbar-active"
              : "navbar-pending"
          }
        >
          TEAM
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
