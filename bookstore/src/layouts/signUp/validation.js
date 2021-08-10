import * as yup from "yup";

const validation = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  firstName: yup
    .string("Enter your firstName")
    .min(3, "FirstName should be of minimum 3 characters length")
    .required("FirstName is required"),
  lastName: yup
    .string("Enter your LastName")
    .min(3, "LastName should be of minimum 3 characters length")
    .required("LastName is required"),
});
export default validation;
