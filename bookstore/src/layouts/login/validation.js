import * as yup from "yup";

const validation = yup.object({
  username: yup.string("Enter your email").required("username is required"),
  password: yup
    .string("Enter your password")
    .min(4, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});
export default validation;
