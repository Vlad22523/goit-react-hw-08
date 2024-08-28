import { useDispatch } from "react-redux";
import { fetchDeleteThunk } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  console.log(name);

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
