import React , {useState} from "react";

import styles from "./Navbar.module.css";

import{getImageUrl} from "../../utils";

export const Navbar = ()=>{
    const[menuOpen, setmenuOpen]= useState(false);
    return(
        
     <nav className={styles.navbar}>
        <a className={styles.title} href="/"> shugri'portfolio</a>
        <div className={styles.menu}>
        <img className={styles.menuBtn} 
        src={ menuOpen ? 
        getImageUrl("nav/closeIcon.png")
        :getImageUrl("nav/menuIcon.png")
        } alt="menu-button"
        onClick={()=> setmenuOpen(!menuOpen) }
        />
           
            <ul className={ `${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skill</a></li>
                <li><a href="#projects">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>

     </nav>
 
    );     
};
export default Navbar;