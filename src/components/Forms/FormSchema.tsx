import * as Yup from "yup";

export const FormSchema = Yup.object().shape ({
    firstName: Yup
        .string()
        .min(1, "Full name must be at least a character long.")
        .required("Required"),
    lastName: Yup
        .string()
        .min(1, "Full name must be at least a character long.")
        .required("Required"),
    email: Yup
        .string()
        .email("Invalid email format")
        .required("Please enter an email address"),
    phoneNumber: Yup
        .string()
        .required("Required"),
    state: Yup
        .string()
        .required("Please select a state"),
    quantity: Yup
        .string()
        .required("Please select quantity"), 
})