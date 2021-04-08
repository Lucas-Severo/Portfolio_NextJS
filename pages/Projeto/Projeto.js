import styles from './Projeto.module.css'

export default function Projeto(props) {
    return (
        <div className={styles.projetoContainer}>
            <img src={props.image} className={styles.projetoImage}/>
            <div className={styles.description}>
                <p className={styles.projectDescription}>{props.description}</p>
            </div>
        </div>
    )
}