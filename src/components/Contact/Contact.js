import { FaPaperPlane } from "react-icons/fa";
import classes from './Contact.module.css'
import 'font-awesome/css/font-awesome.min.css';
import linkedin from './../../img/linkedin.png'
import github from './../../img/github.png'
import email from './../../img/email.png'
import blog from './../../img/blog.png'
import twitter from './../../img/twitter.png'
import {motion} from 'framer-motion'


const Contact = () => {
    return (
        <div className={classes.Contact} id="contact">
            <motion.h1 
            style={{paddingLeft: '140px'}}
            whileHover={{scale: 1.5, x: -100}}
            >FRAMER MOTION</motion.h1>

            <FaPaperPlane className={classes.EmailIcon} color='black' size='30em' style={{ padding: '1%' }} />
            <div className={classes.Text}>
                <h1>Let's Stay Connected!</h1>
                <h3> Whether you have an idea for a project or just want to chat, feel free to connect with me!</h3>
            </div>

            <div className={classes.ContactIcons}>
                <div className={classes.ContactIconsWrapper}>

                    <a href="https://www.linkedin.com/in/thedanielleellis/" target="_blank" rel="noopener noreferrer">
                        <img alt="linkedin_icon" src={linkedin} />
                    </a>
                    <a href="https://github.com/thedanielleellis" target="_blank" rel="noopener noreferrer">
                        <img alt="github_icon" src={github} />
                    </a>
                    <a href="https://twitter.com/_codedani" target="_blank" rel="noopener noreferrer">
                        <img alt="twitter_icon" src={twitter} />
                    </a>
                    <a href="https://dev.to/thedanielleellis" target="_blank" rel="noopener noreferrer">
                        <img alt="blog_icon" src={blog} />
                    </a>
                    <a href="mailto:thedanielleellis@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img alt="email_icon" src={email} />
                    </a>
                </div>
            </div>
            <div className={classes.Footer}>
                <p>© 2021 Danielle Ellis</p>
            </div>
        </div>
    );
}

export default Contact;