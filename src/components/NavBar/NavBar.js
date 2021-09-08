import classes from './NavBar.module.css'
import logo from './../../img/danielle.png'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'


const NavBar = () => {
    return (
        <div className={classes.NavBar}>
            <div className={classes.Logo}>
                <a href="/"><img src={logo} alt="logo" width="170" height="150"></img></a>
            </div>
            <div className={classes.NavRight}>
                <Navigation />
                <MobileNavigation />
            </div>
        </div>

    );
}

export default NavBar;