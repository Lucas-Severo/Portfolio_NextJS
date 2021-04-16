import Head from 'next/head'
import HeaderCompleto from './Header/HeaderCompleto'
import Projetos from './Projetos/Projetos'
import Sobre from './Sobre/Sobre'
import Contato from './Contato/Contato'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfólio</title>
      </Head>
      <HeaderCompleto/>
      <Projetos/>
      <Sobre/>
      <Contato/>
    </div>
  )
}
