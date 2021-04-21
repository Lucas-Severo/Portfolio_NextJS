import styles from './Header.module.css'
import Router from 'next/router'

export default function Header() {

    const goToHome = () => {
        const element = document.querySelector("#header")
        scrollToElement(element)
    }

    const goToProjects = () => {
        const element = document.querySelector("#projectSection")
        scrollToElement(element)
    }

    const goToSobre = () => {
        const element = document.querySelector("#sobreSection")
        scrollToElement(element)
    }

    const goToContato = () => {
        const element = document.querySelector("#contatoSection")
        scrollToElement(element)
    }

    const scrollToElement = (element) => {
        if(element) {
            element.scrollIntoView({behavior: "smooth"});
        } else {
            Router.replace("/")
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.item} onClick={goToHome}>Lucas Rodrigues Severo</div>
            <ul className={styles.menu}>
                <li className={styles.item} onClick={goToHome}>Home</li>
                <li className={styles.item} onClick={goToProjects}>Projetos</li>
                <li className={styles.item} onClick={goToSobre}>Sobre</li>
                <li className={styles.item} onClick={goToContato}>Contato</li>
            </ul>
        </header>
    )
}