import classes from './Quote.module.css'


const Quote = () => {
    return (  
        <div className={classes.Quote}>
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <p><em>I am a beautful quote</em>.</p>
                </div>
            </div>
        </div>
    );
}
 
export default Quote;