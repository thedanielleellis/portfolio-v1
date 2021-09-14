import styles from './Projects.module.css'
import PageHeader from './../PageHeader/PageHeader.js'
import portfolio from './../../img/portfolio.png'
import hiddengems from './../../img/hiddengems.png'
import virtualdance from './../../img/virtualdance.png'
import { motion } from 'framer-motion'

const listTitleStyle = { fontWeight: 900, color: '#b45118', marginBottom: '4px', fontSize: '18px' }


const project1 =
    <div>
        <a href="https://danielle-ellis-v0-porfolio.netlify.app/"><img src={portfolio} alt="portfolio project" target="_blank" rel="noreferrer"></img></a>
        <ul>
            <li style={listTitleStyle}>Portfolio Website Early Version</li>
            <li>Ruby on Rails API - React/Redux</li>
            <li>JavaScript - Bootstrap</li>

        </ul>
    </div>

const project2 =
    <div>
        <a href="https://github.com/thedanielleellis/HiddenGemsMentorship"><img src={hiddengems} alt="hidden gems project" target="_blank" rel="noreferrer"></img></a>
        <ul>
            <li style={listTitleStyle}>Hidden Gems Mentorship</li>
            <li>Ruby on Rails - JavaScript</li>


        </ul>
    </div>

const project3 =
    <div>
        <a href="https://github.com/thedanielleellis/Virtual-Dance-Machine"><img src={virtualdance} alt="virtual dance project" target="_blank" rel="noreferrer"></img></a>
        <ul>
            <li style={listTitleStyle}>Virtual Dance Machine</li>
            <li>Ruby on Rails - PostgreSQL - JavaScript</li>
            <li>Bootstrap - ActiveRecord</li>
        </ul>
    </div>

const totalProjects = [project1, project2, project3]


const Projects = () => {
    return (
        <div className={styles.Projects} id="projects">
            <PageHeader title={'Featured Work'} />
            <div className={styles.TechDesc}>
                <p>Technologies I've been working with recently:</p>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Node.js</li>
                    <li>Ruby</li>
                    <li>Rails</li>
                    <li>PostgreSQL</li>
                </ul>
            </div>
            <div className={styles.Container}>
                {totalProjects.map(projects => {
                    return (
                        <motion.div className={styles.List}
                            whileHover={{
                                scale: 1.1,
                                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                                boxShadow: "0pz 0pz 8px rgb(255, 255, 255)"
                            }}>
                            {projects}
                        </motion.div>
                    )
                })}
            </div>

        </div>
    );
}

export default Projects;
