import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import { selectLoggedIn } from "../../redux/auth/selectors";
import s from "./Register.module.css";
import * as Yup from "yup";

const Register = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
    name: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email format.").required("Required"),
    password: Yup.string()
      .min(8, "You need to enter at least 8 characters.")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values));
    options.resetForm();
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div className={s.registerContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <Field
            className={s.input}
            name="name"
            placeholder="Enter your name"
          />
          <ErrorMessage name="name" className={s.error} />
          <Field
            className={s.input}
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" className={s.error} />
          <Field
            className={s.input}
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" className={s.error} />
          <button className={s.button} type="submit">
            Register
          </button>
          <p className={s.linkText}>
            You have an account?{" "}
            <Link className={s.link} to="/login">
              Sign in
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
