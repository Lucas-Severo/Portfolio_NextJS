import Head from 'next/head'
import Header from './Header/Header'
import Projetos from './Projetos/Projetos'
import Sobre from './Sobre/Sobre'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfólio</title>
      </Head>
      <Header/>
      <Projetos/>
      <Sobre/>
    </div>
  )
}
