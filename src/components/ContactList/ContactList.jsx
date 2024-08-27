import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredCont } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredCont = useSelector(selectFilteredCont);
  return (
    <>
      <ul className={s.list}>
        {filteredCont.map(({ id, name, number }) => (
          <Contact name={name} number={number} key={id} id={id} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
