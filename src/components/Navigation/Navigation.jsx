import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectLoggedIn } from "../../redux/auth/selectors";
import s from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectLoggedIn);

  const activeLink = ({ isActive }) => {
    return isActive ? `${s.navLink} ${s.activeLink}` : s.navLink;
  };

  return (
    <ul>
      <li>
        <NavLink className={activeLink} to="/">
          Home
        </NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink className={activeLink} to="/contacts">
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
