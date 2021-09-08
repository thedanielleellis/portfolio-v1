import classes from './Projects.module.css'
import PageHeader from './../PageHeader/PageHeader.js'
import portfolio from './../../img/portfolio.png'
import hiddengems from './../../img/hiddengems.png'
import virtualdance from './../../img/virtualdance.png'


const Projects = () => {
    return (
        <div className={classes.Projects} id="projects">
            <div className={classes.PageHeader}>
                <PageHeader title={'Featured Work'} />
            </div>
            <div className={classes.Container}>
                <div className={classes.PortfolioRow}>
                    <div className={classes.PortfolioWrapper}>
                        <div className={classes.PortfolioItem}>
                            <div className={classes.ImageLink}>
                                <a href="https://dev.to/thedanielleellis"><img src={portfolio} alt="portfolio project" target="_blank" rel="noreferrer"></img></a>
                                <div className={classes.PortfolioInfo}>
                                    <h3>Portfolio Website Early Version</h3>
                                    <h4>Ruby/Rails React</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.PortfolioWrapper}>
                        <div className={classes.PortfolioItem}>
                            <div className={classes.ImageLink}>
                                <a href="https://dev.to/thedanielleellis"><img src={hiddengems} alt="hidden gems project" target="_blank" rel="noreferrer"></img></a>
                                <div className={classes.PortfolioInfo}>
                                    <h3>Hidden Gems Mentorship</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.PortfolioWrapper}>
                        <div className={classes.PortfolioItem}>
                            <div className={classes.ImageLink}>
                                <a href="https://dev.to/thedanielleellis"><img src={virtualdance} alt="virtual dance project" target="_blank" rel="noreferrer"></img></a>
                                <div className={classes.PortfolioInfo}>
                                    <h3>Virtual Dance Machine</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projects;