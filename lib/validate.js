import { Formik } from 'formik';

export default function login_validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Reqired';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password =
      'Password must be greter than 8 and less than 30 charaters long';
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid password. Space dose not allow';
  }
  return errors;
}
// Register Page validation ==================> Starting right there>
export function register_Validation(values) {
  const errors = {};
  // Username validation
  if (!values.Username) {
    errors.Username = 'Required';
  } else if (!values.Username.includes(' ')) {
    errors.Username = 'Invalid Username .Space dose not allow';
  }
  // Email validation
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  // Password validation
  if (!values.password) {
    errors.password = 'Reqired';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password =
      'Password must be greater than 8 and less than 30 charaters long';
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid Password';
  }
  // Cpassword validation
  if (!values.cpassword) {
    errors.cpassword = 'Required';
  } else if (values.cpassword !== values.cpassword) {
    errors.cpassword = 'Passwrod dose not match';
  } else if (values.cpassword.includes(' ')) {
    errors.cpassword = "Invalid password. Space dosen't allow";
  }
  return errors;
}
