import NavLinks from './NavLinks'
import styles from './NavBar.module.css'
import { CgMenuRound } from 'react-icons/cg'
import { CgCloseO } from 'react-icons/cg'
import { useState } from 'react'


const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <CgMenuRound className={styles.Hamburger}
        size='40px' color='white'
        onClick={() => setOpen(!open)}
    />

    const closeIcon = <CgCloseO className={styles.Hamburger}
        size='40px' color='white'
        onClick={() => setOpen(!open)}
    />

    const closeMobileMenu = () => setOpen(false);

    return (
        <nav className={styles.MobileNavigation}>
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </nav>
    );
}

export default MobileNavigation;