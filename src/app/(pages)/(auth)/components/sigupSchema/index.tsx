import * as yup from "yup";

export const sinUpSchema = yup.object({
    First_Name: yup
    .string()
    .required("Please enter your name"),
    Last_Name: yup
    .string()
    .required("Please enter your Last Name"),
    Email: yup
    .string()
    .email("Please enter a valid email").optional()
    .required("Please enter your email"),
    uername: yup
    .string()
    .required("Please enter your uername"),
  Enter_Password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .required("Please enter your password"),
  
  
});
