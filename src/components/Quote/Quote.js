import styles from './Quote.module.css'


const Quote = () => {
    return (
        <div className={styles.Quote}>
            <div className={styles.Container}>
                <div className={styles.Text}>
                    <p><em>"Go looking for the best in people, and you’ll be amazed at how much talent, ingenuity, empathy and good will you’ll find."
                        <br />
                        – Bob Burg, The Go-Giver</em>.</p>
                </div>
            </div>
        </div>
    );
}

export default Quote;