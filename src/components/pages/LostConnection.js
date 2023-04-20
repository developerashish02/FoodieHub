import styles from "./LostConnection.module.css";

const LostConnection = () => {
    return (
        <div className={styles.offline_message}>
            <p className={styles.message_text}>
                Oops! It looks like you lost your internet connection.
            </p>
            <p className={styles.message_text}>
                Please check your network connection and try again.
            </p>
        </div>
    );
};

export default LostConnection;
