import classes from './Projects.module.css'
import PageHeader from './../PageHeader/PageHeader.js'
import portfolio from './../../img/portfolio.png'
import hiddengems from './../../img/hiddengems.png'
import virtualdance from './../../img/virtualdance.png'


const Projects = () => {
    return ( 
        <div className={classes.Projects} id="projects">
            <div className={classes.PageHeader}>
            <PageHeader title={'My Work'} />
            <p>
                I'm a life long learner and enjoy learning new stuff! Below are some programming languages, toolkits, frameworks and librabries that I worked with and like. 
            </p>
            </div>
            <div className={classes.Container}>
                <div className={classes.PortfolioRow}>
                    <div className={classes.PortfolioWrapper}>
                        <div className={classes.PortfolioItem}>
                            <div className={classes.PortfolioOverlay}></div>
                                <div className={classes.Links}>
                                    <div className={classes.ImageLink}>
                                    <img src={portfolio} alt="portfolio project"></img>
                                    <div className={classes.PortfolioInfo}>
                                        <h3>TestApp</h3>
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className={classes.PortfolioWrapper}>
                        <div className={classes.PortfolioItem}>
                            <div className={classes.PortfolioOverlay}></div>
                                <div className={classes.Links}>
                                    <div className={classes.ImageLink}>
                                    <img src={hiddengems} alt="hidden gems project"></img>
                                    <div className={classes.PortfolioInfo}>
                                        <h3>TestApp</h3>
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className={classes.PortfolioWrapper}>
                        <div className={classes.PortfolioItem}>
                            <div className={classes.PortfolioOverlay}></div>
                                <div className={classes.Links}>
                                    <div className={classes.ImageLink}>
                                    <img src={virtualdance} alt="virtual dance project"></img>
                                    <div className={classes.PortfolioInfo}>
                                        <h3>TestApp</h3>
                                    </div>
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