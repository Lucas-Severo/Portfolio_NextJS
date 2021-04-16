import Head from 'next/head'
import ProjectApi from "../../src/core/api/ProjectApi"
import {useState, useEffect} from 'react'
import styles from './detalhe.module.css'
import Header from '../Header/Header'

export default function Post({ data }) {

  const [project, setProject] = useState({})

  useEffect(() => {
    setProject(data)
  }, [])

  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>
      <Header/>
      <div className={styles.container}>
        <div className={styles.projectContainer}>
          <p className={styles.title}>{project.name}</p>
          <p>Finalizado em: {project.completedOn}</p>
          <p>Criado por: {project.createdBy}</p>
          <p>Link: <a target="blank" href={project.link}>{project.link}</a></p>
          <p>Descrição: {project.description}</p>
          <p>Categorias: {project.categories}</p>
        </div>
      </div>
    </>
  )
}

async function getAllProjects() {
  return (await ProjectApi.buscarProjetos()).projects.map(project => {
    return {
      params: {
        id: `${project.uid}`
      }
    }
  })
}

async function getProject(id) {
  const projeto = (await ProjectApi.buscarProjetos()).projects
    .filter(projeto => projeto.uid === id)
  
  if(projeto.length === 1) {
    return projeto[0]
  }
  return projeto
}

export async function getStaticPaths() {
    const projects = await getAllProjects()
    return {
        paths: projects,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
  const data = await getProject(params.id)
  return {
    props: {data}
  }
}