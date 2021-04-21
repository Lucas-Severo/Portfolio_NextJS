import styles from './Contato.module.css'
import { useState } from 'react'

export default function Contato() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [showErrorMessageNome, setShowErrorMessageNome] = useState(false)
    const [showErrorMessageEmail, setShowErrorMessageEmail] = useState(false)
    const [showErrorMessageAssunto, setShowErrorMessageAssunto] = useState(false)
    const [errorMessageEmail, setErroMessageEmail] = useState('')

    const changeNome = (e) => {
        setNome(e.target.value)
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changeAssunto = (e) => {
        setAssunto(e.target.value)
    }


    const enviarFormulario = () => {
        if(validarFormulario()) {
            setTimeout(() => {
                limparCampos()
            }, 500)
        }
    }

    const validarFormulario = () => {
        let formularioValido = true
        if(nome.trim() == '') {
            setShowErrorMessageNome(true)
            formularioValido = false
        }
        if(email.trim() == '') {
            setShowErrorMessageEmail(true)
            setErroMessageEmail('Este Campo é Obrigatório')
            formularioValido = false
        }
        else if(!verificarEmailValido(email.trim())) {
            setShowErrorMessageEmail(true)
            setErroMessageEmail('Use um endereço de e-mail válido')
            formularioValido = false
        }
        if(assunto.trim() == '') {
            setShowErrorMessageAssunto(true)
            formularioValido = false
        }
        limparErros()
        return formularioValido
    }

    const verificarEmailValido = (email) => {
        const re = /\S+@\S+\.\S+/
        return re.test(email)
    }

    const limparCampos = () => {
        setNome('')
        setEmail('')
        setAssunto('')
    }

    const limparErros = () => {
        setTimeout(() => {
            setShowErrorMessageNome(false)
            setShowErrorMessageEmail(false)
            setShowErrorMessageAssunto(false)
        }, 2000)
    }

    return (
        <div id="contatoSection" className={styles.contatoContainer}>
            <p className={styles.contatoTitle}>Contato</p>
            <div className={styles.formulario}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text" 
                        name="nome" 
                        id="nome" 
                        value={nome}
                        className={showErrorMessageNome && styles.inputError}
                        onChange={changeNome}/>
                    {
                        showErrorMessageNome && 
                        <p className={styles.formularioErro}>Este Campo é Obrigatório</p>
                    }
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        className={showErrorMessageEmail && styles.inputError}
                        onChange={changeEmail}/>
                    {
                        showErrorMessageEmail && 
                        <p className={styles.formularioErro}>{errorMessageEmail}</p>
                    }
                </div>
                <div>
                    <label htmlFor="assunto">Assunto</label>
                    <textarea 
                        name="assunto" 
                        id="assunto"
                        value={assunto}
                        className={`${styles.assunto} ${showErrorMessageAssunto ? styles.inputError: ''}`} 
                        onChange={changeAssunto}>
                    </textarea>
                    {
                        showErrorMessageAssunto && 
                        <p className={styles.formularioErro}>Este Campo é Obrigatório</p>
                    }
                    <button 
                        type="submit" 
                        onClick={enviarFormulario} 
                        className={styles.submitButton}>Enviar</button>
                </div>
            </div>
        </div>
    )
}