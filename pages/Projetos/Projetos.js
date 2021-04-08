import Projeto from '../Projeto/Projeto'
import styles from './Projetos.module.css'

export default function Projetos() {
    return (
        <section className={styles.projectsSection}>
            <h1 className={styles.sectionName}>Projetos</h1>
            <div className={styles.projectsContainer}>
                
            <Projeto
                className={styles.projeto1}
                image="https://res.cloudinary.com/practicaldev/image/fetch/s--i_sb3chq--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/fk0849hvg2rt13bpqhjy.jpg"
                description="Um site para pesquisar informações no github"/>

            <Projeto
                className={styles.projeto2}
                image="https://res.cloudinary.com/practicaldev/image/fetch/s--i_sb3chq--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/fk0849hvg2rt13bpqhjy.jpg"
                description="Um site para pesquisar informações no github"/>

            <Projeto
                    className={styles.projeto2}
                    image="https://res.cloudinary.com/practicaldev/image/fetch/s--i_sb3chq--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/fk0849hvg2rt13bpqhjy.jpg"
                    description="Um site para pesquisar informações no github"/>

            <Projeto
                    className={styles.projeto2}
                    image="https://res.cloudinary.com/practicaldev/image/fetch/s--i_sb3chq--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/fk0849hvg2rt13bpqhjy.jpg"
                    description="Um site para pesquisar informações no github"/>
            </div>
        </section>
    )
}