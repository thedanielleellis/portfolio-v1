import {FaLinkedinIn, FaBloggerB, FaGithub} from "react-icons/fa";
import classes from './Contact.module.css'

const handleURL = (url) => {
    return () => window.open(url, "_blank")
}

const Contact = () => {
    return ( 
        <div className={classes.Contact} id="contact">
            <div className={classes.ContactIcons}>
                <FaLinkedinIn color='white' size='30px' style={{padding: '1%'}}
                onClick={handleURL('https://www.linkedin.com/in/thedanielleellis/')} />

                <FaBloggerB color='white' size='30px' style={{padding: '1%'}}
                onClick={handleURL('https://dev.to/thedanielleellis')} />

                <FaGithub color='white' size='30px' style={{padding: '1%'}}
                onClick={handleURL('https://github.com/thedanielleellis')} />
            </div>
        </div>
     );
}
 
export default Contact;