import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <ul>
      <li>
        <h3>Welcome, {user.name}</h3>
      </li>
      <li>
        <button onClick={() => dispatch(logoutThunk())}>Logout</button>
      </li>
    </ul>
  );
};

export default UserMenu;
