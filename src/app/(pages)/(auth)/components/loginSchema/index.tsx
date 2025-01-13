import * as yup from "yup";

export const LoginSchema = yup.object({
    Email: yup
    .string()
    .email("Please enter a valid email").optional()
    .required("Please enter your email"),
  Enter_Password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .required("Please enter your password"),
  
  
});
