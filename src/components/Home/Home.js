import classes from './Home.module.css'
import code from './../../img/code.png'
import code2 from './../../img/code2.png'


const Home = () => {
    return ( 
        <div className={classes.Home}>
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello, world.</h1>
                <h1>Welcome to my website</h1>
            </div>
            <img className={classes.Code} src={code} alt="code"></img>
            <img className={classes.Code2} src={code2} alt="code2"></img>
        </div>
     );
}
 
export default Home;