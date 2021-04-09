import styles from './Sobre.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'

export default function Sobre() {
    return (
        <>
            <div className={styles.sobreSection}>
                <h1 className={styles.sectionTitle}>Sobre</h1>
                <div className={styles.face}></div>
                    <p className={styles.name}>Lucas Rodrigues Severo</p>
                    <p className={styles.aboutSection}>Cursando Análise e desenvolvimento de sistemas - Instituto Federal de Mato Grosso do Sul(IFMS)</p>
                    <div className={styles.socialMedia}>
                        <a href="https://github.com/Lucas-Severo" aria-label="Github" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
                        <a href="https://www.linkedin.com/in/lucas-rodrigues-severo-aa47a219b/" aria-label="Linkedin" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
                    </div>
                    <div className={styles.btnVerMais}>
                        <p className={styles.btnVerMaisTexto}>Ver Mais</p>
                        <FontAwesomeIcon icon={faArrowDown}/>
                    </div>
            </div>
        </>
    )
}