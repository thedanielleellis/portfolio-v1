import classes from './About.module.css'
import me from './../../img/me.jpg'

const About = () => {
    return ( 
        <div className={classes.AboutMe} id="about">
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>Hello! I am Danielle</h2>
                    <p>
                        I am a Software Engineer based in Dallas.
                        Duis consectetur qui qui laborum aliquip esse amet commodo sunt cupidatat consequat quis. Velit deserunt nostrud exercitation pariatur officia magna anim. Id fugiat enim sit magna id officia consectetur. Velit ut incididunt tempor cupidatat laboris nisi eiusmod nostrud aute id ullamco ea. Nisi elit dolor deserunt laboris aute aliquip.
                        Aute cupidatat id proident irure. Amet pariatur consequat commodo sunt id aliquip aute amet do. Irure occaecat sunt dolor aliqua Lorem do sit officia. Ad commodo aute ut magna commodo nostrud nisi occaecat culpa eiusmod dolore ipsum. Sunt quis culpa non in magna consequat pariatur incididunt officia sunt fugiat nostrud dolore qui.
                    </p>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Me} src={me} alt="me"></img>
                </div>
            </div>
        </div>
     );
}
 
export default About;