import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBolt, faDraftingCompass} from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.css'

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div>Lucas Rodrigues Severo</div>
                <ul className={styles.menu}>
                    <li className={styles.item}>Home</li>
                    <li className={styles.item}>Projetos</li>
                    <li className={styles.item}>Sobre</li>
                    <li className={styles.item}>Contato</li>
                </ul>
            </header>
            <section className={styles.mainSection}>
                <p className={styles.author}>Lucas Rodrigues Severo</p>
                <p className={styles.subtitle}>Desenvolvedor</p>
                <p className={styles.subtitle}>
                    <FontAwesomeIcon icon={faBolt}/>
                    <FontAwesomeIcon icon={faDraftingCompass}/>    
                </p>
            </section>
        </>
    )
}