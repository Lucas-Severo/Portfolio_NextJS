import styles from './Sobre.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGit, faGithub, faHtml5, faJava, faJs, faLinkedin, faNodeJs, faPython, faReact, faVuejs} from '@fortawesome/free-brands-svg-icons'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import {faCss3} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

export default function Sobre() {

    const [showLanguages, setShowLanguages] = useState(false);

    const showLanguage = () => {
        setShowLanguages(!showLanguages)
    }

    return (
        <>
            <div id="sobreSection" className={styles.sobreSection}>
                <h1 className={styles.sectionTitle}>Sobre</h1>
                <div className={styles.face}></div>
                <p className={styles.name}>Lucas Rodrigues Severo</p>
                <p className={styles.aboutSection}>Cursando 5º Semestre de Análise e desenvolvimento de sistemas - Instituto Federal de Mato Grosso do Sul(IFMS)</p>
                <div className={styles.socialMedia}>
                    <a href="https://github.com/Lucas-Severo" aria-label="Github" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
                    <a href="https://www.linkedin.com/in/lucas-rodrigues-severo-aa47a219b/" aria-label="Linkedin" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
                </div>
                <div className={styles.btnVerMais} onClick={showLanguage}>
                    <p className={styles.btnVerMaisTexto}>Ver {showLanguages ? "Menos": "Mais"}</p>
                    <FontAwesomeIcon icon={faArrowDown}/>
                </div>
                { showLanguages && (
                    <div className={styles.languagesContainer}>
                        <p>Possuo conhecimento em:</p>
                        <ul className={styles.languages}>
                            <FontAwesomeIcon className={`${styles.java} ${styles.language}`} icon={faJava}/>
                            <FontAwesomeIcon className={`${styles.github} ${styles.language}`} icon={faGithub}/>
                            <FontAwesomeIcon className={`${styles.git} ${styles.language}`} icon={faGit}/>
                            <FontAwesomeIcon className={`${styles.html} ${styles.language}`} icon={faHtml5}/>
                            <FontAwesomeIcon className={`${styles.css} ${styles.language}`} icon={faCss3}/>
                            <FontAwesomeIcon className={`${styles.react} ${styles.language}`} icon={faReact}/>
                            <FontAwesomeIcon className={`${styles.javascript} ${styles.language}`} icon={faJs}/>
                            <FontAwesomeIcon className={`${styles.vuejs} ${styles.language}`} icon={faVuejs}/>
                            <FontAwesomeIcon className={`${styles.node} ${styles.language}`} icon={faNodeJs}/>
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}