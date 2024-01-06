import styles from './feedbackOptions.module.css'

const FeedbackOptions = ({ options, leaveFeedback }) => {
    
    const buttonElements = options.map(name => <button onClick={(()=> leaveFeedback(name))} key={name} className={styles.button}>{name}</button>)

    return <div className={styles.buttonWrap}>{buttonElements}</div> 
}
export default FeedbackOptions;