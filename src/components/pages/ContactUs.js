import styles from "./ContactUs.module.css";
import { useFormik } from "formik";

const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = "Required";
    } else if (!values.firstName.length > 15) {
        errors.firstName = "Must be 15 characters or less";
    }

    if (!values.message) {
        errors.message = "Required";
    }

    if (!values.email) {
        errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }

    return errors;
};

const ContactUs = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            message: "",
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Contact Us</h1>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <label className={styles.label} htmlFor="firstName">
                    Name:
                </label>
                <input
                    className={styles.input}
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                    <div style={{ color: "red" }}> {formik.errors.firstName} </div>
                )}

                <label className={styles.label} htmlFor="email">
                    Email:
                </label>
                <input
                    className={styles.input}
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    placeholder="Enter your email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                    <div style={{ color: "red" }}> {formik.errors.email} </div>
                )}

                <label className={styles.label} htmlFor="message">
                    Message:
                </label>
                <textarea
                    className={styles.textarea}
                    id="message"
                    name="message"
                    value={formik.values.message}
                    placeholder="Enter your message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                    <div style={{ color: "red" }}> {formik.errors.message} </div>
                )}

                <button className={styles.button} type="submit" disabled={!formik.isValid}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactUs;
