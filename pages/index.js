import Head from 'next/head'
import Header from './Header/Header'
import Projetos from './Projetos/Projetos'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Projetos/>
    </div>
  )
}
