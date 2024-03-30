import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl ("about/aboutIcon.png")} alt="me sitting with laptop"
             className={styles.aboutImage}

            />
            <ul className={styles.aboutItems}>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with experience in
                             buiilding responsive and and optimized</p>
                    </div>
                </li>

                <li  className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Cursor" />
                    <div  className={styles.aboutItemText}>
                        <h3>Back-End Developer</h3>
                        <p>
                        I have experience developing fast and optimised back-end systems
                and APIs
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI ICon" />
                    <div  className={styles.aboutItemText}>
                        <h3>Graphic Designer</h3>
                        <p>
                            i have skills with design and editing Video
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About;
