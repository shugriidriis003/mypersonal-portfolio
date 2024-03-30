
import React from 'react'
import skills from "../../data/skills.json";
import { getImageUrl } from '../../utils';
import styles from "./Skills.module.css";


export const Skills = () => {
  return (
   <section  className={styles.container} id="skills">
    <h2 className={styles.title}>Skills</h2>
    <div className={styles.content}>
        <div className={styles.skills}>
            {
                skills.map((skill, id) =>{
                    return(
                        <div key={id} className={styles.skill}>
                        <div className={styles.skillimageContainer}>
                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                        </div>
                        <p>{skill.title}</p>
                        </div>
                    );
                })}
        </div>
      {/* {
        history.map((historyItem, id) =>{
            return(
              <li key={id}>
                <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organization} Logo`} />
                <div>
                    <h3>{` ${historyItem.role},${historyItem.organisation}` }</h3>
                    <p>{` ${historyItem.startDate},${historyItem.endDate}` }</p>
                    <ul>{historyItem.Skills.map((skills,id) => {
                        return <li></li>
                    }
                    )}</ul>
                </div>
              </li>      */}
            {/* );
        }
        )
      } */}
      
      <ul></ul>
    </div>
    </section>
  )
}

export default Skills;
