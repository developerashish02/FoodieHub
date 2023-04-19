import { useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
    const { status, statusText } = useRouteError();
    return (
        <div className={styles.error_page}>
            <h1 className={styles.error_heading}>Oops!</h1>
            <p className={styles.error_para}>
                Something went wrong. Please try again later.
            </p>
            <p className={styles.error_para}>
                {" "}
                {status} : {statusText}{" "}
            </p>
        </div>
    );
};

export default ErrorPage;
