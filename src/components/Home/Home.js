import classes from './Home.module.css'
import code from './../../img/code.png'



const Home = () => {
    return ( 
        <div className={classes.Home} id="home">
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello, world.</h1>
                <h1>Welcome to my website</h1>
            </div>
            <img className={classes.Code} src={code} alt="code"></img>
        </div>
     );
}
 
export default Home;