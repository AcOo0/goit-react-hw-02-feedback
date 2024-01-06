import { Component } from 'react';

import Block from './Block/Block';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

import styles from './feedback.module.css';

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

    leaveFeedback = (keyName) => {
        this.setState(prevState => { 
            return {
                [keyName]: prevState[keyName] + 1
            }
        })
    }

    render() {
        const { good, neutral, bad } = this.state;

        const total = this.calcTotal();

        const positivePercentage = this.calcPercentage("good");

        return (
            <div className={styles.wrapper}>
                <Block title='Please leave feedback' >
                    <FeedbackOptions options={Feedback.feedbackOptions} leaveFeedback={this.leaveFeedback}/>
                </Block>
                <Block title='Statistics'>
                    {this.calcTotal() ? (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />) : (<Notification title= 'There is no feedback'/>)}
                </Block></div>
        )
    }
}

export default Feedback;