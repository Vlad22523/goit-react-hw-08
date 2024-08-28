import { ErrorMessage, Field, Form, Formik } from "formik";
import "nanoid";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { fetchAddThunk } from "../../redux/contacts/operations.js";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      fetchAddThunk({
        name: values.name,
        number: values.number,
      })
    );

    resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "not enough characters")
      .max(50, "too many characters")
      .required("required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Number must be in the format ###-##-##")
      .required("Required"),
  });

  return (
    <Formik
      validationSchema={FeedbackSchema}
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label className={s.label}>
          <span className={s.fieldTitle}>Name</span>
          <Field className={s.input} name="name" />
          <ErrorMessage className={s.error} name="name" component="span" />
        </label>
        <label className={s.label}>
          <span className={s.fieldTitle}>Number</span>
          <Field className={s.input} name="number" type="text" />
          <ErrorMessage className={s.error} name="number" component="span" />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
