import classes from './Quote.module.css'


const Quote = () => {
    return (  
        <div className={classes.Quote}>
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <p><em>"If at first you don't succeed try try again" <br/> 
                    - Danielle Ellis</em>.</p>
                </div>
            </div>
        </div>
    );
}
 
export default Quote;