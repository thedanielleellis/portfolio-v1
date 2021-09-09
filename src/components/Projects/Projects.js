import classes from './Projects.module.css'
import PageHeader from './../PageHeader/PageHeader.js'
import portfolio from './../../img/portfolio.png'
import hiddengems from './../../img/hiddengems.png'
import virtualdance from './../../img/virtualdance.png'
import { motion } from 'framer-motion'



const Projects = () => {
    return (
        <div className={classes.Projects} id="projects">
            <div className={classes.PageHeader}>
                <PageHeader title={'Featured Work'} />
            </div>
            <div className={classes.TechDesc}>
                <p>Technologies I've been working with recently:</p>
                    <ul>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Node.js</li>
                        <li>Ruby</li>
                        <li>Rails</li>
                        <li>PostgreSQL</li>
                    </ul>
            </div>
            <div className={classes.Container}>
                <div className={classes.PortfolioRow}>
                    <div className={classes.PortfolioWrapper}>
                        <motion.div className={classes.PortfolioItem}
                            whileHover={{
                                scale: 1.1,
                                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                                boxShadow: "0pz 0pz 8px rgb(255, 255, 255)"
                            }}
                        >
                            <div className={classes.ImageLink}>
                                <a href="https://dev.to/thedanielleellis"><img src={portfolio} alt="portfolio project" target="_blank" rel="noreferrer"></img></a>
                                <div className={classes.PortfolioInfo}>
                                    <h3>Portfolio Website Early Version</h3>
                                    <h4>Ruby on Rails API, React/Redux, JavaScript, HTML/CSS, Bootstrap</h4>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className={classes.PortfolioWrapper}>
                        <motion.div className={classes.PortfolioItem}
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255, 255, 255)",
                            boxShadow: "0pz 0pz 8px rgb(255, 255, 255)"
                        }}>
                            <div className={classes.ImageLink}>
                                <a href="https://dev.to/thedanielleellis"><img src={hiddengems} alt="hidden gems project" target="_blank" rel="noreferrer"></img></a>
                                <div className={classes.PortfolioInfo}>
                                    <h3>Hidden Gems Mentorship</h3>
                                    <h4>Ruby on Rails, PostgreSQL, JavaScript, HTML/CSS, Bootstrap, ActiveRecord</h4>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className={classes.PortfolioWrapper}>
                        <motion.div className={classes.PortfolioItem}
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255, 255, 255)",
                            boxShadow: "0pz 0pz 8px rgb(255, 255, 255)"
                        }}>
                            <div className={classes.ImageLink}>
                                <a href="https://dev.to/thedanielleellis"><img src={virtualdance} alt="virtual dance project" target="_blank" rel="noreferrer"></img></a>
                                <div className={classes.PortfolioInfo}>
                                    <h3>Virtual Dance Machine</h3>
                                    <h4>Ruby on Rails, JavaScript, HTML/CSS</h4>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projects;