import styles from './statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => { 
    return (
        <>
        <p className={styles.text}>Good: {good}</p>
        <p className={styles.text}>Neutral: {neutral}</p>
        <p className={styles.text}>Bad: {bad}</p>
        <p className={styles.text}>Total: {total}</p>
        <p className={styles.text}>Positive feedback: {positivePercentage}%</p>
        </>
            
    )
}

export default Statistics;