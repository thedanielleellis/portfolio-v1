import styles from './About.module.css'
import readingphoto from './../../img/reading.JPG'

const About = () => {
    return ( 
        <div className={styles.AboutMe} id="about">
            <div className={styles.Container}>
                <div className={styles.Text}>
                    <h2>Hello! I am Danielle.</h2>
                    <p>
                        I am a creative Software Engineer based in Dallas, TX with a passion for applying new cutting-edge technologies to enhance the innovative atmosphere of a business. 
                    </p>
                    <p>
                        My interest in web development started in 2016 when I built my very first business website using custom themes and editing the html and css. After that, I created websites for family and friends then began as a freelancer part-time. 
                    </p>
                    <p>     
                        In the last 3 years, I've had the privilege of working as an Executive Admin Assistant where I worked hand-in-hand with the Software Engineering Department to review and give feedback for healthcare database structures and I designed custom marketing materials such as global weekly newsletters, email campaigns, and websites.
                    </p>
                    <p> 
                        Fast-forward to today, my recently finished Full-Stack Software Engineering program experience with Flatiron School has shaped my coding knowledge with object-oriented programming, user interfaces, wireframes, Javascript, Ruby, Rails, among other areas. I’m excited to combine my experience in business administration and entrepreneurship with my software development skills! 
                    </p>
                
                </div>
                <div className={styles.Photo}>
                    <img className={styles.AboutPhoto} src={readingphoto} alt="me"></img>
                </div>
            </div>
        </div>
     );
}
 
export default About;