import styles from './Quote.module.css'


const Quote = () => {
    return (
        <div className={styles.Quote}>
            <div className={styles.Container}>
                <div className={styles.Text}>
                    <p><em>"Believe you can and you're halfway there."
                        <br />
                        – Theodore Roosevelt </em>.</p>
                </div>
            </div>
        </div>
    );
}

export default Quote;