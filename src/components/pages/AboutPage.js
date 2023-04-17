import React from "react";
import styles from './AboutPage.module.css';

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <h1>About Swiggy</h1>
            <p>
                Swiggy is India's largest online food ordering and delivery platform.
            </p>
            <p>
                With a network of over 1,00,000 restaurants and food outlets, Swiggy
                delivers food from your favourite restaurants right to your doorstep.
            </p>
            <p>
                Founded in 2014, Swiggy is headquartered in Bangalore and has operations
                in over 500 cities in India.
            </p>
        </div>
    );
};

export default AboutPage;
