import classes from './Projects.module.css'
import PageHeader from './../PageHeader/PageHeader.js'
import code from './../../img/code.png'



const Projects = () => {
    return ( 
        <div className={classes.Projects}>
            <PageHeader title={'My Work'}/>
            <p>
                I'm a life long learner and enjoy learning new stuff! Below are some programming languages, toolkits, frameworks and librabries that I worked with and like. 
            </p>
            <div className={classes.Container}>
                <img src={code} alt="code"></img>

            </div>
        </div>
     );
}
 
export default Projects;