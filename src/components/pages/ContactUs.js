import styles from "./ContactUs.module.css";

const ContactUs = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Contact Us</h1>
            <form className={styles.form}>
                <label className={styles.label} htmlFor="name">Name:</label>
                <input className={styles.input} type="text" id="name" name="name" placeholder="Enter your name" />

                <label className={styles.label} htmlFor="email">Email:</label>
                <input className={styles.input} type="email" id="email" name="email" placeholder="Enter your email" />

                <label className={styles.label} htmlFor="message">Message:</label>
                <textarea className={styles.textarea} id="message" name="message" placeholder="Enter your message"></textarea>

                <button className={styles.button} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactUs; 