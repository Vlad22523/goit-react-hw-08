import { useId } from "react";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { findContacts } from "../../redux/filters/filtersSlice";
import { selectFilters } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);
  const id = useId();
  return (
    <div className={s.searchBox}>
      <label className={s.label} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        name="findconts"
        value={filter}
        id={id}
        onChange={(e) => dispatch(findContacts(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
