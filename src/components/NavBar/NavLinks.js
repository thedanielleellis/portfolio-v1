import pdf from './../../img/resume.pdf'

const NavLinks = (props) => {
    return (
        <ul>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/">Home</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/#about">About</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/#projects">My Work</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href={pdf} target="_blank" rel="noreferrer">Resume</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="https://dev.to/thedanielleellis" target="_blank" rel="noreferrer"> Blog</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="/#contact">Contact</a>
            </li>
        </ul>
    );
}

export default NavLinks;