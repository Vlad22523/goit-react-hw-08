import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { selectIsError, selectIsLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContactsThunk } from "../../redux/contacts/operations";

const ContactsPage = () => {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <>
      <h1
        style={{
          fontSize: "2.5em",
          color: "#333",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Phonebook
      </h1>
      <ContactForm />
      <SearchBox />
      {loading && <h1 style={{ textAlign: "center" }}>Loading...</h1>}
      {error && <h1 style={{ textAlign: "center" }}>Something wrong!</h1>}
      <ContactList />
    </>
  );
};

export default ContactsPage;
