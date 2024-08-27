import { useDispatch } from "react-redux";
import { fetchDeleteThunk } from "../../redux/contactsOps";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => dispatch(fetchDeleteThunk(id))} type="button">
        Delete
      </button>
    </li>
  );
};

export default Contact;
