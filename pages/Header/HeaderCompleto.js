import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBolt, faDraftingCompass} from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.css'
import Header from './Header'

export default function HeaderCompleto() {
    return (
        <div id="header">
            <Header/>
            <section className={styles.mainSection}>
                <p className={styles.author}>Lucas Rodrigues Severo</p>
                <p className={styles.subtitle}>Desenvolvedor</p>
                <p className={styles.subtitle}>
                    <FontAwesomeIcon icon={faBolt}/>
                    <FontAwesomeIcon icon={faDraftingCompass}/>    
                </p>
            </section>
        </div>
    )
}