import styles from './NavBar.module.css'
import logo from './../../img/danielle.png'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'
import { motion } from 'framer-motion'


const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <div className={styles.Logo}>
                <motion.div
                    whileHover={{ scale: 1.5, y: -20 }}           >
                    <a href="/"><img src={logo} alt="logo" width="170" height="150"></img></a>
                </motion.div>
            </div>
            <div className={styles.NavRight}>
                <Navigation />
                <MobileNavigation />

            </div>
        </div>

    );
}

export default NavBar;