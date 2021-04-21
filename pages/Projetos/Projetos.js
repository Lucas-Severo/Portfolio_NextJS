import Projeto from '../Projeto/Projeto'
import styles from './Projetos.module.css'
import ProjectApi from '../../src/core/api/ProjectApi'
import {useState, useEffect} from 'react'
import Router from 'next/router'

export default function Projetos() {

    const [projects, setProjects] = useState([])

    useEffect(async() => {
        const response = await ProjectApi.buscarProjetos()
        setProjects(response.projects)
    }, [])

    const redirecionarPagina = (projetoId) => {
        Router.push(`/detalhe/${projetoId}`)
    }

    return (
        <section id="projectSection" className={styles.projectsSection}>
            <h1 className={styles.sectionName}>Projetos</h1>
            <div className={styles.projectsContainer}>
                {
                    projects.map(project => (
                        <div
                            className={styles.project}
                            onClick={() => redirecionarPagina(project.uid)}>
                                <Projeto
                                    image="https://res.cloudinary.com/practicaldev/image/fetch/s--i_sb3chq--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/fk0849hvg2rt13bpqhjy.jpg"
                                    description={project.description}/>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}