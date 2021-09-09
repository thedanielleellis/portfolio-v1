import classes from './About.module.css'
import aboutphoto from './../../img/AboutPhoto.JPG'

const About = () => {
    return ( 
        <div className={classes.AboutMe} id="about">
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>Hello! I am Danielle.</h2>
                    <p>
                        I am a creative Software Engineer based in Dallas, TX with a passion for applying new cutting-edge technologies to enhance the innovative atmosphere of a business. 
                    </p>
                    <p>
                        My interest in web development started in 2016 when I built my very first business website using custom themes and editing the html and css. After then, I began building websites as a freelancer part-time. 
                    </p>
                    <p>     
                        In the last 3 years, I've had the privilege of working as an Executive Admin Assistant where I worked hand-in-hand with the Software Engineering Department to review and give feedback for healthcare database structures and I designed custom marketing materials such as global weekly newsletters, email campaigns, and websites.
                    </p>
                    <p> 
                        Fast-forward to today, my recently finished Full-Stack Software Engineering program experience with Flatiron School has shaped my coding knowledge with object-oriented programming, user interfaces, wireframes, Javascript, Ruby, Rails, among other areas. I’m excited to combine my experience in business administration and entrepreneurship with my software development skills! 
                    </p>
                
                </div>
                <div className={classes.Photo}>
                    <img className={classes.AboutPhoto} src={aboutphoto} alt="me"></img>
                </div>
            </div>
        </div>
     );
}
 
export default About;