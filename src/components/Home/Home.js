import classes from './Home.module.css'
import circle from './../../img/circle.png'
import headshot from './../../img/headshot.png'




const Home = () => {
    return ( 
        <div className={classes.Home} id="home">
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello, world.</h1>
                <h1>Welcome to my website</h1>
            </div>
            <img className={classes.Headshot} src={headshot} alt="headshot"></img>
            <img className={classes.Circle} src={circle} alt="circle"></img>
        </div>
     );
}
 
export default Home;