import classes from './NavBar.module.css'
import logo from './../../img/danielle.png'


const NavBar = () => {
    return (
        <div className={classes.NavBar}>
            <div className={classes.Logo}><a href="/"><img src={logo} alt="logo"></img></a></div>
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
                        <a href="/#contact">Resume</a>
                    </li>
                    <li>
                        <a href="/#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default NavBar;