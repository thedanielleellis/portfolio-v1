import classes from './NavBar.module.css'
import logo from './../../img/danielle.png'
import pdf from './../../img/resume.pdf'



const NavBar = () => {
    return (
        <div className={classes.NavBar}>
            <div className={classes.Logo}>
                <a href="/"><img src={logo} alt="logo" width="170" height="150"></img></a>
            </div>
            <div className={classes.NavRight}>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/#about">About</a>
                        </li>
                        <li>
                            <a href="/#projects">My Work</a>
                        </li>
                        <li>
                            <a href={pdf} target ="_blank" rel="noreferrer">Resume</a>
                        </li>
                        <li>
                            <a href="https://dev.to/thedanielleellis" target = "_blank" rel="noreferrer"> Blog</a>
                        </li>
                        <li>
                            <a href="/#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    );
}

export default NavBar;