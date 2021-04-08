import styles from './Sobre.module.css'

export default function Sobre() {
    return (
        <>
            <div className={styles.sobreSection}>
                <h1 className={styles.sectionTitle}>Sobre</h1>
                <div className={styles.face}></div>
                    <p className={styles.name}>Lucas Rodrigues Severo</p>
                    <p className={styles.aboutSection}>Cursando Análise e desenvolvimento de sistemas - Instituto Federal de Mato Grosso do Sul(IFMS)</p>
                    <div className={styles.socialMedia}>
                        <a href="https://github.com/Lucas-Severo" aria-label="Github" target="_blank" rel="noreferrer"><i class="fab fa-github social"></i></a>
                        <a href="https://www.linkedin.com/in/lucas-rodrigues-severo-aa47a219b/" aria-label="Linkedin" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in social"></i></a>
                    </div>
            </div>
        </>
    )
}