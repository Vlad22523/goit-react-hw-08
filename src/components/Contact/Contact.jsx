import { useDispatch } from "react-redux";
import { fetchDeleteThunk } from "../../redux/contacts/operations";
import s from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  console.log(name);

  const dispatch = useDispatch();
  return (
    <li className={s.contactItem}>
      <div className={s.contactInfo}>
        <p className={s.contactName}>{name}</p>
        <p className={s.contactNumber}>{number}</p>
      </div>
      <button
        className={s.deleteButton}
        onClick={() => dispatch(fetchDeleteThunk(id))}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
