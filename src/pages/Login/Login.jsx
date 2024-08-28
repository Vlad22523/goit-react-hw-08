import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import { selectLoggedIn } from "../../redux/auth/selectors";
import s from "./Login.module.css";
import * as Yup from "yup";

const Login = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    options.resetForm();
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format.").required("Required"),
    password: Yup.string()
      .min(8, "You need to enter at least 8 characters.")
      .max(50, "Too Long!")
      .required("Required"),
  });

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div className={s.loginContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <Field
            className={s.input}
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage className={s.error} name="email" component="span" />
          <Field
            className={s.input}
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <ErrorMessage className={s.error} name="password" component="span" />
          <button className={s.button} type="submit">
            Login
          </button>
          <p className={s.linkText}>
            Dont have an account?
            <Link className={s.link} to="/register">
              Sign up!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
