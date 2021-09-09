import styles from './Home.module.css'
import headshot from './../../img/headshot.png'
import WaveLine from './WaveLine.js'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <div className={styles.Home} id="home">
            <WaveLine />
            <div className={styles.Container}>
                <div className={styles.Welcome}>
                    <h1>WELCOME!</h1>
                    <h1>I Build Robust Web Applications For Next-Gens </h1>
                </div>
                <div className={styles.HeaderPhotos}>
                    <motion.img className={styles.Headshot}
                        src={headshot} alt="headshot"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.6 }}>
                    </motion.img>
                    <p>Danielle Ellis, MBA</p>
                    <p>Software Engineer</p>
                </div>
            </div>
        </div>
    );
}

export default Home;