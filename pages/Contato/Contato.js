import styles from './Contato.module.css'

export default function Contato() {
    return (
        <div className={styles.contatoContainer}>
            <p className={styles.contatoTitle}>Contato</p>
            <div className={styles.formulario}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" id="nome"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div>
                    <label htmlFor="assunto">Assunto</label>
                    <textarea 
                        className={styles.assunto} 
                        name="assunto" 
                        id="assunto">
                    </textarea>
                    <button type="submit" className={styles.submitButton}>Enviar</button>
                </div>
            </div>
        </div>
    )
}