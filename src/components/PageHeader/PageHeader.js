import styles from './PageHeader.module.css'

const PageHeader = (props) => {
    return (
        <div className={styles.Container}>

            <h1>{props.title}</h1>
        </div>
    );
}

export default PageHeader;