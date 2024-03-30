import React from 'react'
import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils'

const Contact = () => {
  return (
     <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>fell free you can catch me any time! </p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")}
             alt="Email icon" />
             <a href="mailto : myemail.com"> myemail.com</a>

        </li>

        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")}
             alt="Email icon" />
             <a href="https://www.linkedin.com"> my linkedin.com</a>

        </li>

        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")}
             alt="github icon" />
             <a href="https://www.github.com"> my github.com</a>

        </li>
    </ul>
  </footer>
  );
}

export default Contact
