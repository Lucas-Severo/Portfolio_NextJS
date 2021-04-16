import styles from './Header.module.css'
import Router from 'next/router'

export default function Header() {

    const goToHome = () => {
        Router.replace("/")
    }

    return (
        <header className={styles.header}>
            <div className={styles.item} onClick={goToHome}>Lucas Rodrigues Severo</div>
            <ul className={styles.menu}>
                <li className={styles.item} onClick={goToHome}>Home</li>
                <li className={styles.item} onClick={goToHome}>Projetos</li>
                <li className={styles.item} onClick={goToHome}>Sobre</li>
                <li className={styles.item} onClick={goToHome}>Contato</li>
            </ul>
        </header>
    )
}