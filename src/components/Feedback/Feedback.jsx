import { Component } from 'react';



import styles from './feedback.modules.css';

class Feedback extends Component {
    static feedbackOptions = ['good', 'neutral', 'bad']

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

        calcTotal() {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total;
    }

    calcPercentage(keyName) { 
        const total = this.calcTotal();
        if (!total) { 
            return 0;
        }
        const value = this.state[keyName];
        return Number(((value / total) * 100).toFixed(2));
    }

    leaveFeedback(keyName) {
        this.setState(prevState => { 
            return {
                [keyName]: prevState[keyName] + 1
            }
        })
    }

    render() {
        const { good, neutral, bad } = this.state;

        const buttonElements = Feedback.feedbackOptions.map(name => <button onClick={(()=> this.leaveFeedback(name))} key={name}>{name}</button>)

        // const total = this.calcTotal();

        const positivePercentage = this.calcPercentage("good");

        return (
            <div className={styles.wrapper}>
                <div className={styles.block}>
                    <h2 className={styles.blockTitle}>Please leave feedback</h2>
                    {buttonElements}
                </div>
                <h2 className={styles.blockTitle}>Statistics</h2>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Positive feedback: {positivePercentage}</p>
                <div>

                </div>
            </div>
        )
    }
}

export default Feedback;