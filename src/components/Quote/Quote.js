import styles from './Quote.module.css'


const Quote = () => {
    return (
        <div className={styles.Quote}>
            <div className={styles.Container}>
                <div className={styles.Text}>
                    <p><em>"As a leader, it's a major responsibility on your shoulders to practice the behavior you want others to follow."
                        <br />
                        – Founder, Rose International </em></p>
                </div>
            </div>
        </div>
    );
}

export default Quote;