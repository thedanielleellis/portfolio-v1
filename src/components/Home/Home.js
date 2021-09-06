import classes from './Home.module.css'
import circle from './../../img/circle.png'
import headshot from './../../img/headshot.png'

const Home = () => {
    return (
        <div className={classes.Home} id="home">
            <div className={classes.Container}>
                <h1 className={classes.Welcome}>Building Robust Applications </h1>
                <h1>For Upcoming Generations</h1>
                <br/>
                <br/>
                <br/>
                <br/>


                <p>Danielle Ellis, MBA</p>
                <p>Software Engineer</p>
            </div>
            <img className={classes.Circle} src={circle} alt="circle"></img>
            <img className={classes.Headshot} src={headshot} alt="headshot"></img>
        </div>
    );
}

export default Home;