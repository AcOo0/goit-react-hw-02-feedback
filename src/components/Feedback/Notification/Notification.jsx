import styles from './notification.module.css'

const Notification = ({ title }) => {
    return (
        <h4 className={styles.title}>{title}</h4>
    )
}

export default Notification;