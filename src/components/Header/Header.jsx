import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import s from "./Header.module.css";
import { selectLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";

const Header = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <nav className={s.nav}>
          <Navigation />
          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </nav>
      </header>
    </div>
  );
};

export default Header;
